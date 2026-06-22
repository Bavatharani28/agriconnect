package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmerRepository extends JpaRepository<Farmer, Integer> {
}