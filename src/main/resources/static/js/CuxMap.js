
var area = ""; // MapApp

//*******************全局变量**************************//
var map = new BMap.Map("container"); // 创建地图实例
var point = new BMap.Point(118.10, 24.46); // 创建点坐标
var geolocation = new BMap.Geolocation();// 创建位置对象
geolocation.enableSDKLocation();// 开启SDK辅助定位
var lng = 0; // 经纬度
var lat = 0; // 经纬度
var flag = 0;// 本机是否共享标志
var mapTimer; // 定时器
//*******************全局变量**************************//

//初始化配置 
$(document).ready(function() {
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom(true); // 开启滚轮调整大小
    AddLayer();// 添加图层
});

//获取当前位置
function NowGooglePoint() {
    //var geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    //geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            lng = r.point.lng;
            lat = r.point.lat;
        } else {
            console.log('failed' + this.getStatus());
        }
    });
}

//接受服务端传来的位置
function drawPoint(rx_lng,rx_lat) {
	var point = new BMap.Point(rx_lng, rx_lat);
	var mk = new BMap.Marker(point);
	map.addOverlay(mk); 
	map.centerAndZoom(point, 15); }

//添加路况图层
function AddLayer() {
    var traffic = new BMap.TrafficLayer(); // 创建交通流量图层实例      
    map.addTileLayer(traffic); // 将图层添加到地图上
}

//开本机共享
function OpenShare() {
    mapTimer = setInterval(NowGooglePoint,1000); // 创建定时器
    console.log("打开共享");
}

//关本机共享
function CloseShare() {
    clearInterval(mapTimer); // 清除定时器
    console.log("关闭共享");
}