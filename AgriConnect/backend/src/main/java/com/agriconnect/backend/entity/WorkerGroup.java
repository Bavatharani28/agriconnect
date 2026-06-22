package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "worker_groups")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkerGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Integer groupId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "leader_name")
    private String leaderName;

    private String phone;
    private String location;
    private String pincode;
    private String district;

    @Column(name = "farming_type")
    private String farmingType;

    @Column(name = "number_of_workers")
    private Integer numberOfWorkers;

    @Column(name = "rate_per_day")
    private Double ratePerDay;

    private Boolean availability;
}