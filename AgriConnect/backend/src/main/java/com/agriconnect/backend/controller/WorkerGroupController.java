package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.WorkerGroup;
import com.agriconnect.backend.service.WorkerGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groups")
public class WorkerGroupController {

    @Autowired
    private WorkerGroupService workerGroupService;

    @PostMapping("/register")
    public WorkerGroup registerGroup(@RequestBody WorkerGroup group) {
        return workerGroupService.saveGroup(group);
    }
    @GetMapping
    public List<WorkerGroup> getAllGroups() {
        return workerGroupService.getAllGroups();
    }
}