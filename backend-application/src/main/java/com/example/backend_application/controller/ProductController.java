package com.example.backend_application.controller;

import com.example.backend_application.dto.ProductDTO;
import com.example.backend_application.model.Product;
import com.example.backend_application.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductService productService;

    /**
     * Get all products
     * GET /api/products
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        log.info("GET request - Get all products");
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    /**
     * Get product by ID
     * GET /api/products/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        log.info("GET request - Get product by id: {}", id);
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    /**
     * Create a new product
     * POST /api/products
     */
    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody ProductDTO productDTO) {
        log.info("POST request - Create new product: {}", productDTO.getName());
        
        Product product = Product.builder()
                .name(productDTO.getName())
                .description(productDTO.getDescription())
                .price(productDTO.getPrice())
                .quantity(productDTO.getQuantity())
                .category(productDTO.getCategory())
                .sku(productDTO.getSku())
                .build();

        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    /**
     * Update an existing product
     * PUT /api/products/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductDTO productDTO) {
        log.info("PUT request - Update product with id: {}", id);

        Product product = Product.builder()
                .name(productDTO.getName())
                .description(productDTO.getDescription())
                .price(productDTO.getPrice())
                .quantity(productDTO.getQuantity())
                .category(productDTO.getCategory())
                .sku(productDTO.getSku())
                .build();

        Product updatedProduct = productService.updateProduct(id, product);
        return ResponseEntity.ok(updatedProduct);
    }

    /**
     * Delete a product
     * DELETE /api/products/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        log.info("DELETE request - Delete product with id: {}", id);
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Search products by name
     * GET /api/products/search?name=productName
     */
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String name) {
        log.info("GET request - Search products by name: {}", name);
        List<Product> products = productService.searchProductsByName(name);
        return ResponseEntity.ok(products);
    }

    /**
     * Get products by category
     * GET /api/products/category?category=electronics
     */
    @GetMapping("/by-category")
    public ResponseEntity<List<Product>> getByCategory(@RequestParam String category) {
        log.info("GET request - Get products by category: {}", category);
        List<Product> products = productService.getProductsByCategory(category);
        return ResponseEntity.ok(products);
    }

    /**
     * Get products by price range
     * GET /api/products/price-range?minPrice=100&maxPrice=500
     */
    @GetMapping("/price-range")
    public ResponseEntity<List<Product>> getByPriceRange(
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        log.info("GET request - Get products by price range: {} - {}", minPrice, maxPrice);
        List<Product> products = productService.getProductsByPriceRange(minPrice, maxPrice);
        return ResponseEntity.ok(products);
    }

    /**
     * Get products by category and price range
     * GET /api/products/filter?category=electronics&minPrice=100&maxPrice=500
     */
    @GetMapping("/filter")
    public ResponseEntity<List<Product>> filterProducts(
            @RequestParam String category,
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        log.info("GET request - Filter products by category and price range");
        List<Product> products = productService.getProductsByCategoryAndPrice(category, minPrice, maxPrice);
        return ResponseEntity.ok(products);
    }
}
