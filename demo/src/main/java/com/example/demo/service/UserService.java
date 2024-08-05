package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo ur;

    public User create(User ue) {
        return ur.save(ue);
    }

    public List<User> getAll() {
        return ur.findAll();
    }

    public User update(User ue) {
        if (ur.existsById(ue.getUserId())) {
            return ur.save(ue);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public User getById(int id) {
        return ur.findById(id).orElse(null);
    }

    public void delete(int id) {
        if (ur.existsById(id)) {
            ur.deleteById(id);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public User getByEmail(String email) {
        return ur.findByEmail(email);
    }

}
