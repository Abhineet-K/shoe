// import './.env';
export const geo_api_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geo_api_options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "3eed52134emsh5e03cfb53bd1e0ep11cb5cjsn6560b767e163",
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// http://geodb-free-service.wirefreethought.com/v1/geo/places?minPopulation=1000000&namePrefix=delhi&types=CITY&hateoasMode=false&limit=5&offset=0&sort=name

export const weather_api_url = "https://api.openweathermap.org/data/2.5";
// export const weather_api_key = "";