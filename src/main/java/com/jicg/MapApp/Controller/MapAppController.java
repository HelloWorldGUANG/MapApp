package com.jicg.MapApp.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jicg.MapApp.Entyties.MapInfoEntity;
import com.jicg.MapApp.Service.HelloWebsocketService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.ArrayList;

@Controller
@RequestMapping("/MapApp")
public class MapAppController {
	// 全局变量
	String MapInfo = "";

	// 主页
	@RequestMapping("/main")
	public String MapPage() {
		return "main";
	}

	// 地图页
	@RequestMapping("/map")
	public String map() {
		return "map";
	}

	public String pushPoint() throws IOException {
		// 获取数据
		ArrayList<MapInfoEntity> entity= new ArrayList<MapInfoEntity>();
		if (entity.isEmpty()) {
			MapInfoEntity entity0 = new MapInfoEntity();
			entity0.setId("获取失败");
			entity0.setLng("0");
			entity0.setLat("0");
			entity.add(entity0);
		}
		// 转json字符串后推送
		ObjectMapper mapper = new ObjectMapper();
		try {
			String res = mapper.writeValueAsString(entity);
			if (!res.equals(MapInfo)) {
				HelloWebsocketService.sendInfo("(MapInfo:)" + res);
			}
			return res;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "NG:转换json错误";
		}
	}
}
