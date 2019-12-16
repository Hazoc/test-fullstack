package com.test.model.api.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.test.model.api.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

}
