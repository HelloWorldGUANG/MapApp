本地运行：
1、com.jicg.MapApp.Config.WebSocketConfig.java中加上@Bean注解  （ServerEndpointExporter指定给Spring管理）
2、js中配置area = "";

打包war包运行：
1、com.jicg.MapApp.Config.WebSocketConfig.java中注释掉@Bean注解  （ServerEndpoint需要Tomcat直接管理）
2、js中配置area = "项目名";