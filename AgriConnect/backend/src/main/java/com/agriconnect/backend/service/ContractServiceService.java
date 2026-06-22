package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.ContractService;
import com.agriconnect.backend.repository.ContractServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractServiceService {

    @Autowired
    private ContractServiceRepository contractServiceRepository;

    public ContractService saveService(ContractService service) {
        return contractServiceRepository.save(service);
    }
    public List<ContractService> getAllServices() {
        return contractServiceRepository.findAll();
    }
}