package com.example.backend.service;


import com.example.backend.dto.ProductDTO;

import java.util.List;


public interface ProductService {

    void fetchAndSaveProducts();
    List<String> getAllCategory();
    List<ProductDTO> getAllProduct();
}
