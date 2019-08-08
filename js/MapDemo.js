//全局变量
var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(118.10, 24.46); // 创建点坐标 

//页面加载时的初始化 
$(document).ready(function() {
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom(true); //开启滚轮调整大小
    getlocation();
});

//获取当前位置
function getlocation() {
    var geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        } else {
            alert('failed' + this.getStatus());
        }
    });
}