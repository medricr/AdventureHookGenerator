import axios from 'axios';

export default {
	// Testing Routes
	getRoute: function(){
		return axios.get('/generateOne');
	}
}