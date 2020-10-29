<template>
	<div>
		<h1>click me</h1>
		<button v-on:click="generateOne">Click Me</button>
	</div>
</template>

<script>
import API from '../utils/API.js';

export default {
	name: "Splashpage",
	
	methods: {
		generateOne(){
			API.getRoute();
		}
	}
}
</script>

<style scoped>

</style>