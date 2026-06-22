package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.User;
import com.agriconnect.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.agriconnect.backend.dto.LoginRequest;
import jakarta.validation.Valid;
import com.agriconnect.backend.dto.UserSignupRequest;
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User signup(@Valid @RequestBody UserSignupRequest request) {

        User user = new User();
        user.setName(request.getName());
        user.setPhone(request.getPhone());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());

        return userService.saveUser(user);
    }
    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
}