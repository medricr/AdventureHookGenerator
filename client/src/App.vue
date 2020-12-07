<template>
	<div class="container">
		<div class="card">
			<h2>{{adventureHook.data}}</h2>
			<button v-on:click="generateOne">genrate one</button>
		</div>
	</div>
</template>

<script>
import API from './utils/API';

export default {
	name: "App",
	data() {
		return {
			adventureHook: ""
		}
	},
	methods: {
		async generateOne(){
			this.adventureHook = await API.getHook();
			console.log("retrieved adventure hook -> ", this.adventureHook.data);
		}
	}
}
</script>

<style scoped>

.container {
   /* font-family: Avenir, Helvetica, Arial, sans-serif; */
	font-family: 'Texturina', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card {
	position: absolute;
	left: 15%;
	right: 15%;
	top: 18%;
	height: 300px;
	background-color: #EDAE49;
	border: 3px solid #FFFFFF;
	border-radius: 15px 50px;
	color: black;
}
h1 {
	color:black;
}
button {
	background-color: #EDAE49;
	color: #FFFFFF;
	border-radius: 10px;
	border: 1px solid #FFFFFF;
	transition-duration: 0.5s;
	height: 30px;
	position: absolute;
	/*//! positioning of button is not perfectly even */
	right: 45%;
	bottom: 20px;
}
button:hover {
	background-color: #00798C;
}
</style>
