import axios from 'axios';


const api = axios.create({
	baseURL: 'https://api.yelp.com/v3',
	headers: {
		Authorization: `Bearer ${['Gv8YS6BtzwMSt-ZqvkwENigEfQPV4yPCSkjjAxKZy7ph0li6EI_0USNa-GejZSqdWxeaURQHaUdJPGlIH_dj8zn2OUileN0Xzku-5zMbYnZmCUSsiM6avka9sLbnXnYx']}`
	}
});  

export const getCoffeeShops = (userLocation, filter = {}) => {
	return api
		.get('/businesses/search', {
			params: {
				limit: 15,
				categories: 'coffee,coffeeroasteries,coffeeshops',
				...userLocation,
				...filter
			}
		})
		.then(res =>
			res.data.businesses.map(business => {
				return {
					name: business.name,
					coords: business.coordinates
				};
			})
		)
		.catch(error => console.error(error));
};

export default {
	getCoffeeShops
};
