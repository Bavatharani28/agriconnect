package com.agriconnect.backend.controller;

import com.agriconnect.backend.dto.DashboardStats;
import com.agriconnect.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private JobRequestRepository jobRequestRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private MachineRepository machineRepository;

    @GetMapping("/stats")
    public DashboardStats getStats() {

        return new DashboardStats(
                userRepository.count(),
                workerRepository.count(),
                jobRequestRepository.count(),
                bookingRepository.count(),
                machineRepository.count()
        );
    }
}