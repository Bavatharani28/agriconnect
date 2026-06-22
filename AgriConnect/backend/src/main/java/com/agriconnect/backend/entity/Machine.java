package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "machines")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "machine_id")
    private Integer machineId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "machine_type")
    private String machineType;

    @Column(name = "price_per_acre")
    private Double pricePerAcre;

    @Column(name = "price_per_hour")
    private Double pricePerHour;

    private String location;

    private String pincode;

    private String district;

    private Boolean availability;
}