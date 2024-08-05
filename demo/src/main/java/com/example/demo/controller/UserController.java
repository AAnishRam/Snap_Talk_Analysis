package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class UserController {
    @Autowired
    UserService us;

    @PostMapping("/user")
    public ResponseEntity<User> create(@RequestBody User ue) {
        User obj = us.create(ue);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getAll() {
        List<User> obj = us.getAll();
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> update(@PathVariable("id") int id, @RequestBody User updatedUser) {
        User existingUser = us.getById(id);
        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedUser.setUserId(id); // Ensure the ID is set for the update
        User updated = us.update(updatedUser);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @GetMapping("/user/email/{email}")
    public ResponseEntity<User> getByEmail(@PathVariable("email") String email) {
        User user = us.getByEmail(email);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
