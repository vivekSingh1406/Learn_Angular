package com.example.backend_application.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {

    private Long id;

    @NotBlank(message = "Product name is required")
    private String name;

    private String description;

    @Positive(message = "Price must be greater than 0")
    private Double price;

    @Positive(message = "Quantity must be greater than or equal to 0")
    private Integer quantity;

    private String category;

    private String sku;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
