var net = require('net');
net.createServer(function(socket){
    var date= new Date();
    var Y = date.getFullYear().toString();
    var M = (date.getMonth() + 1).toString();
    var D = date.getDate().toString();
    var H = date.getHours().toString();
    var m = date.getMinutes().toString();
    socket.end(Y + '-' + (M<10?'0'+M:M)+'-'+(D<10?'0'+D:D)+
    ' ' + (H<10?'0'+H:H) + ':' + (m<10?'0'+m:m));
}).listen(process.argv[2]);