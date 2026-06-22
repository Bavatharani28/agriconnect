package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.Machine;
import com.agriconnect.backend.repository.MachineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MachineService {

    @Autowired
    private MachineRepository machineRepository;

    public Machine saveMachine(Machine machine) {
        return machineRepository.save(machine);
    }
    public List<Machine> getAllMachines() {
        return machineRepository.findAll();
    }
}