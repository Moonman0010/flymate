// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';


$w.onReady(function () {
    wixData
		.query("flights")
		.limit(5)
		.find()
		.then((results) => {	
				return console.log(results.items)
			}) 
		.catch((err) => {
            console.error("Error loading data from 'imports_flights':", err);
        });
});
