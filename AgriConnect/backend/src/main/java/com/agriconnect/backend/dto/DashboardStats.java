package com.agriconnect.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DashboardStats {
    private Long totalUsers;
    private Long totalWorkers;
    private Long totalJobs;
    private Long totalBookings;
    private Long totalMachines;
}