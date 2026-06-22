package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.Worker;
import com.agriconnect.backend.repository.WorkerRepository;
import com.agriconnect.backend.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/matching")
public class MatchingController {

    @Autowired
    private MatchingService matchingService;

    
    @GetMapping
    public List<Worker> getMatches(
            @RequestParam String skill,
            @RequestParam String location) {

        return matchingService.findWorkers(skill, location);
    }
}