package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "contract_services")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContractService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    private Integer serviceId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "provider_name")
    private String providerName;

    private String phone;
    private String location;
    private String pincode;
    private String district;

    @Column(name = "farm_type")
    private String farmType;

    @Column(name = "price_per_acre")
    private Double pricePerAcre;

    private Boolean availability;
}