<template>
  <div id="app">
    <generic-nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import GenericNavBar from './components/navbar/GenericNavBar';

export default {
    name: 'App',
    components: {
        GenericNavBar
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Water+Brush&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>
