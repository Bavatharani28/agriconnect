package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "job_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private Integer jobId;

    @Column(name = "farmer_id")
    private Integer farmerId;

    @Column(name = "job_type")
    private String jobType;

    @Column(name = "workers_needed")
    private Integer workersNeeded;

    @Column(name = "job_date")
    private LocalDate jobDate;

    @Column(name = "wage_offered")
    private Double wageOffered;

    private String status;

    private String location;
}