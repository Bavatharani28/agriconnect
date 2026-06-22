package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.Worker;
import com.agriconnect.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    public Worker saveWorker(Worker worker) {
        return workerRepository.save(worker);
    }
    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }
}