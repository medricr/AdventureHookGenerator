<template>
	<div class="container">
		<h1>Whats My Quest?</h1>
		<form class="tense_selector">
			<input type="radio" id="past" value="past_adHook" v-model="adventureHookTense">
			<label for="past">Past Tense</label>
			<input type="radio" id="present" value="present_adHook" v-model="adventureHookTense">
			<label for="present">Present Tense</label>
			<input type="radio" id="future" value="future_adHook" v-model="adventureHookTense">
			<label for="future">Future Tense</label>
		</form>
		<button type="submit" v-on:click="generateOne">Genrate One</button>
		<button v-on:click="generateMultiple">Generate Three</button>
		<div class="card">
			<div class="display">
				<h2 v-if="adventureHook.data != null">{{adventureHook.data}}</h2>
				<ul v-if="adventureHookArray.data != null">
					<li>{{adventureHookArray.data[0]}}</li>
					<li>{{adventureHookArray.data[1]}}</li>
					<li>{{adventureHookArray.data[2]}}</li>
				</ul>
			</div>
		</div>
			<i class="fab fa-github" />
			<a href="https://github.com/medricr">GitHub</a>
	</div>
</template>

<script>
import API from './utils/API';

export default {
	name: "App",
	data() {
		return {
			adventureHook: "",
			adventureHookArray: [],
			adventureHookTense: "present_adHook"
		}
	},
	mounted(){
			this.adventureHook = {data: "Click one of the buttons above to generate an adventure hook!"}
		},
	methods: {
		async generateOne(){	
			this.adventureHook = await API.getSingleHook(this.adventureHookTense);
			this.adventureHookArray = [];
			console.log("retrieved adventure hook -> ", this.adventureHook.data);
		},
		async generateMultiple() {	
			this.adventureHookArray = await API.getMultipleHooks(this.adventureHookTense);
			this.adventureHook = "";
			console.table("retrieved array -> ", this.adventureHookArray);
		}		
	}
}
</script>

<style scoped>
.container {
	font-family: 'Texturina', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card {
	margin-left: 15%;
	margin-right: 15%;
	background-color: #EDAE49;
	border: 3px solid #FFFFFF;
	border-radius: 15px 50px;
	color: black;
	display: block;
	overflow: auto;
}
.display {
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 2%
}
h1 {
	color:#FFFFFF;
}
button {
	background-color: #EDAE49;
	color: #FFFFFF;
	border-radius: 10px;
	border: 2px solid #FFFFFF;
	transition-duration: 0.5s;
	height: 30px;
	/*//! positioning of button is not perfectly even */
	right: 45%;
	bottom: 20px;
	margin-bottom: 20px;
	margin-right: 10px;
	/* Font  */
	font-family: 'Texturina', serif;
}
button:hover {
	background-color: #00798C;
}
a {
	position: absolute;
	bottom: 10px;
	right: 48%;
}
</style>
