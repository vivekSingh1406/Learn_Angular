import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// 🔹 Product Interface
export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  sku?: string;
  createdAt?: string;
  updatedAt?: string;
}

// 🔹 API Response Interface
// Standard format for responses from backend
export interface ApiResponse<T> {
  data?: T;
  message?: string;
}

// 🔹 @Injectable Decorator
// Makes this service available to use throughout the app
// "providedIn: 'root'" = Available everywhere
@Injectable({
  providedIn: 'root'
})

// 🔹 ProductService - The Messenger
// This service handles all communication with backend
// All API calls (create, read, update, delete) go through this service
export class ProductService {
  // 🔹 apiUrl = Backend address (like a phone number)
  // localhost:8080 = Backend running on your computer
  // /api/products = The specific endpoint we're calling
  private apiUrl = 'http://localhost:8080/api/products';

  // 🔹 HttpClient = Angular's tool for making HTTP requests
  // Automatically provided by Angular (Dependency Injection)
  constructor(private http: HttpClient) {}

  /**
   * 🔹 getAllProducts()
   * Gets ALL products from database
   * Returns: Observable<Product[]> = Promise-like object with list of products
   * How: Sends GET request → Backend queries database → Returns all products
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * 🔹 getProductById()
   * Gets a SINGLE product by ID
   * Parameter: id = Product ID to fetch (e.g., 1)
   * Returns: Observable<Product> = Single product with that ID
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  /**
   * 🔹 createProduct()
   * Sends a NEW product to backend to save in database
   * Parameter: product = The product object with name, price, category, etc.
   * Returns: Observable<Product> = Saved product from backend (with ID)
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * 🔹 updateProduct()
   * Changes an EXISTING product in database
   * Parameters: id = Which product to update (by ID)
   *             product = New product data to save
   * Returns: Observable<Product> = Updated product from backend
   */
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  /**
   * 🔹 deleteProduct()
   * REMOVES a product from database
   * Parameter: id = Which product to delete (by ID)
   * Returns: Observable<void> = Nothing returned (just confirmation)
   * How: DELETE request to /api/products/1 → Backend deletes → Returns OK
   */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * 🔹 searchProducts()
   * FINDS products by NAME (like Google search)
   * Parameter: name = What to search for (e.g., "Laptop")
   * Returns: Observable<Product[]> = List of products matching the search
   */
  searchProducts(name: string): Observable<Product[]> {
    let params = new HttpParams().set('name', name);
    return this.http.get<Product[]>(`${this.apiUrl}/search`, { params });
  }

  /**
   * 🔹 getProductsByCategory()
   * Gets all products in a SPECIFIC CATEGORY
   * Parameter: category = Category name (e.g., "Electronics", "Clothing")
   * Returns: Observable<Product[]> = List of products in that category
   */
  getProductsByCategory(category: string): Observable<Product[]> {
    // HttpParams = Way to add filters to URL (?category=Electronics)
    let params = new HttpParams().set('category', category);
    return this.http.get<Product[]>(`${this.apiUrl}/by-category`, { params });
  }

  /**
   * 🔹 getProductsByPriceRange()
   * Gets all products within a PRICE RANGE
   * Parameters: minPrice = Lowest price (e.g., 100)
   *             maxPrice = Highest price (e.g., 1000)
   * Returns: Observable<Product[]> = Products between min and max price
   */
  getProductsByPriceRange(minPrice: number, maxPrice: number): Observable<Product[]> {
    // Build URL parameters: ?minPrice=100&maxPrice=1000
    let params = new HttpParams()
      .set('minPrice', minPrice.toString())  // toString() = Convert number to text
      .set('maxPrice', maxPrice.toString());
    return this.http.get<Product[]>(`${this.apiUrl}/price-range`, { params });
  }

  /**
   * 🔹 filterProducts()
   * FINDS products by CATEGORY AND PRICE (combined filter)
   * Parameters: category = Product type (e.g., "Electronics")
   *             minPrice = Lowest price (e.g., 100)
   *             maxPrice = Highest price (e.g., 1000)
   */
  filterProducts(category: string, minPrice: number, maxPrice: number): Observable<Product[]> {
    let params = new HttpParams()
      .set('category', category)
      .set('minPrice', minPrice.toString())  // toString() = Convert number to text
      .set('maxPrice', maxPrice.toString());
    return this.http.get<Product[]>(`${this.apiUrl}/filter`, { params });
  }
}
