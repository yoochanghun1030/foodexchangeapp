package org.example.feaswap.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FoodItemRequestDto {

    @NotBlank
    private String title;

    private String category;

    private String nutritionFacts;

    private String imageUrl;

    private Integer quantity;
    private String unit;
    private Double latitude;
    private Double longitude;
    private String availableFrom;
    private String availableUntil;


}
