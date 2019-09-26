本地运行：
1、main.html中iframe的src地址删除项目名
2、com.jicg.MapApp.Config.WebSocketConfig.java中加上@Bean注解  （ServerEndpointExporter指定给Spring管理）

打包war包运行：
1、main.html中iframe的src地址加上项目名
2、com.jicg.MapApp.Config.WebSocketConfig.java中注释掉@Bean注解  （ServerEndpoint需要Tomcat直接管理）