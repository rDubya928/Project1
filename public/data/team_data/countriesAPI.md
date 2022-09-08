REST Countries API Documentation
This API pulls information on countries such as
location, population, capital, etc.

URL
https://rapidapi.com/ajayakv/api/rest-countries/

Here is the example call makes.

==========================================
GET CALL

const http = require("https");

const options = {
"method": "GET",
"hostname": "ajayakv-rest-countries-v1.p.rapidapi.com",
"port": null,
"path": "/rest/v1/all",
"headers": {
"x-rapidapi-key": "ccbc3fdf97mshecc84437bfff6b9p135a80jsn4a16d2b29773",
"x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
"useQueryString": true
}
};

const req = http.request(options, function (res) {
const chunks = [];

    res.on("data", function (chunk) {
    	chunks.push(chunk);
    });

    res.on("end", function () {
    	const body = Buffer.concat(chunks);
    	console.log(body.toString());
    });

});

req.end();
