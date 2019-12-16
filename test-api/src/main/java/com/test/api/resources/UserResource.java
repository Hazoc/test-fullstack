package com.test.api.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.model.api.models.User;
import com.test.service.api.services.UserService;

@RestController
@RequestMapping("/api/user")
public class UserResource {

	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.findAll();
		return ResponseEntity.ok(users);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insertUser(@Valid @RequestBody User user) {
		userService.insert(user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUserById(@PathVariable Integer id) {
		User user = userService.findById(id);
		return ResponseEntity.ok(user);
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateUser(@PathVariable Integer id,@Valid @RequestBody User user) {
		user.setId(id);
		userService.updateUser(user);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteUserById(@PathVariable Integer id) {
		userService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
