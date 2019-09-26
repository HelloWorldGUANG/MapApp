package com.jicg.MapApp.Entyties;

import java.io.Serializable;

public class MapInfoEntity implements Serializable {


	private static final long serialVersionUID = -6556793741331167103L;
	private String lng;
	private String lat;
	private String id;

	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}

	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
