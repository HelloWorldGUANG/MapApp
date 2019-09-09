package com.jicg.springboot.websocket.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/MapApp")
public class MapAppController {
	// 示例页面
	@RequestMapping("/Mappage")
	public String MapPage() {
		return "MapDemo";
	}

}
