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
		<div class="card">
			<div class="display">
				<h2>{{adventureHook.data}}</h2>
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
			adventureHookTense: "present_adHook"
		}
	},
	methods: {
		async generateOne(){
			this.adventureHook = await API.getHook(this.adventureHookTense);
			console.log("retrieved adventure hook -> ", this.adventureHook.data);
		},
		async test(){
			this.adventureHook = await API.testHook();
			console.log("testhook -> ", this.adventureHook.data)
		},
		
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
	/* color: #FFFFFF; */
}


.card {
	/* position: absolute; */
	margin-left: 15%;
	margin-right: 15%;
	/* top: 18%; */
	/* height: 250px; */
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
	/* position: absolute; */
	/*//! positioning of button is not perfectly even */
	right: 45%;
	bottom: 20px;
	margin-bottom: 20px;
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
