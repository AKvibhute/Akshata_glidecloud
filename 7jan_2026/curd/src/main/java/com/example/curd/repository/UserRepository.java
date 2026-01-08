package com.example.curd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.curd.model.User;

public interface UserRepository extends MongoRepository<User, String> {
}
