	
var axios = require("axios").
default;
let fs = require('file-system')

let x = [-34,-27,40.5,-10,-30,21.5,-2,27,46,39,-5,22.25,36,28,52.5,52,39.5,-29,40,15,-33,12.5,38,24,54,31.5]

let y = [-64,133,47.5,-55,-71,-80,-77.5,30,2,22,120,114.16,138,84,5.75,20,-8,24,-4,100,-56,-69.9,-97,54,-2,34.75]


	for(let i=0;i<y.length;i++){
    var options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
        params: {lat:x[i], lon:y[i]},
        headers: {
          'x-rapidapi-key': '01796f7cb8msh5de85f9a3841c35p185d84jsn8fd6e863d38c',
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
      };

axios.request(options).then(function (response) {
  // convert JSON object to string
  console.log(response.data.data)
  let data = JSON.stringify(response.data.data)
  
  

fs.writeFile(`weatherForcast16days${i}.json`, data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
}).catch(function (error) {
	console.error(error);
});
  }
