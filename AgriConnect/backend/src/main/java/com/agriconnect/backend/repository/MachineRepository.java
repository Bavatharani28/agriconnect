package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.Machine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MachineRepository extends JpaRepository<Machine, Integer> {
}