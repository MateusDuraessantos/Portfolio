<template>
  <div>
    <Header class="header" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
/* font-family: 'Poppins', sans-serif; */

.anime_scrollReveal {
  visibility: hidden;
}

body {
  overflow: overlay;
  margin-bottom: 300px;
}

* {
  font-family: 'Poppins', sans-serif;
  color: #E0D9CE;
  margin: 0;
  box-sizing: border-box;

}

*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background: transparent;
}

*::-webkit-scrollbar-track {
  display: none;
}

*::-webkit-scrollbar-thumb {
  background-color: #474747;
  border-radius: 6px;
}

html {
  margin-top: 140px;
  background: black;
}


button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
