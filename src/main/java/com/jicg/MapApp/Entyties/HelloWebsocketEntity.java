package com.jicg.MapApp.Entyties;

import java.io.Serializable;

public class HelloWebsocketEntity implements Serializable {

	private static final long serialVersionUID = -6556793741331167103L;
	private String name;
	private String value;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}
