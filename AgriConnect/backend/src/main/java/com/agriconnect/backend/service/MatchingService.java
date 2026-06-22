package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.JobRequest;
import com.agriconnect.backend.entity.Worker;
import com.agriconnect.backend.repository.JobRequestRepository;
import com.agriconnect.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchingService {

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private JobRequestRepository jobRequestRepository;
    public List<Worker> findWorkers(String skill, String location) {
        return workerRepository.findMatchingWorkers(
                skill,
                location,
                true
        );
    }
}