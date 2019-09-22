package com.jicg.MapApp.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/MapApp")
public class MapAppController {
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

}
