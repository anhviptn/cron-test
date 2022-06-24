const cron = require('node-cron');
const axios = require('axios');
// ...

// Schedule tasks to be run on the server.
var url = 'https://mlike.vn';
cron.schedule('*/1 * * * * *', function() {
    axios
        .get(url)
        .then(res => {
            console.log(`URL: ${url} => statusCode: ${res.status}`);
            //console.log(res);
        })
        .catch(error => {
            console.error(error);
        });
});

