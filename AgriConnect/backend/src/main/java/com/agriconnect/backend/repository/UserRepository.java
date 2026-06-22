package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByPhone(String phone);
}