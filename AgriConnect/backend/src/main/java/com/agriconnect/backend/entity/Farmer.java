package com.agriconnect.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "farmers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer farmerId;

    private Integer userId;

    private String location;

    private String pincode;

    private String district;
}