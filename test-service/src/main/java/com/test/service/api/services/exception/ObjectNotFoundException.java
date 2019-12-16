package com.test.service.api.services.exception;

public class ObjectNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 4098823167421242493L;

	public ObjectNotFoundException(String msg) {
		super(msg);
	}
	
	public ObjectNotFoundException(String msg, Throwable cause) {
		super(msg, cause);
	}

}
