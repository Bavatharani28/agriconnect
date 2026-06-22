package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.WorkerGroup;
import com.agriconnect.backend.repository.WorkerGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerGroupService {

    @Autowired
    private WorkerGroupRepository workerGroupRepository;

    public WorkerGroup saveGroup(WorkerGroup group) {
        return workerGroupRepository.save(group);
    }
    public List<WorkerGroup> getAllGroups() {
        return workerGroupRepository.findAll();
    }
}