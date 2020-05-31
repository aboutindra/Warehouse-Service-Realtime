const express = require('express');
const bp = require('body-parser');

const app = express();
const server = require('http').Server(app);
const socket = require('socket.io');
const io = socket(server);

const controller = require('./Controllers');
const Controller = new controller();

app.use(bp.urlencoded({ extended : true }))

let getAPI = async () => {
    let data = await Controller.getAPI();
    console.log(data)
    io.emit("sendAll", data)
}

let postAPI = async (msg) => {
    let payload = {
        idMate : msg
    }
    let data = await Controller.postAPI(payload);
    console.log(data.data)
    getAPI();
}

io.on('connection', (soc) => {
    soc.on('getAll', async (msg) => {
        await postAPI(msg);
    });
});

server.listen(3030, (err)=>{
    if(err){
        console.log("Error : ", err)
    }else{
        console.log("Running at http://localhost:3030/")
    }
});
