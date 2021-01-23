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
	getHookMulti: function(adventureHook_tense){
		return axios.get('/generateMultiple', {
			params: {
				table: adventureHook_tense
			}
		})
	}
}