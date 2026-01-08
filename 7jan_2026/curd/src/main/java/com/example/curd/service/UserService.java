package com.example.curd.service;

import com.example.curd.model.User;
import com.example.curd.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User create(User user) { return repo.save(user); }
    public List<User> getAll() { return repo.findAll(); }
    public User update(String id, User user) { user.setId(id); return repo.save(user); }
    public void delete(String id) { repo.deleteById(id); }
}
