package com.example.backend_application.repository;

import com.example.backend_application.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    /**
     * Find product by name (case-insensitive)
     */
    Optional<Product> findByNameIgnoreCase(String name);

    /**
     * Find products by category
     */
    List<Product> findByCategory(String category);

    /**
     * Find products by SKU
     */
    Optional<Product> findBySku(String sku);

    /**
     * Search products by name containing (case-insensitive)
     */
    List<Product> findByNameContainingIgnoreCase(String name);

    /**
     * Custom query to find products with price between range
     */
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice")
    List<Product> findProductsByPriceRange(@Param("minPrice") Double minPrice, @Param("maxPrice") Double maxPrice);

    /**
     * Find products by category and price range
     */
    @Query("SELECT p FROM Product p WHERE p.category = :category AND p.price BETWEEN :minPrice AND :maxPrice")
    List<Product> findProductsByCategoryAndPriceRange(
            @Param("category") String category,
            @Param("minPrice") Double minPrice,
            @Param("maxPrice") Double maxPrice
    );
}
