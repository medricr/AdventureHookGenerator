<template>
	<div class="container">
		<h1>{{adventureHook.data}}</h1>
		<button v-on:click="generateOne">genrate one</button>

		<button v-on:click="generateMultiple">generate five</button>
	</div>
</template>

<script>
import API from '../utils/API.js';

export default {
	name: "Splashpage",
	data() {
		return {
			adventureHook: ""
		}
	},
	methods: {
		async generateOne(){
			this.adventureHook = await API.getHook();
			console.log("retrieved adventure hook -> ", this.adventureHook.data);
		},

		generateMultiple(){
			API.getHookMulti();
		}

		
	}
}
</script>

<style scoped>
.container {
	background-color: blueviolet;
	height: 200px;
}

h1 {
	color:black;
}
</style>