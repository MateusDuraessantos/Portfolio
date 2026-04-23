export const commons = {
  scrollDown: (ancora) => {
    if(ancora) {
      const obj = document.getElementById(ancora);
      if (!obj) return;
      const top = obj.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }
}