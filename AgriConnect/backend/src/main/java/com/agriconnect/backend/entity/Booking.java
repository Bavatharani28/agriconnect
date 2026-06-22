package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Integer bookingId;

    @Column(name = "job_id")
    private Integer jobId;

    @Column(name = "provider_id")
    private Integer providerId;

    @Column(name = "service_type")
    private String serviceType;

    @Column(name = "booking_date")
    private LocalDateTime bookingDate;

    private String status;
}