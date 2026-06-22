package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.ContractService;
import com.agriconnect.backend.service.ContractServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contract-services")
public class ContractServiceController {

    @Autowired
    private ContractServiceService contractServiceService;

    @PostMapping("/register")
    public ContractService registerService(@RequestBody ContractService service) {
        return contractServiceService.saveService(service);
    }
    @GetMapping
    public List<ContractService> getAllServices() {
        return contractServiceService.getAllServices();
    }
}