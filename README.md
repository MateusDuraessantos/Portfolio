# My personal portfolio website - Start data: Jan 2023

### See the project working: https://mateusduraessantos.com

* Hey! my name is Mateus Durães dos Santos, I'm from ![Brazil](https://img.shields.io/badge/-Brazil-green?style=flat&logo=data:image/png;base64,ENCODED_IMAGE_DATA). Check out my portfolio, hope you enjoy it!

* Designed and Programmed by: Me


## ⚙️ Technologies I used

* HTML/CSS
* VueJs
* Element Plus
* Javascript
* Firebase


#### You can find me at: 

* My website: https://mateusduraessantos.com
* My GitHub: https://github.com/MateusDuraessantos
* Email me: mateusduraessantos@gmail.com
* My LinkedIn: https://www.linkedin.com/in/mateus-durães-dos-santos/

# Run project

* npm install
* npm run serve

## Deploy automático no Firebase

O workflow `.github/workflows/firebase-hosting.yml` executa a cada push na
branch `main`, incluindo merges. Ele usa Node.js 22, instala as dependências
com `npm ci`, executa `npm run build` e, se o build passar, publica `dist`
no Firebase Hosting de produção do projeto `mateus-duraes-dev`.
Também pode ser iniciado manualmente pela aba Actions, selecionando `main`.

### Configuração inicial da credencial

1. No [Google Cloud IAM](https://console.cloud.google.com/iam-admin/serviceaccounts?project=mateus-duraes-dev),
   crie uma conta de serviço exclusiva para os deploys. Conceda os papéis
   **Firebase Hosting Admin** (`roles/firebasehosting.admin`) e
   **API Keys Viewer** (`roles/serviceusage.apiKeysViewer`).
2. Na conta de serviço, abra **Keys > Add key > Create new key > JSON**.
3. Nos [secrets do repositório](https://github.com/MateusDuraessantos/Portfolio/settings/secrets/actions),
   crie um **New repository secret** chamado
   `FIREBASE_SERVICE_ACCOUNT_MATEUS_DURAES_DEV`, com o conteúdo completo do JSON.
   Não adicione esse arquivo ao repositório.
4. Envie o workflow, `firebase.json` e `.firebaserc` para a `main`.
   Acompanhe o build e a publicação na
   [aba Actions](https://github.com/MateusDuraessantos/Portfolio/actions).

O deploy atualiza o canal `live`, incluindo os domínios personalizados
conectados ao site. Commits locais disparam a automação quando são enviados
ao GitHub com `git push`.

Referência: [GitHub Action oficial do Firebase Hosting](https://github.com/FirebaseExtended/action-hosting-deploy).
