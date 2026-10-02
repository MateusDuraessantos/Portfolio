const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const assert = require('node:assert/strict')

const source = fs.readFileSync('src/projects-datas/datas.ts', 'utf8')
const projects = vm.runInNewContext(source.replace('export const datasProjects =', 'const datasProjects =') + '\n datasProjects')
const assets = new Set()
for (const name of ['myProjectsData', 'myHobbiesData']) {
  const data = fs.readFileSync(`src/constants/${name}.js`, 'utf8')
  const entries = vm.runInNewContext(data.replace(`export const ${name} =`, `const ${name} =`) + `\n ${name}`)
  for (const entry of entries) {
    for (const media of entry.paths || []) assets.add('/projetos/' + media.img)
    if (entry.thumb?.img) assets.add('/projetos/' + entry.thumb.img)
    if (entry.thumb?.white) {
      for (const theme of ['white', 'black']) assets.add(`/projetos/${entry.thumb.white}-${theme}.jpg`)
    }
  }
}
for (const [slug, project] of Object.entries(projects)) {
  assets.add('/projetos/' + project.cover)
  assets.add('/projetos/' + project.thumb.img)
  for (const media of project.gallery || []) assets.add('/projetos/' + media.src)
  for (const neighbor of [project.previous, project.next].filter(Boolean)) {
    assert(projects[neighbor], `${slug}: missing neighbor ${neighbor}`)
  }
}
function inspect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) inspect(file)
    else if (file.endsWith('.vue')) {
      const content = fs.readFileSync(file, 'utf8')
      assert(!/src="(?:inicio|icons|projetos)\//.test(content), `${file}: relative asset`)
      assert(!/`(?:inicio|icons|projetos)\//.test(content), `${file}: relative dynamic asset`)
      for (const match of content.matchAll(/(?:src="|: '\/)(\/[^"`]+|[^']+\.(?:png|svg|jpg|webp))(?=["'])/g)) {
        assets.add('/' + match[1].replace(/^\//, ''))
      }
      for (const match of content.matchAll(/`(\/(?:inicio|icons)\/[^`]+)`/g)) {
        let expanded = [match[1]]
        while (expanded.some(asset => asset.includes('${'))) {
          expanded = expanded.flatMap(asset => {
            const variable = /\$\{([^}]+)\}/.exec(asset)
            if (!variable) return [asset]
            const values = variable[1] === 'i'
              ? Array.from({ length: asset.includes('/rochas/') ? 12 : 14 }, (_, index) => index + 1)
              : /iconsTheme|whiteIcons/.test(variable[1]) ? ['whiteicons', 'blackicons'] : ['white', 'black']
            return values.map(value => asset.replace(variable[0], value))
          })
        }
        expanded.forEach(asset => assets.add(asset))
      }
    }
  }
}
inspect('src')
for (const asset of assets) assert(fs.existsSync('public' + asset), `Missing file: ${asset}`)

async function check() {
  const origin = process.argv[2]
  if (origin) {
    for (const route of ['/', ...Object.keys(projects).map(slug => '/projetos/' + slug)]) {
      const response = await fetch(origin + route, { headers: { Accept: 'text/html' } })
      assert.equal(response.status, 200, route)
      assert((await response.text()).includes('id="app"'), `${route}: missing app shell`)
    }
    for (const asset of assets) {
      const response = await fetch(origin + asset, { method: 'HEAD' })
      assert.equal(response.status, 200, asset)
      assert(!response.headers.get('content-type')?.includes('text/html'), `${asset}: HTML instead of media`)
    }
  }
  console.log(`Validated ${Object.keys(projects).length} project routes and ${assets.size} assets${origin ? ' over HTTP' : ' on disk'}.`)
}
check().catch(error => { console.error(error); process.exitCode = 1 })
