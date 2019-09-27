//全局变量
var area = ""; // MapApp
var map = new BMap.Map("container"); // 创建地图实例
var point = new BMap.Point(118.10, 24.46); // 创建点坐标
var geolocation // 创建位置对象
var lng = 0; // 经纬度
var lat = 0; // 经纬度
var flag = 0; //标志：是否开启本机共享
var mapTimer; // 定时器

//页面加载时的初始化 
$(document).ready(function() {
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom(true); //开启滚轮调整大小

    //图层
    AddLayer();
});

//获取当前位置
function NowGooglePoint() {
    geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            lng = r.point.lng;
            lat = r.point.lat;
            console.log(lng + "," + lat);
        } else {
            console.log('failed' + this.getStatus());
        }
    });
}

//添加路况图层
function AddLayer() {
    var traffic = new BMap.TrafficLayer(); // 创建交通流量图层实例      
    map.addTileLayer(traffic); // 将图层添加到地图上
}

//开本机共享
function OpenShare() {
    flag = 1;
    mapTimer = setInterval(NowGooglePoint,1000); // 创建定时器
    console.log("打开共享");
}

//关本机共享
function CloseShare() {
    flag = 0;
    clearInterval(mapTimer); // 清除定时器
    console.log("关闭共享");
}