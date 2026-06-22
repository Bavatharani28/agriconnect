package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.Machine;
import com.agriconnect.backend.service.MachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/machines")
public class MachineController {

    @Autowired
    private MachineService machineService;

    @PostMapping("/register")
    public Machine registerMachine(@RequestBody Machine machine) {
        return machineService.saveMachine(machine);
    }
    @GetMapping
    public List<Machine> getAllMachines() {
        return machineService.getAllMachines();
    }
}