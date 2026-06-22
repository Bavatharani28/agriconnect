package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.Worker;
import com.agriconnect.backend.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workers")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @PostMapping("/register")
    public Worker registerWorker(@RequestBody Worker worker) {
        return workerService.saveWorker(worker);
    }
    @GetMapping
    public List<Worker> getAllWorkers() {
        return workerService.getAllWorkers();
    }
}