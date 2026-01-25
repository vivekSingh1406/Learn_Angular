package com.example.backend_application.service;

import com.example.backend_application.exception.DuplicateResourceException;
import com.example.backend_application.exception.ResourceNotFoundException;
import com.example.backend_application.model.Product;
import com.example.backend_application.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    /**
     * Get all products
     */
    @Transactional(readOnly = true)
    public List<Product> getAllProducts() {
        log.info("Fetching all products");
        return productRepository.findAll();
    }

    /**
     * Get product by ID
     */
    @Transactional(readOnly = true)
    public Product getProductById(Long id) {
        log.info("Fetching product with id: {}", id);
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
    }

    /**
     * Create a new product
     */
    public Product createProduct(Product product) {
        log.info("Creating new product with name: {}", product.getName());

        // Check if product with same name already exists
        if (productRepository.findByNameIgnoreCase(product.getName()).isPresent()) {
            throw new DuplicateResourceException("Product", "name", product.getName());
        }

        // Check if product with same SKU already exists
        if (product.getSku() != null && productRepository.findBySku(product.getSku()).isPresent()) {
            throw new DuplicateResourceException("Product", "sku", product.getSku());
        }

        return productRepository.save(product);
    }

    /**
     * Update an existing product
     */
    public Product updateProduct(Long id, Product productDetails) {
        log.info("Updating product with id: {}", id);

        Product product = getProductById(id);

        // Check if another product with same name exists
        if (!product.getName().equalsIgnoreCase(productDetails.getName()) &&
                productRepository.findByNameIgnoreCase(productDetails.getName()).isPresent()) {
            throw new DuplicateResourceException("Product", "name", productDetails.getName());
        }

        // Check if another product with same SKU exists
        if (productDetails.getSku() != null &&
                !productDetails.getSku().equals(product.getSku()) &&
                productRepository.findBySku(productDetails.getSku()).isPresent()) {
            throw new DuplicateResourceException("Product", "sku", productDetails.getSku());
        }

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        product.setCategory(productDetails.getCategory());
        product.setSku(productDetails.getSku());

        return productRepository.save(product);
    }

    /**
     * Delete a product
     */
    public void deleteProduct(Long id) {
        log.info("Deleting product with id: {}", id);

        Product product = getProductById(id);
        productRepository.delete(product);
        log.info("Product with id: {} deleted successfully", id);
    }

    /**
     * Search products by name
     */
    @Transactional(readOnly = true)
    public List<Product> searchProductsByName(String name) {
        log.info("Searching products with name containing: {}", name);
        return productRepository.findByNameContainingIgnoreCase(name);
    }

    /**
     * Get products by category
     */
    @Transactional(readOnly = true)
    public List<Product> getProductsByCategory(String category) {
        log.info("Fetching products by category: {}", category);
        return productRepository.findByCategory(category);
    }

    /**
     * Get products within price range
     */
    @Transactional(readOnly = true)
    public List<Product> getProductsByPriceRange(Double minPrice, Double maxPrice) {
        log.info("Fetching products with price between {} and {}", minPrice, maxPrice);
        return productRepository.findProductsByPriceRange(minPrice, maxPrice);
    }

    /**
     * Get products by category and price range
     */
    @Transactional(readOnly = true)
    public List<Product> getProductsByCategoryAndPrice(String category, Double minPrice, Double maxPrice) {
        log.info("Fetching products by category: {} with price between {} and {}", category, minPrice, maxPrice);
        return productRepository.findProductsByCategoryAndPriceRange(category, minPrice, maxPrice);
    }
}
