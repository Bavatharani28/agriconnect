package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.JobRequest;
import com.agriconnect.backend.service.JobRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/jobs")
public class JobRequestController {

    @Autowired
    private JobRequestService jobRequestService;
    @PostMapping("/create")
    public JobRequest createJob(@RequestBody JobRequest jobRequest) {
        return jobRequestService.saveJob(jobRequest);
    }
    @GetMapping
    public List<JobRequest> getAllJobs() {
        return jobRequestService.getAllJobs();
    }
}