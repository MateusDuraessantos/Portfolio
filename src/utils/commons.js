export const commons = {
  scrollDown: (ancora) => {
    if(ancora) {
      const obj = document.getElementById(ancora)
      window.scrollTo({
        top: obj?.offsetTop,
        behavior: 'smooth'
      })
    }
  }
}