package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "workers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer workerId;

    private Integer userId;

    private String location;

    private String pincode;

    private String district;

    private String skill;

    private Double dailyWage;

    private Boolean availability;

    private Double rating;
}