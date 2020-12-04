import axios from 'axios';

export default {
	// Testing Routes
	getHook: function(){
		
		return axios.get('/generateOne');
	},
	getHookMulti: function(){
		return axios.get('/generateMultiple')
	}
}