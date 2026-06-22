package com.agriconnect.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSignupRequest {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @NotBlank(message = "Phone cannot be empty")
    private String phone;

    @NotBlank(message = "Password cannot be empty")
    private String password;

    @NotBlank(message = "Role cannot be empty")
    private String role;
}