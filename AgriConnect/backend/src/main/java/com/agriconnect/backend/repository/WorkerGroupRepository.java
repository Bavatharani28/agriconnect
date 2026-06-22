package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.WorkerGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkerGroupRepository extends JpaRepository<WorkerGroup, Integer> {
}