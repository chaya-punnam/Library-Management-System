package com.library.userservice.UserService.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.userservice.UserService.DTO.UserDTO;
import com.library.userservice.UserService.ENTITY.UserEntity;
import com.library.userservice.UserService.SERVICE.UserService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public String createUser(@Valid @RequestBody UserEntity userDetails) {

        userService.createUser(userDetails);
        return "User Added Successfully!";
    }

    @GetMapping("/all")
    public List<UserEntity> getAllUsers() {
        return userService.readAllUsers();
    }

    @GetMapping("/{userId}")
    public UserDTO getParticularUser(@PathVariable Integer userId) {
        return userService.readParticularUser(userId);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable Integer userId) {
        return userService.deleteParticularUser(userId);
    }
}