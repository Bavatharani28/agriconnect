package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.User;
import com.agriconnect.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agriconnect.backend.dto.LoginRequest;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    public User login(String phone, String password) {
        User user = userRepository.findByPhone(phone)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
    public User login(LoginRequest request) {

        User user = userRepository.findByPhone(request.getPhone())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return user;
    }
}