package com.jicg.MapApp.Controller;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jicg.MapApp.Entyties.HelloWebsocketEntity;
import com.jicg.MapApp.Service.HelloWebsocketService;

@Controller
@RequestMapping("/jicg")
public class HelloWebsocketContorller {

	@Autowired
	HelloWebsocketService service;

	// 示例页面
	@RequestMapping("/Hellopage")
	public String HelloPage() {
		return "HelloWebsocket";
	}

	// 返回json格式数据
	@RequestMapping("/hellojson")
	@ResponseBody
	public ArrayList<HelloWebsocketEntity> GetJsonResult() {
		ArrayList<HelloWebsocketEntity> entity = new ArrayList<HelloWebsocketEntity>();
		if (entity.isEmpty()) {
			HelloWebsocketEntity entity0 = new HelloWebsocketEntity();
			entity0.setName("——");
			entity0.setValue("——");
			entity.add(entity0);
		}
		return entity;
	}

	// 返回text格式数据
	@RequestMapping("/hellotext")
	@ResponseBody
	public String GetTextResult() {
		return "HELLO";
	}

	// websocket广播
	@RequestMapping(value = "/publicSend")
	@ResponseBody
	public String pushVideoListToWeb2() {
		try {
			String messageFormat = "{\"Message\":\"%s\"}";
			String message = String.format(messageFormat, "接收到客户端消息");
			HelloWebsocketService.sendInfo(message);
		} catch (IOException e) {

		}
		return "success!";
	}

}
