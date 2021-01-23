import axios from 'axios';

export default {
	// Testing Routes
	getHook: function(adventureHook_tense){
		// let info = 'present_adHook'
		return axios.get('/generateOne', {
			params: {
				table: adventureHook_tense
			}
		});
	},
	getHookMulti: function(){
		return axios.get('/generateMultiple')
	}
}