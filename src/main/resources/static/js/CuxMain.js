var area = ""; // MapApp
var lng = window.$("#mapframe")[0].contentWindow.lng; // 经度
var lat = window.$("#mapframe")[0].contentWindow.lat; // 经度
var socket;  // socket
var mainTimer;

$(document).ready(function () {
    mui.init();// 初始化mui
    openWebsocket();// 启用websocket
    mainTimer = setInterval(getPoint,1000); // 创建定时器
})

// 点击开关
document.getElementById("share_switch").addEventListener("toggle",function(event){
    if(event.detail.isActive){
        console.log("你启动了开关");
        window.$("#mapframe")[0].contentWindow.OpenShare();
    }else{
        console.log("你关闭了开关");
        window.$("#mapframe")[0].contentWindow.CloseShare();
    }
})

// 启用websocket
function openWebsocket() {
    // var socket;
    if (typeof(WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
    } else {
        //实现化WebSocket对象，指定要连接的服务器地址与端口(连接到Server中对应的@ServerEndpoint)
        socket = new WebSocket("ws://localhost:8080/"+ area +"/websocket");
        //打开事件
        socket.onopen = function() {};
        //获得消息事件
        socket.onmessage = function(msg) {
            var data = eval('(' + msg.data + ')');
            var TotalConnect = data.TotalConnect;
            var Message = data.Message;
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
}

// 获取iframe的经纬度
function getPoint() {
    //console.log("经："+ lng);
    //console.log("纬：" + lat);
}