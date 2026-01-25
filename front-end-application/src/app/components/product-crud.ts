
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService, Product } from '../services/product.service';

// 🔹 @Component Decorator
@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.css'
})

// 🔹 ProductCrudComponent - The Brain of the App
export class ProductCrudComponent implements OnInit {
  // 🔹 Data Storage Variables
  // products = All products from database
  // filteredProducts = Products after search/filter applied
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  // 🔹 Form Management
  // form = The form with input fields (name, price, etc.)
  // submitted = Did user try to submit the form?
  // isEditMode = Are we editing an existing product or creating new?
  // showForm = Should we show the form (hidden by default)
  // editingProductId = Which product are we editing (ID number)
  form: FormGroup;
  submitted = false;
  isEditMode = false;
  showForm = false;
  editingProductId: number | null = null;

  // 🔹 Pagination (Showing multiple pages)
  // currentPage = Which page are we on (1, 2, 3...)
  // itemsPerPage = How many products per page (5 products per page)
  currentPage = 1;
  itemsPerPage = 5;

  // 🔹 Search and Filter Variables
  // searchQuery = What user typed in search box
  // selectedCategory = Which category is selected
  // minPrice, maxPrice = Price range for filtering
  searchQuery = '';
  selectedCategory = '';
  minPrice = 0;
  maxPrice = 100000;

  // 🔹 UI State (What the user sees)
  // loading = Are we waiting for data from backend?
  // error = Any error message to show?
  // successMessage = Success message after saving?
  loading = false;
  error = '';
  successMessage = '';

  // 🔹 Available Categories
  // Users can select from these options
  categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys'];

  // 🔹 CONSTRUCTOR
  // This runs when the component is created
  // - productService = Service to talk to backend
  // - formBuilder = Tool to create forms with validation
  // - this.form = Initialize empty form
  constructor(
    private productService: ProductService,  // Service for API calls
    private formBuilder: FormBuilder          // Service for creating forms
  ) {
    this.form = this.createForm();
  }

  // 🔹 ngOnInit()
  // This runs AFTER constructor, when component loads
  // Used to fetch initial data from backend
  ngOnInit(): void {
    this.loadProducts();  // Load all products when page loads
  }

  /**
   * 🔹 createForm()
   * Creates the form with input fields
   * Each field has VALIDATORS:
   * - required = Must be filled
   * - minLength = Minimum characters
   * - min = Minimum value (for numbers)
   */
  private createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],  // No validation needed for ID (backend generates it)
      
      // Name field: MUST be filled, at least 3 characters
      name: ['', [Validators.required, Validators.minLength(3)]],
      
      // Description field: Optional, but if filled must be 10+ characters
      description: ['', [Validators.minLength(10)]],
      
      // Price field: MUST be filled, must be greater than 0.01
      price: ['', [Validators.required, Validators.min(0.01)]],
      
      // Quantity field: MUST be filled, must be 0 or more
      quantity: ['', [Validators.required, Validators.min(0)]],
      
      // Category field: MUST be selected
      category: ['', Validators.required],
      
      // SKU field: Optional (no validation)
      sku: ['']
    });
  }

  /**
   * 🔹 loadProducts()
   * Fetches ALL products from backend and shows them
   * Steps:
   * 1. Show loading spinner
   * 2. Call productService.getAllProducts() (sends GET request to backend)
   * 3. Store products when response comes back
   * 4. Hide loading spinner
   * 5. Show error if something goes wrong
   */
  loadProducts(): void {
    this.loading = true;  // Show "Loading..." spinner
    this.error = '';      // Clear any previous errors
    
    // Ask service to get all products from backend
    this.productService.getAllProducts().subscribe({
      // next = What to do when data comes back
      next: (data) => {
        this.products = data;           // Store all products
        this.filteredProducts = data;   // Initially show all (no filter yet)
        this.loading = false;           // Hide loading spinner
      },
      // error = What to do if something goes wrong
      error: (err) => {
        this.error = 'Failed to load products: ' + (err.error?.message || err.message);
        this.loading = false;
      }
    });
  }

  /**
   * 🔹 saveProduct()
   * Creates NEW product or UPDATES existing product
   * Steps:
   * 1. Check if form is valid (all required fields filled)
   * 2. If valid, send to backend (either create or update)
   * 3. Show success message
   * 4. Refresh the products list
   * 5. Reset the form
   */
  saveProduct(): void {
    this.submitted = true;  // Mark form as submitted (to show validation errors)

    // If form has errors, don't send to backend
    if (this.form.invalid) {
      return;  // Stop here
    }

    const product = this.form.value;  // Get all form values
    this.loading = true;
    this.error = '';
    this.successMessage = '';

    if (this.isEditMode && this.editingProductId) {
      // 🔹 EDIT MODE: Update existing product
      this.productService.updateProduct(this.editingProductId, product).subscribe({
        next: (response) => {
          this.successMessage = '✅ Product updated successfully!';
          this.loadProducts();  // Reload list
          this.resetForm();
          this.loading = false;
          setTimeout(() => this.successMessage = '', 3000);  // Hide message after 3 seconds
        },
        error: (err) => {
          this.error = err.error?.message || 'Failed to update product';
          this.loading = false;
        }
      });
    } else {
      // 🔹 CREATE MODE: Create new product
      this.productService.createProduct(product).subscribe({
        next: (response) => {
          this.successMessage = '✅ Product created successfully!';
          this.loadProducts();  // Reload list
          this.resetForm();
          this.loading = false;
          setTimeout(() => this.successMessage = '', 3000);  // Hide message after 3 seconds
        },
        error: (err) => {
          this.error = err.error?.message || 'Failed to create product';
          this.loading = false;
        }
      });
    }
  }

  /**
   * 🔹 editProduct()
   * Puts selected product into form for editing
   * Steps:
   * 1. Turn on edit mode
   * 2. Store which product we're editing (by ID)
   * 3. Fill form with current product data
   * 4. Show the form
   * 5. Scroll to top so user can see the form
   */
  editProduct(product: Product): void {
    this.isEditMode = true;                    // Turn on edit mode
    this.editingProductId = product.id || null;  // Remember which product
    this.form.patchValue(product);             // Fill form with product data
    this.showForm = true;                      // Show the form
    window.scrollTo(0, 0);                     // Jump to top of page
  }

  /**
   * 🔹 deleteProduct()
   * Removes a product from database
   * Steps:
   * 1. Ask user for confirmation (don't delete by accident!)
   * 2. Send delete request to backend
   * 3. Reload products list
   * 4. Show success message
   */
  deleteProduct(id: number | undefined): void {
    // If no ID or user clicks "Cancel", stop
    if (!id || !confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.loading = true;
    this.error = '';
    // Send delete request to backend
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.successMessage = '✅ Product deleted successfully!';
        this.loadProducts();  // Reload list
        this.loading = false;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to delete product';
        this.loading = false;
      }
    });
  }

  /**
   * 🔹 resetForm()
   * Clears the form and hides it
   * Used after saving a product or when user clicks "Cancel"
   */
  resetForm(): void {
    this.form.reset();           // Clear all form fields
    this.submitted = false;      // Hide validation errors
    this.isEditMode = false;     // Turn off edit mode
    this.editingProductId = null;  // Clear selected product
    this.showForm = false;       // Hide the form
  }

  /**
   * 🔹 toggleForm()
   * Shows/hides the form
   * If closing form, also reset it
   */
  toggleForm(): void {
    this.showForm = !this.showForm;  // Toggle: show if hidden, hide if shown
    if (!this.showForm) {
      this.resetForm();  // Clear form when closing
    }
  }

  /**
   * 🔹 searchProducts()
   * Finds products by NAME
   * Steps:
   * 1. Get search text from input
   * 2. Send to backend to search
   * 3. Show matching products
   */
  searchProducts(): void {
    if (this.searchQuery.trim()) {  // If user typed something
      this.loading = true;
      this.error = '';
      this.productService.searchProducts(this.searchQuery).subscribe({
        next: (data) => {
          this.filteredProducts = data;  
          this.currentPage = 1;         
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Search failed: ' + (err.error?.message || err.message);
          this.loading = false;
        }
      });
    }
  }

  /**
   * 🔹 filterProducts()
   * Finds products by CATEGORY and PRICE RANGE
   * Steps:
   * 1. Check that user selected category and price range
   * 2. Send to backend with filters
   * 3. Show matching products
   */
  filterProducts(): void {
    if (this.selectedCategory && this.minPrice >= 0 && this.maxPrice > this.minPrice) {
      this.loading = true;
      this.error = '';
      // Ask backend to filter with category and price range
      this.productService.filterProducts(this.selectedCategory, this.minPrice, this.maxPrice).subscribe({
        next: (data) => {
          this.filteredProducts = data;  
          this.currentPage = 1;         
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Filter failed: ' + (err.error?.message || err.message);
          this.loading = false;
        }
      });
    }
  }

  /**
   * clearFilters()
   * Removes all search and filter settings
   * Shows all products again
   */
  clearFilters(): void {
    this.searchQuery = '';         // Clear search text
    this.selectedCategory = '';    // Clear category
    this.minPrice = 0;             // Reset min price
    this.maxPrice = 100000;        // Reset max price
    this.currentPage = 1;          // Go to first page
    this.error = '';               // Clear error
    this.loadProducts();           // Reload all products
  }

  /**
   * paginatedProducts (getter)
   * Returns only the products for CURRENT PAGE
   * Example: If page=1, itemsPerPage=5, returns products 0-5
   *          If page=2, itemsPerPage=5, returns products 5-10
   */
  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  /**
   * totalPages (getter)
   * Calculates how many pages we need
   * Example: 25 products ÷ 5 per page = 5 pages total
   */
  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  /**
   * changePage()
   * Changes to a different page
   */
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  /**
   * getErrorMessage()
   * Shows friendly error messages for form validation
   * Example: If name is required and empty, shows "name is required"
   */
  getErrorMessage(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (field?.hasError('minlength')) {
      return `${fieldName} must be at least ${field.getError('minlength').requiredLength} characters`;
    }
    if (field?.hasError('min')) {
      return `${fieldName} must be greater than ${field.getError('min').min}`;
    }
    return '';
  }
}
