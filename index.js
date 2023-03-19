var app = require('express')();
var http = require('http').Server(app);
var io =  require('socket.io')(http);
var port =  3001;

app.get('/',function(req,res){
    res.send("youtube videosu");
});

io.on('connection',(socket)=>{
    console.log("connection is success");

    socket.on('send_data',(data)=>{
        socket.broadcast.emit('push_data',data);
        console.log(data);
    })
})

http.listen(port,function (){
console.log(`server is running : http://localhost:${port}`);
});
