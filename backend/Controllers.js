const axios = require('axios');

class fetch{

    async getAPI(){
        var data = await axios({
            url : "http://103.27.206.158:7554/v1/api/all",
            method : "GET",
            headers : {
                "content-type":"application/json"
            }
        })
        return data.data;
    }

    async postAPI(payload){
        var data = await axios({
            url : "http://103.27.206.158:5554/v1/api/record",
            method : "POST",
            data : payload,
            headers : {
                "content-type":"application/json"
            }
        })
        return data;
    }

}
module.exports = fetch;