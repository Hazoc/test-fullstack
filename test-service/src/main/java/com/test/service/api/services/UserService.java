package com.test.service.api.services;

import java.util.List;

import com.test.model.api.models.User;

public interface UserService {

	public User insert(User user);	
	public List<User> findAll();
	public User findById(Integer id);
	public void deleteById(Integer id);
	public User updateUser(User user);
	
}
