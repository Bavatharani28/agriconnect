package com.agriconnect.backend.controller;

import com.agriconnect.backend.entity.Farmer;
import com.agriconnect.backend.service.FarmerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/farmers")
public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @PostMapping("/register")
    public Farmer registerFarmer(@RequestBody Farmer farmer) {
        return farmerService.saveFarmer(farmer);
    }
}