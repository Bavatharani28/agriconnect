package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.JobRequest;
import com.agriconnect.backend.repository.JobRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class JobRequestService {

    @Autowired
    private JobRequestRepository jobRequestRepository;

    public JobRequest saveJob(JobRequest jobRequest) {
        if (jobRequest.getStatus() == null) {
            jobRequest.setStatus("OPEN");
        }
        return jobRequestRepository.save(jobRequest);
    }
    public List<JobRequest> getAllJobs() {
        return jobRequestRepository.findAll();
    }
}