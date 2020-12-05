<template>
  <div id="app">
		<Splashpage />
  </div>
</template>

<script>
import Splashpage from './components/Splashpage';

export default {
  name: 'App',
  components: {
    // HelloWorld,
		Splashpage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
