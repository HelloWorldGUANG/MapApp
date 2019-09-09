// ------------------页面初始化---------------------------
var document_height = $(window).height();
var document_height = window.document.body.offsetHeight;
var body_height = window.document.getElementById("container").offsetHeight;
var length = (document_height - body_height) / 2;
$("#container").css("margin-left", "auto");
$("#container").css("margin-right", "auto");
$("#container").css("margin-top", length);


// ------------------定时刷新页面---------------------------
$(document).ready(function() {
    var socket;
    if (typeof(WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
    } else {
        //实现化WebSocket对象，指定要连接的服务器地址与端口(连接到Server中对应的@ServerEndpoint)
        socket = new WebSocket("ws://localhost:8080/websocket");
        //打开事件
        socket.onopen = function() {
        	
        };
        //获得消息事件
        socket.onmessage = function(msg) {
        	var data = eval('(' + msg.data + ')');
        	var TotalConnect = data.TotalConnect;
        	var Message = data.Message;
            $("#total-connect").text(TotalConnect);
            $("#message").text(Message);
        };
        //关闭事件
        socket.onclose = function() {
        	
        };
        //发生了错误事件
        socket.onerror = function() {
            alert("Socket发生了错误");
        }
        $(window).unload(function() {
            socket.close();
        });
    }
});