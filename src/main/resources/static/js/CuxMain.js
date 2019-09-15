$(document).ready(function () {
    mui.init();//初始化mui
})

document.getElementById("share_switch").addEventListener("toggle",function(event){
    if(event.detail.isActive){
        console.log("你启动了开关");
    }else{
        console.log("你关闭了开关");
    }
})
