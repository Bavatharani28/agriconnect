package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.Farmer;
import com.agriconnect.backend.repository.FarmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FarmerService {

    @Autowired
    private FarmerRepository farmerRepository;

    public Farmer saveFarmer(Farmer farmer) {
        return farmerRepository.save(farmer);
    }
}