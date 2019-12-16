package com.test.service.api.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.model.api.models.User;
import com.test.model.api.repositories.UserRepository;
import com.test.service.api.services.exception.ObjectNotFoundException;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User insert(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> findAll() {
		List<User> users = new ArrayList<>();		
		userRepository.findAll().forEach(users::add);
		
		return users;
	}

	@Override
	public User findById(Integer id) {
		User user = userRepository.findOne(id);
		if (user == null) {
			 throw new ObjectNotFoundException("Objeto nao encontrado! id: " + id + ", Tipo: " + User.class.getName());
		}else {
			return user;
		}		
	}

	@Override
	public void deleteById(Integer id) {
		userRepository.delete(id);		
	}

	@Override
	public User updateUser(User user) {		
		return userRepository.save(user);
	}

}
