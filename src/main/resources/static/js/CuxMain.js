var area = ""; // MapApp
var lng = window.$("#mapframe")[0].contentWindow.lng; // 经度
var lat = window.$("#mapframe")[0].contentWindow.lat; // 经度
var socket;  // socket
var mainTimer;

$(document).ready(function () {
    mui.init();// 初始化mui
    openWebsocket();// 启用websocket
})

// 点击开关
document.getElementById("share_switch").addEventListener("toggle", function (event) {
    if (event.detail.isActive) {
        console.log("你启动了开关");
        window.$("#mapframe")[0].contentWindow.OpenShare();
        mainTimer = setInterval(getPoint, 1000); // 创建定时器
    } else {
        console.log("你关闭了开关");
        window.$("#mapframe")[0].contentWindow.CloseShare();
        clearInterval(mainTimer);
    }
})

// 启用websocket
function openWebsocket() {
    // var socket;
    if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
    } else {
        socket = new WebSocket("ws://localhost:8080/" + area + "/Mapwebsocket");
        socket.onopen = function () {
            console.log("socket已连接");
        };
        socket.onmessage = function (msg) {
        	var res = msg.data;
        	
        	if (res.indexOf("POINT-") != -1) {
        		res = res.replace("POINT-", "");
                var obj = JSON.parse(res);
                lng = obj.lng;
                lat = obj.lat;
                window.$("#mapframe")[0].contentWindow.drawPoint(lng,lat);
            }
        };
        socket.onclose = function () {};
        socket.onerror = function () {
            alert("Socket发生了错误");
        }
        $(window).unload(function () {
            socket.close();
        });
    }
}

// 获取iframe的经纬度
function getPoint() {
    lng = window.$("#mapframe")[0].contentWindow.lng; // 经度
    lat = window.$("#mapframe")[0].contentWindow.lat; // 经度
    var obj = { "lng": lng, "lat": lat };
    var sendmsg = "POINT-" + JSON.stringify(obj);
    // 发送至后台服务器中.
    socket.send(sendmsg);
}
