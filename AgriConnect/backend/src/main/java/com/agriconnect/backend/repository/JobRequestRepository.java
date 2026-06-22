package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.JobRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRequestRepository extends JpaRepository<JobRequest, Integer> {
}