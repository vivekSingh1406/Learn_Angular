# Angular Learning Project

## About Angular

- **JavaScript framework** for web development
- **Single Page Application (SPA)** - no page refresh on navigation
- Developed by **Google**
- Complete web framework with all features built-in
- Fast loading and fast development
- Suitable for large-scale applications
- Large community support
- Regular updates every 6 months

---

## Essential Angular Commands

### 1. Project Setup Commands

#### Create a new Angular project
```bash
ng new project-name
```
Creates a new Angular project with all necessary files and dependencies.

#### Create a new Angular project with routing
```bash
ng new project-name --routing
```
Creates a new Angular project with built-in routing configuration.

---

### 2. Development Commands

#### Start the development server
```bash
ng serve
# or
npm start
```
Compiles and serves your Angular application locally at `http://localhost:4200/`. The app will automatically reload when you make changes.

#### Start with a different port
```bash
ng serve --port 3000
```
Runs the development server on port 3000 instead of the default 4200.

#### Start with open browser
```bash
ng serve --open
```
Automatically opens your default browser to the application URL.

---

### 3. Build Commands

#### Build for production
```bash
ng build
```
Compiles your application and creates an optimized production build in the `dist/` folder.

#### Build for production with optimization
```bash
ng build --configuration production
```
Creates a production build with all optimizations enabled (minification, tree-shaking, etc.).

#### Build for development
```bash
ng build --configuration development
```
Creates a development build with debugging enabled.

---

### 4. Component Generation Commands

#### Generate a new component
```bash
ng generate component component-name
# or
ng g c component-name
```
Creates a new component with TypeScript file, HTML template, CSS stylesheet, and spec file.

#### Generate component without spec file
```bash
ng generate component component-name --skip-tests
```
Creates a component without the test file.

#### Generate component in a specific folder
```bash
ng generate component folder/component-name
```
Creates a component inside the specified folder.

---

### 5. Service Generation Commands

#### Generate a new service
```bash
ng generate service service-name
# or
ng g s service-name
```
Creates a new service file for handling business logic and API calls.

#### Generate service without spec file
```bash
ng generate service service-name --skip-tests
```
Creates a service without the test file.

---

### 6. Module Generation Commands

#### Generate a new module
```bash
ng generate module module-name
# or
ng g m module-name
```
Creates a new NgModule for organizing related components, services, and other features.

---

### 7. Testing Commands

#### Run unit tests
```bash
ng test
```
Executes all unit tests using Karma test runner. Tests run in watch mode by default.

#### Run tests once (no watch)
```bash
ng test --watch=false
```
Runs tests once and exits without watching for changes.

#### Run tests with code coverage
```bash
ng test --code-coverage
```
Generates a code coverage report showing which parts of your code are covered by tests.

#### Run end-to-end tests
```bash
ng e2e
```
Executes end-to-end tests for testing user interactions across the entire application.

---

### 8. Utility Commands

#### Check Angular CLI version
```bash
ng version
```
Displays the version of Angular CLI and other installed packages.

#### List all available schematics
```bash
ng generate --help
```
Shows all available generators and their options.

#### Create a custom schematic
```bash
ng generate schematic schematic-name
```
Creates a reusable code generation template.

---

### 9. Linting and Code Quality

#### Run linter
```bash
ng lint
```
Analyzes your code for style issues and potential errors using ESLint.

#### Format code
```bash
npm run format
```
Automatically formats your code according to project standards.

---

### 10. Development Utilities

#### Generate a directive
```bash
ng generate directive directive-name
# or
ng g d directive-name
```
Creates a new custom Angular directive.

#### Generate a pipe
```bash
ng generate pipe pipe-name
# or
ng g p pipe-name
```
Creates a new custom Angular pipe for data transformation.

#### Generate an interface
```bash
ng generate interface interface-name
# or
ng g i interface-name
```
Creates a new TypeScript interface for type safety.

#### Generate a guard
```bash
ng generate guard guard-name
# or
ng g g guard-name
```
Creates a new route guard for protecting routes.

#### Generate a resolver
```bash
ng generate resolver resolver-name
```
Creates a new route resolver for pre-loading data.

---

### 11. Update Commands

#### Update Angular CLI and packages
```bash
ng update @angular/cli @angular/core
```
Updates Angular to the latest version with automatic code migrations.

---

### 12. Additional Useful Commands

#### Create a production build and start server
```bash
ng build --prod && ng serve
```
Builds for production and then serves the application.

#### Clear Angular cache
```bash
ng cache clean
```
Clears the Angular build cache to ensure fresh compilation.

#### Analyze bundle size
```bash
ng build --stats-json
npm run bundle-report
```
Generates a visual analysis of your bundle size.

---

## Project Structure

```
project-name/
├── src/
│   ├── app/
│   │   ├── app.ts              # Root component
│   │   ├── app.html            # Root template
│   │   ├── app.css             # Root styles
│   │   ├── app.routes.ts       # Route definitions
│   │   └── app.config.ts       # App configuration
│   ├── main.ts                 # Application entry point
│   ├── index.html              # HTML template
│   └── styles.css              # Global styles
├── angular.json                # Angular configuration
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
```

---

## Common npm Commands

```bash
npm install              # Install dependencies
npm start               # Start development server
npm run build           # Build for production
npm test                # Run unit tests
npm run lint            # Run linter
npm update              # Update all packages
```
---

## Tips for Angular Development

1. Always use components for reusable UI elements
2. Create services for shared business logic
3. Use dependency injection for better testability
4. Keep components simple and focused
5. Use Angular's built-in pipes for data transformation
6. Implement route guards for protected routes
7. Use observables and RxJS for async operations
8. Follow Angular style guide for consistency
9. Use environment configuration for different builds
10. Implement lazy loading for better performance

---

## Interview Questions for 2-4 Years Angular Developer Experience

### 1. What is Angular and how does it differ from AngularJS?

**Answer:**

Angular is a complete JavaScript framework for building dynamic web applications with a modern, component-based architecture. AngularJS (Angular 1.x) is its predecessor.

**Key Differences:**

- **Architecture**: AngularJS uses MVC (Model-View-Controller), while Angular uses component-based architecture with services
- **Language**: AngularJS uses plain JavaScript, while Angular is built with TypeScript
- **Performance**: Angular is much faster due to AOT compilation and change detection optimizations
- **Mobile Support**: Angular has better mobile support with Angular Mobile Toolkit
- **Dependency Injection**: Both use DI, but Angular's implementation is more robust
- **Routing**: Angular Router is more powerful with lazy loading and guards compared to ngRoute
- **Testing**: Angular has better testing infrastructure with Karma and Jasmine built-in

**Example:**
```typescript
// Angular Component
@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
  title = 'Angular App';
}
```

---

### 2. What is dependency injection in Angular?

**Answer:**

Dependency Injection (DI) is a design pattern that deals with how components get hold of their dependencies. The Angular injector subsystem is in charge of creating instances of services, invoking methods, and loading modules as required.

**How it works:**

1. **Providers**: Define how to create a service instance
2. **Injector**: Maintains a container of service instances and resolves dependencies
3. **Tokens**: Unique identifiers for services in the DI container

**Benefits:**

- Loose coupling between components
- Easy testing by mocking dependencies
- Better code reusability
- Centralized service management

**Example:**
```typescript
// Service definition
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    return { name: 'John' };
  }
}

// Component using DI
@Component({
  selector: 'app-user',
  template: '<p>{{ user.name }}</p>'
})
export class UserComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

---

### 3. Explain the difference between ngOnInit and Constructor in Angular.

**Answer:**

Both are used for initialization, but at different lifecycle stages.

**Constructor:**
- Called when the class is instantiated (before any Angular-specific initialization)
- Used to inject dependencies
- Should be kept simple - avoid heavy operations here
- Called before component initialization

**ngOnInit:**
- Angular lifecycle hook called after component initialization
- Input properties are available
- Safe place to fetch data and initialize component
- Called after @Input properties are set

**Detailed Comparison:**

| Aspect | Constructor | ngOnInit |
|--------|-------------|----------|
| Called | Class instantiation | After component initialization |
| @Input availability | Not available | Available |
| Use Case | Inject dependencies | Initialize data, fetch from API |
| Complexity | Keep simple | Can be complex |

**Example:**
```typescript
export class UserComponent implements OnInit {
  @Input() userId: number;
  user: any;

  constructor(private userService: UserService) {
    // Inject dependencies only
    console.log('Constructor called');
    // this.userId is undefined here
  }

  ngOnInit() {
    // Initialize component
    console.log('ngOnInit called');
    console.log(this.userId); // Now available
    this.user = this.userService.getUser(this.userId);
  }
}
```

---

### 4. What is the difference between one-way binding and two-way binding?

**Answer:**

**One-Way Binding:**
- Data flows in one direction only (from component to template or vice versa)
- Three types: Interpolation, Property Binding, Event Binding
- Less overhead, better performance
- Changes in component don't automatically reflect in the view unless explicitly bound

**Two-Way Binding:**
- Data flows in both directions (component ↔ template)
- Uses `[(ngModel)]` directive
- Automatically synchronizes component property and template
- More overhead due to bidirectional synchronization

**Examples:**

```typescript
// One-Way Binding Examples
export class BindingComponent {
  title = 'Angular App';
  isActive = true;

  onClick() {
    console.log('Button clicked');
  }
}
```

```html
<!-- Interpolation (Component to Template) -->
<h1>{{ title }}</h1>

<!-- Property Binding (Component to Template) -->
<img [src]="imageUrl">
<button [disabled]="!isActive">Click</button>

<!-- Event Binding (Template to Component) -->
<button (click)="onClick()">Click Me</button>

<!-- Two-Way Binding (Component ↔ Template) -->
<input [(ngModel)]="name">
```

---

### 5. What are directives in Angular? Explain different types.

**Answer:**

Directives are markers on a DOM element (such as an attribute, element name, comment, or CSS class) that tell Angular's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.

**Types of Directives:**

1. **Component Directives**: Components with templates
2. **Structural Directives**: Modify DOM structure
3. **Attribute Directives**: Change appearance or behavior of elements

**Examples:**

```typescript
// Structural Directives
<div *ngIf="isVisible">Visible</div>

<div *ngFor="let item of items">
  {{ item.name }}
</div>

<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">Active</p>
  <p *ngSwitchCase="'inactive'">Inactive</p>
  <p *ngSwitchDefault>Unknown</p>
</div>

// Attribute Directives
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
  Apply classes conditionally
</div>

<div [ngStyle]="{'color': color, 'font-size': size}">
  Apply styles dynamically
</div>

// Custom Attribute Directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}

// Usage
<p appHighlight>This text is highlighted</p>
```

---

### 6. What is a service in Angular and how do you create one?

**Answer:**

A service is a class with a specific purpose and responsibility. Services in Angular are used for sharing data and business logic across multiple components, reducing code duplication and improving maintainability.

**Creating a Service:**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Available throughout the application
})
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
  ];

  constructor(private http: HttpClient) { }

  // Get all products
  getProducts() {
    return this.products;
  }

  // Get single product
  getProduct(id: number) {
    return this.products.find(p => p.id === id);
  }

  // Add product
  addProduct(product: any) {
    this.products.push(product);
  }

  // Fetch from API
  fetchProductsFromAPI() {
    return this.http.get('/api/products');
  }
}
```

**Using the Service:**

```typescript
@Component({
  selector: 'app-products',
  template: `<div *ngFor="let product of products">{{ product.name }}</div>`
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
```

---

### 7. Explain Angular lifecycle hooks with examples.

**Answer:**

Lifecycle hooks are methods called at specific stages of a component's lifecycle. Understanding them helps you perform actions at the right time.

**Common Lifecycle Hooks (in order):**

```typescript
export class LifecycleComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  @Input() name: string;

  // 1. Called when @Input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('Input properties changed', changes);
  }

  // 2. Called once - after component creation, before initialization
  ngOnInit() {
    console.log('Component initialized');
  }

  // 3. Called every time change detection runs
  ngDoCheck() {
    console.log('Custom change detection');
  }

  // 4. Called after content projection initialization
  ngAfterContentInit() {
    console.log('Content initialized');
  }

  // 5. Called every time projected content is checked
  ngAfterContentChecked() {
    console.log('Content checked');
  }

  // 6. Called after view initialization
  ngAfterViewInit() {
    console.log('View initialized');
  }

  // 7. Called every time view is checked
  ngAfterViewChecked() {
    console.log('View checked');
  }

  // 8. Called before component destruction
  ngOnDestroy() {
    console.log('Component destroyed - cleanup here');
  }
}
```

**Sequence:**
ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked → ngOnDestroy

---

### 8. What are observables and how do they differ from promises?

**Answer:**

**Observables:**
- Part of RxJS library
- Lazy execution (don't execute until subscribed)
- Can emit multiple values over time
- Cancellable (unsubscribe)
- Better for handling streams of data
- Support operators for data transformation

**Promises:**
- Built-in JavaScript feature
- Eager execution (execute immediately)
- Emit single value (resolved or rejected)
- Cannot be cancelled
- Simpler but less powerful
- Limited chaining capabilities

**Detailed Comparison:**

```typescript
// Observable Example
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

// Subscribe to observable
const subscription = observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Done')
});

// Can unsubscribe
subscription.unsubscribe();

// Promise Example
const promise = new Promise((resolve, reject) => {
  resolve(1); // Only one resolution
});

promise.then(value => console.log(value))
       .catch(err => console.error(err));
// Cannot unsubscribe from promise

// Real-world HTTP Observable
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users')
    .pipe(
      map(users => users.filter(u => u.active)),
      catchError(error => throwError(() => error))
    );
}
```

---

### 9. Explain RxJS operators and their importance.

**Answer:**

RxJS operators are functions that take an observable as input and return a modified observable. They enable powerful functional programming with streams.

**Common Operators:**

```typescript
import { of, from } from 'rxjs';
import { 
  map, 
  filter, 
  switchMap, 
  debounceTime, 
  catchError,
  tap,
  distinctUntilChanged
} from 'rxjs/operators';

// 1. map - Transform each emitted value
of(1, 2, 3).pipe(
  map(x => x * 2)
).subscribe(console.log); // Output: 2, 4, 6

// 2. filter - Filter values based on condition
of(1, 2, 3, 4, 5).pipe(
  filter(x => x > 2)
).subscribe(console.log); // Output: 3, 4, 5

// 3. switchMap - Switch to new observable
this.searchTerm$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// 4. tap - Perform side effects without changing values
of(1, 2, 3).pipe(
  tap(x => console.log('Processing', x)),
  map(x => x * 2)
).subscribe(console.log);

// 5. catchError - Handle errors
this.http.get('/api/data').pipe(
  catchError(error => {
    console.error('Error occurred', error);
    return of([]); // Return default value
  })
).subscribe(data => this.data = data);

// 6. debounceTime - Delay emissions
this.inputSubject.pipe(
  debounceTime(300), // Wait 300ms after last emission
  distinctUntilChanged()
).subscribe(value => this.onSearch(value));
```

**Importance:**
- Enable reactive programming
- Handle async operations elegantly
- Compose complex data flows
- Automatic memory management with cleanup
- Powerful data transformation capabilities

---

### 10. What is change detection in Angular and how does it work?

**Answer:**

Change detection is the mechanism Angular uses to detect when data has changed and needs to update the view. Angular checks if any of the component's data has changed and updates the DOM accordingly.

**How it works:**

1. Event occurs (click, input, API response, etc.)
2. Angular's zone.js triggers change detection
3. Angular goes through each component in the component tree
4. Compares old and new values
5. Updates the DOM if values changed

**Change Detection Strategies:**

```typescript
// Default Strategy - Checks all components on every event
@Component({
  selector: 'app-default',
  template: '<p>{{ data }}</p>',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent {
  @Input() data: string;
}

// OnPush Strategy - Only checks if @Input changed or event occurred in component
@Component({
  selector: 'app-onpush',
  template: '<p>{{ data }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  @Input() data: string;
}

// Manually triggering change detection
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<p>{{ count }}</p><button (click)="increment()">+</button>'
})
export class ManualComponent {
  count = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  increment() {
    this.count++;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  // Detach and reattach
  detachAndReattach() {
    this.cdr.detach(); // Stop change detection
    // Do something
    this.cdr.reattach(); // Resume change detection
  }
}
```

**Performance Tips:**
- Use OnPush strategy for better performance
- Minimize change detection cycles
- Use trackBy in *ngFor for large lists
- Unsubscribe from observables in ngOnDestroy

---

### 11. What is lazy loading in Angular and why is it important?

**Answer:**

Lazy loading is a technique where you load feature modules only when they are needed, rather than loading everything upfront. This reduces the initial bundle size and improves application startup time.

**Benefits:**
- Smaller initial bundle
- Faster app startup
- Better performance for users on slower networks
- Load modules on demand
- Improved user experience

**Implementation:**

```typescript
// app.routes.ts - Define lazy-loaded routes
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

// admin.module.ts
@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
  declarations: [AdminComponent, AdminDashboardComponent]
})
export class AdminModule { }

// Standalone component lazy loading
export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  }
];
```

**How it works:**
1. Only the core bundle is loaded initially
2. When user navigates to a lazy-loaded route, that module is fetched
3. Module is compiled and added to the application
4. Component renders with lazy-loaded data

---

### 12. Explain async pipe and its benefits.

**Answer:**

The async pipe subscribes to an observable or promise and returns the latest emitted value. It automatically unsubscribes when the component is destroyed, preventing memory leaks.

**Benefits:**
- Automatic subscription management
- Automatic unsubscription
- Handles null/undefined values
- Improves performance by reducing manual subscriptions
- Simplifies code

```typescript
// Without async pipe - manual subscription management
@Component({
  selector: 'app-user',
  template: '<p>{{ user?.name }}</p>'
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  private subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.getUser()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Must unsubscribe manually
  }
}

// With async pipe - automatic management
@Component({
  selector: 'app-user',
  template: '<p>{{ (user$ | async)?.name }}</p>'
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
    // No manual subscription needed
    // Automatically unsubscribes on destroy
  }
}

// Multiple subscriptions to same observable
@Component({
  selector: 'app-dashboard',
  template: `
    <p>Name: {{ (user$ | async)?.name }}</p>
    <p>Email: {{ (user$ | async)?.email }}</p>
  `
})
export class DashboardComponent {
  user$ = this.userService.getUser();

  constructor(private userService: UserService) { }
}

// Better approach - use shareReplay to avoid multiple subscriptions
@Component({
  selector: 'app-dashboard',
  template: `
    <p>Name: {{ (user$ | async)?.name }}</p>
    <p>Email: {{ (user$ | async)?.email }}</p>
  `
})
export class DashboardComponent {
  user$ = this.userService.getUser().pipe(shareReplay(1));

  constructor(private userService: UserService) { }
}
```

---

### 13. What is routing in Angular and how do you implement it?

**Answer:**

Routing enables navigation between different views/components in a single-page application without page reload. The Angular Router maps URL paths to components.

**Implementation:**

```typescript
// 1. Define routes
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'users',
        component: AdminUsersComponent
      }
    ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

// 2. Bootstrap with Router
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});

// 3. Use RouterOutlet in template
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/products">Products</a>
  <a [routerLink]="['/product', productId]">Product Detail</a>
</nav>

<router-outlet></router-outlet>

// 4. Access route information in component
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: '<p>Product: {{ productId }}</p>'
})
export class ProductDetailComponent implements OnInit {
  productId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Get route parameter
    this.productId = +this.route.snapshot.params['id'];

    // Or using observable
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  goBack() {
    history.back();
  }
}

// 5. Route guards
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
```

---

### 14. What is HttpClientModule and how do you use it?

**Answer:**

HttpClientModule provides the HttpClient service for making HTTP requests to a server. It's used for API communication in Angular applications.

```typescript
// 1. Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});

// 2. Create a service
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  // GET request
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  // POST request
  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  // PUT request
  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/users/${id}`, user);
  }

  // DELETE request
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  // With headers
  getWithHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer token',
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.apiUrl}/protected`, { headers });
  }

  // With parameters
  searchUsers(query: string) {
    const params = new HttpParams().set('q', query);
    return this.http.get(`${this.apiUrl}/users`, { params });
  }
}

// 3. Use in component
@Component({
  selector: 'app-users',
  template: `
    <div *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>
  `
})
export class UsersComponent implements OnInit {
  users$: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.users$ = this.apiService.getUsers()
      .pipe(
        catchError(error => {
          console.error('Error fetching users', error);
          return of([]);
        })
      );
  }
}

// 4. HTTP Interceptor for global error handling
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Handle unauthorized
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}

// Provide interceptor
bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptors([ErrorInterceptor]))
  ]
});
```

---

### 15. What are pipes and how do you create custom pipes?

**Answer:**

Pipes transform data for display. They take input data and return a transformed output.

```typescript
// 1. Using built-in pipes
<p>{{ date | date: 'short' }}</p>
<p>{{ amount | currency: 'USD' }}</p>
<p>{{ text | uppercase }}</p>
<p>{{ number | number: '2.2-2' }}</p>

// 2. Creating custom pipes
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

// Usage
<p>{{ 'hello' | capitalize }}</p> <!-- Output: Hello -->

// 3. Pipe with parameters
@Pipe({
  name: 'multiply',
  standalone: true
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multiplier: number = 1): number {
    return value * multiplier;
  }
}

// Usage
<p>{{ 5 | multiply: 3 }}</p> <!-- Output: 15 -->

// 4. Complex custom pipe
@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

// 5. Use custom pipe in component
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CapitalizePipe],
  template: '<p>{{ name | capitalize }}</p>'
})
export class PipesDemoComponent {
  name = 'john';
}
```

---

### 16. What is form validation in Angular and different approaches?

**Answer:**

Form validation ensures user input meets specified requirements before submission.

```typescript
// 1. Template-driven forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm">
      <input 
        [(ngModel)]="user.email" 
        name="email" 
        required 
        email
        #email="ngModelControl">
      <div *ngIf="email.invalid && email.touched">
        <p *ngIf="email.errors?.['required']">Email is required</p>
        <p *ngIf="email.errors?.['email']">Invalid email format</p>
      </div>

      <button [disabled]="form.invalid">Submit</button>
    </form>
  `
})
export class TemplateFormComponent {
  user = { email: '' };

  onSubmit() {
    console.log(this.user);
  }
}

// 2. Reactive forms (recommended)
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email">
      <div *ngIf="email?.invalid && email?.touched">
        <p *ngIf="email?.errors?.['required']">Email is required</p>
        <p *ngIf="email?.errors?.['email']">Invalid email</p>
      </div>

      <input formControlName="password" type="password" placeholder="Password">
      <div *ngIf="password?.invalid && password?.touched">
        <p *ngIf="password?.errors?.['minlength']">Minimum 8 characters</p>
      </div>

      <button [disabled]="form.invalid">Submit</button>
    </form>
  `
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}

// 3. Custom validators
function passwordStrengthValidator(control: AbstractControl) {
  const value = control.value;
  
  if (!value) return null;

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);

  const valid = hasUpperCase && hasLowerCase && hasNumber;

  return valid ? null : { weakPassword: true };
}

this.form = this.fb.group({
  password: ['', [Validators.required, passwordStrengthValidator]]
});
```

---

### 17. What are guards in Angular routing?

**Answer:**

Guards control whether a route can be activated, deactivated, or load children. There are different types of guards for different scenarios.

```typescript
// 1. CanActivate - Prevent unauthorized access
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateFn {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

// 2. CanDeactivate - Warn before leaving
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivateFn {
  canDeactivate(component: any): boolean {
    if (component.hasUnsavedChanges?.()) {
      return confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  }
}

// 3. CanActivateChild - Protect child routes
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChildFn {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild() {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/access-denied']);
    return false;
  }
}

// 4. Resolve - Pre-load data before component initialization
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.getUser(id);
  }
}

// 5. Use guards in routes
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  },
  {
    path: 'edit',
    component: EditComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

// 6. Component with hasUnsavedChanges for CanDeactivate
@Component({
  selector: 'app-edit',
  template: `...`
})
export class EditComponent {
  form: FormGroup;
  originalValue: string;

  hasUnsavedChanges(): boolean {
    return this.form.value !== this.originalValue;
  }
}
```

---

### 18. How do you handle errors in Angular?

**Answer:**

Error handling is crucial for building robust applications. Angular provides multiple ways to handle errors.

```typescript
// 1. HTTP Error Handling
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users')
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(() => new Error('Failed to fetch users'));
        })
      );
  }
}

// 2. Global Error Handler
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    const chunkFailedMessage = /Loading chunk \d+ failed/g.test(error.message);

    if (chunkFailedMessage) {
      window.location.reload();
    }

    console.error('Global error:', error);
    // Log to server, show toast, etc.
  }
}

// Provide in app config
bootstrapApplication(App, {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
});

// 3. Try-Catch for synchronous operations
@Component({
  selector: 'app-calculator',
  template: '<input (change)="calculate()">'
})
export class CalculatorComponent {
  calculate() {
    try {
      const result = this.complexCalculation();
      console.log(result);
    } catch (error) {
      console.error('Calculation error:', error);
    }
  }

  complexCalculation() {
    // Calculation logic
    throw new Error('Calculation failed');
  }
}

// 4. Observable Error Handling
getProductWithRetry() {
  return this.http.get('/api/product')
    .pipe(
      retry(3), // Retry 3 times on failure
      catchError(error => {
        if (error.status === 404) {
          return of(null); // Return null if not found
        }
        return throwError(() => error);
      })
    );
}

// 5. Custom Error Class
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Usage
throw new AppError(500, 'Server error occurred');

// 6. Interceptor for error handling
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Unknown error';

        if (error.error instanceof ErrorEvent) {
          errorMsg = error.error.message; // Client-side error
        } else {
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        switch (error.status) {
          case 401:
            this.router.navigate(['/login']);
            break;
          case 403:
            this.router.navigate(['/access-denied']);
            break;
          case 404:
            errorMsg = 'Resource not found';
            break;
          case 500:
            errorMsg = 'Server error';
            break;
        }

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
```

---

### 19. What is state management and why is it important?

**Answer:**

State management is the practice of organizing and managing application state (data) in a centralized and predictable way.

```typescript
// 1. Simple Service-based State Management
@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state = new BehaviorSubject<AppState>({
    users: [],
    loading: false,
    error: null
  });

  state$ = this.state.asObservable();

  getUsers() {
    this.setState({ loading: true });
    this.http.get('/api/users').subscribe(
      users => this.setState({ users, loading: false }),
      error => this.setState({ error: error.message, loading: false })
    );
  }

  private setState(newState: Partial<AppState>) {
    this.state.next({ ...this.state.value, ...newState });
  }
}

// 2. Using NgRx (state management library)
// Install: npm install @ngrx/store

// Define action
export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

// Define reducer
const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => users)
);

// Define selector
export const selectUsers = createSelector(
  (state: any) => state.users,
  users => users
);

// Use in component
@Component({
  selector: 'app-users',
  template: '<div *ngFor="let user of users$ | async">{{ user.name }}</div>'
})
export class UsersComponent {
  users$ = this.store.select(selectUsers);

  constructor(private store: Store) {
    this.store.dispatch(loadUsers());
  }
}

// 3. Why State Management is Important:
// - Single source of truth
// - Predictable state updates
// - Easier debugging
// - Better testing
// - Improved performance
// - Scalable architecture
```

---

### 20. What are smart and dumb components and why is this pattern important?

**Answer:**

This is an architectural pattern that separates components into two categories based on their responsibilities.

```typescript
// 1. DUMB COMPONENT (Presentational Component)
// - Receives data via @Input
// - Emits events via @Output
// - Has no dependencies on services
// - Highly reusable
// - Easy to test

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let user of users" (click)="selectUser(user)">
      <p>{{ user.name }}</p>
      <button (click)="deleteUser($event, user.id)">Delete</button>
    </div>
  `
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();
  @Output() userDeleted = new EventEmitter<number>();

  selectUser(user: User) {
    this.userSelected.emit(user);
  }

  deleteUser(event: Event, id: number) {
    event.stopPropagation();
    this.userDeleted.emit(id);
  }
}

// 2. SMART COMPONENT (Container Component)
// - Manages state
// - Subscribes to services
// - Passes data to dumb components
// - Handles business logic
// - Less reusable

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [UserListComponent, CommonModule],
  template: `
    <div>
      <h1>Users</h1>
      <app-user-list 
        [users]="users$ | async"
        (userSelected)="onUserSelected($event)"
        (userDeleted)="onUserDeleted($event)">
      </app-user-list>
    </div>
  `
})
export class UserContainerComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  onUserSelected(user: User) {
    console.log('User selected:', user);
    // Handle selection
  }

  onUserDeleted(id: number) {
    this.userService.deleteUser(id).subscribe();
  }
}

// 3. Benefits of this pattern:
// - Separation of concerns
// - Improved reusability
// - Easier testing (dumb components are easier to test)
// - Better code organization
// - Improved performance (dumb components can use OnPush strategy)
// - Easier to maintain
```

---

## Advanced Level & Tricky Interview Questions

### 21. Explain memory leaks in Angular subscriptions and how to prevent them. (TRICKY)

**Answer:**

Memory leaks occur when subscriptions are not properly unsubscribed, keeping references to observables in memory even after the component is destroyed.

**Problem:**

```typescript
// MEMORY LEAK - Subscription never unsubscribes
@Component({
  selector: 'app-data',
  template: '<p>{{ data }}</p>'
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data => this.data = data
    );
    // If you navigate away, subscription stays active!
  }
}
```

**Solutions:**

```typescript
// Solution 1: Manual unsubscription
export class DataComponent implements OnInit, OnDestroy {
  data: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Cleanup
  }
}

// Solution 2: Multiple subscriptions with unsubscribe
export class DataComponent implements OnInit, OnDestroy {
  data1: any;
  data2: any;
  private subscriptions = new Subscription();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.dataService.getData1().subscribe(data => this.data1 = data)
    );
    this.subscriptions.add(
      this.dataService.getData2().subscribe(data => this.data2 = data)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); // Unsubscribe all at once
  }
}

// Solution 3: Using takeUntil operator (BEST PRACTICE)
export class DataComponent implements OnInit {
  data: any;
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// Solution 4: Using async pipe (NO MANUAL CLEANUP)
export class DataComponent {
  data$ = this.dataService.getData();

  constructor(private dataService: DataService) { }
  // No ngOnDestroy needed - async pipe handles it
}

// Solution 5: Create a reusable takeUntilDestroyed utility
import { Injectable, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data'
})
export class DataComponent implements OnInit {
  data: any;
  private destroyRef = inject(DestroyRef);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => this.data = data);
  }
  // No ngOnDestroy needed - Angular 16+
}
```

**Key Points:**
- Always unsubscribe from observables
- Use takeUntil with a destroy subject
- Use async pipe when possible
- Implement ngOnDestroy in all components with subscriptions

---

### 22. What is the difference between ngDoCheck and OnChanges? When would you use each? (TRICKY)

**Answer:**

**ngOnChanges:**
- Called only when @Input properties change
- Receives SimpleChanges object with previous and current values
- Efficient for detecting input changes
- Not called if input reference stays same but properties change (for objects)

**ngDoCheck:**
- Called during every change detection cycle
- You must implement custom change detection logic
- Called for any change, not just inputs
- More frequent calls but gives more control

**Real-world Scenario:**

```typescript
// Problem: ngOnChanges doesn't detect nested object property changes
@Component({
  selector: 'app-user',
  template: '<p>{{ user.name }}</p>'
})
export class UserComponent implements OnChanges {
  @Input() user: { name: string; age: number };

  ngOnChanges(changes: SimpleChanges) {
    // This won't be called if parent does: user.name = 'John'
    // Only called if parent does: user = { name: 'John', age: 30 }
    console.log('Input changed');
  }
}

// Solution: Use ngDoCheck for deep comparisons
export class UserComponent implements DoCheck {
  @Input() user: { name: string; age: number };
  previousUser: any;

  ngDoCheck() {
    if (JSON.stringify(this.user) !== JSON.stringify(this.previousUser)) {
      console.log('User changed (deep comparison)');
      this.previousUser = JSON.parse(JSON.stringify(this.user));
    }
  }
}

// Better solution: Use immutable patterns
export class UserComponent implements OnChanges {
  @Input() user: Immutable<User>;

  ngOnChanges(changes: SimpleChanges) {
    // Now this will be called even for property changes
    // because you're creating new object references
  }
}
```

---

### 23. Explain the difference between ViewChild and ContentChild with timing issues. (TRICKY)

**Answer:**

Both access child components/elements, but at different times with different availability.

**ViewChild:**
- Accesses elements in component's template
- Available after ngAfterViewInit
- Queries the view (template) of the component
- Cannot access projected content

**ContentChild:**
- Accesses elements passed via content projection
- Available after ngAfterContentInit
- Queries projected content
- Not in component's template

```typescript
// Parent component
@Component({
  selector: 'app-parent',
  template: `
    <app-child>
      <p #projectedText>This is projected</p>
    </app-child>
  `
})
export class ParentComponent { }

// Child component
@Component({
  selector: 'app-child',
  template: `
    <div #viewElement>View content</div>
    <ng-content></ng-content>
  `
})
export class ChildComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('viewElement') viewElement: ElementRef;
  @ContentChild('projectedText') projectedText: ElementRef;

  ngAfterViewInit() {
    // ViewChild is available here
    console.log(this.viewElement); // Works!
    console.log(this.projectedText); // undefined - not available yet!
  }

  ngAfterContentInit() {
    // ContentChild is now available
    console.log(this.projectedText); // Works!
    console.log(this.viewElement); // Still works
  }
}

// TRICKY: Timing issue
export class ChildComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('viewElement') viewElement: ElementRef;
  @ContentChild('projectedText') projectedText: ElementRef;

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('viewElement:', this.viewElement?.nativeElement.textContent);
    console.log('projectedText:', this.projectedText?.nativeElement.textContent); // undefined!
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
    console.log('projectedText:', this.projectedText?.nativeElement.textContent); // Now available
  }
}

// Lifecycle order: ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked
```

---

### 24. What are provider scopes and hierarchical injectors? Explain with examples. (ADVANCED)

**Answer:**

Provider scope determines where a service instance is available and how many instances exist.

```typescript
// 1. Root Scope - Single instance for entire app
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  id = Math.random();
}

// 2. Module Scope - Different instance for each module
@NgModule({
  providers: [ModuleService]
})
export class FeatureModule { }

// 3. Component Scope - New instance for each component
@Component({
  selector: 'app-component',
  providers: [ComponentService] // New instance each time component is created
})
export class MyComponent { }

// 4. ViewContainer/Hierarchical Injector - Instance per view
export class ParentComponent {
  @ViewChild(ChildComponent) child: ChildComponent;

  constructor(private parentService: ParentService) { }
}

export class ChildComponent {
  constructor(private parentService: ParentService) { }
  // Gets the same instance as parent due to hierarchical injection
}

// Practical example: Hierarchical injection
@Injectable()
export class DataService {
  private data = new BehaviorSubject<any>(null);
  data$ = this.data.asObservable();

  setData(value: any) {
    this.data.next(value);
  }
}

// Parent component - creates service instance
@Component({
  selector: 'app-parent',
  providers: [DataService],
  template: `
    <app-child1></app-child1>
    <app-child2></app-child2>
  `
})
export class ParentComponent { }

// Child components - share parent's service instance
@Component({
  selector: 'app-child1',
  template: `<p>{{ data$ | async }}</p>`
})
export class Child1Component {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) { }
}

@Component({
  selector: 'app-child2',
  template: `<button (click)="updateData()">Update</button>`
})
export class Child2Component {
  constructor(private dataService: DataService) { }

  updateData() {
    this.dataService.setData('New value');
    // Child1 will see this update because they share the same instance
  }
}

// TRICKY: Multiple providers at different levels
@Component({
  selector: 'app-root',
  providers: [AuthService] // Instance 1
})
export class AppComponent { }

@Component({
  selector: 'app-dashboard',
  providers: [AuthService] // Instance 2 (different from root)
})
export class DashboardComponent {
  constructor(authService: AuthService) {
    // This is a different instance than the app root
  }
}
```

---

### 25. Explain JIT vs AOT compilation in Angular. (ADVANCED)

**Answer:**

**JIT (Just-in-Time):**
- Compilation happens in the browser at runtime
- Larger initial bundle (includes compiler)
- Slower initial load
- Faster builds
- Better for development

**AOT (Ahead-of-Time):**
- Compilation happens during build process
- Smaller initial bundle
- Faster initial load
- Slower builds
- Better for production
- Catches template errors at build time

```typescript
// Production build with AOT (default)
ng build --configuration production
// Bundle is pre-compiled and optimized

// Development with JIT
ng serve
// Uses JIT for faster development builds

// Build output comparison:
// AOT Bundle: ~200KB (pre-compiled)
// JIT Bundle: ~1MB (includes compiler)

// Example: Template error detection
@Component({
  selector: 'app-test',
  template: '<p>{{ nonExistentProperty }}</p>' // Error caught with AOT!
})
export class TestComponent { }

// With AOT: Build fails with error message
// With JIT: Builds succeed, runtime error in browser
```

---

### 26. How do you handle circular dependencies in Angular services? (TRICKY)

**Answer:**

Circular dependencies occur when ServiceA depends on ServiceB and ServiceB depends on ServiceA.

```typescript
// PROBLEM: Circular dependency
@Injectable({
  providedIn: 'root'
})
export class ServiceA {
  constructor(private serviceB: ServiceB) { } // ServiceB depends on ServiceA
}

@Injectable({
  providedIn: 'root'
})
export class ServiceB {
  constructor(private serviceA: ServiceA) { } // Circular!
}

// ERROR: Cannot instantiate cyclic dependency!

// Solution 1: Refactor to remove dependency
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Common functionality both services need
}

export class ServiceA {
  constructor(private shared: SharedService) { }
}

export class ServiceB {
  constructor(private shared: SharedService) { }
}

// Solution 2: Use Injector to break cycle
@Injectable({
  providedIn: 'root'
})
export class ServiceA {
  constructor(private injector: Injector) { }

  getServiceB() {
    return this.injector.get(ServiceB); // Lazy injection
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceB {
  constructor(private serviceA: ServiceA) { }
}

// Solution 3: Use forwardRef
import { forwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceA {
  constructor(@Inject(forwardRef(() => ServiceB)) private serviceB: ServiceB) { }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceB {
  constructor(private serviceA: ServiceA) { }
}

// Solution 4: Use property injection instead of constructor
export class ServiceA {
  serviceB: ServiceB;

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.serviceB = this.injector.get(ServiceB);
    });
  }
}

export class ServiceB {
  constructor(private serviceA: ServiceA) { }
}
```

---

### 27. Explain NgZone and zone.js. When would you use them? (ADVANCED)

**Answer:**

NgZone helps control when Angular runs change detection, improving performance.

```typescript
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo'
})
export class ZoneDemoComponent implements OnInit {
  count = 0;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    // Heavy operation outside Angular zone
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.count++; // Doesn't trigger change detection
      }, 100);
    });
  }

  // Manually trigger change detection
  updateCount() {
    this.ngZone.run(() => {
      console.log('Change detection triggered');
      // This triggers change detection
    });
  }
}

// Performance optimization example
@Component({
  selector: 'app-mouse-tracker'
})
export class MouseTrackerComponent {
  mouseX = 0;
  mouseY = 0;

  constructor(private ngZone: NgZone) {
    this.setupMouseTracking();
  }

  setupMouseTracking() {
    // Run mouse tracking outside Angular zone (no change detection on every move)
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', (event) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        // No change detection triggered - smoother performance
      });
    });
  }

  onMouseClick() {
    // Click triggers change detection
    this.ngZone.run(() => {
      console.log(`Mouse clicked at (${this.mouseX}, ${this.mouseY})`);
    });
  }
}

// Real-world: Long-running timer
@Component({
  selector: 'app-stopwatch'
})
export class StopwatchComponent implements OnInit, OnDestroy {
  time = 0;
  private interval: any;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    // Run timer outside Angular to avoid change detection on each tick
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.time++;
      }, 100);
    });
  }

  stop() {
    // Back in Angular zone
    this.ngZone.run(() => {
      clearInterval(this.interval);
      console.log(`Time: ${this.time}`);
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
```

---

### 28. What are the potential issues with ngFor and how do you optimize it? (TRICKY)

**Answer:**

The trackBy function is crucial for performance with large lists.

```typescript
// PROBLEM: No trackBy - recreates DOM for every item
@Component({
  selector: 'app-users',
  template: `
    <div *ngFor="let user of users">
      <input [(ngModel)]="user.name">
      {{ user.id }}
    </div>
  `
})
export class UsersComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  addUser() {
    this.users = [{ id: 3, name: 'Bob' }, ...this.users];
    // All existing inputs will be recreated (loses focus, clears state)
  }
}

// SOLUTION: Use trackBy
export class UsersComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  trackByUserId(index: number, user: any) {
    return user.id; // Use unique identifier
  }

  addUser() {
    this.users = [{ id: 3, name: 'Bob' }, ...this.users];
    // Only new item is created, existing inputs stay intact
  }

  template() {
    return `
      <div *ngFor="let user of users; trackBy: trackByUserId">
        <input [(ngModel)]="user.name">
        {{ user.id }}
      </div>
    `;
  }
}

// Better: Generic trackBy factory
export function trackByIdentity(index: number, item: any) {
  return item?.id ?? index;
}

// Or arrow function
trackBy = (index: number, item: any) => item?.id ?? index;

// Using in template
template() {
  return `<div *ngFor="let user of users; trackBy: trackBy">...</div>`;
}

// Performance comparison:
// Without trackBy: Adds 5 items = 5 DOM operations
// With trackBy: Adds 5 items = 5 DOM operations (but existing items reused)

// Advanced: Async pipe with lists
@Component({
  selector: 'app-users-async',
  template: `
    <div *ngFor="let user of users$ | async; trackBy: trackByUserId">
      {{ user.name }}
    </div>
  `
})
export class UsersAsyncComponent {
  users$ = this.userService.getUsers();

  trackByUserId(index: number, user: any) {
    return user.id;
  }

  constructor(private userService: UserService) { }
}
```

---

### 29. Explain property binding pitfalls and security issues. (TRICKY)

**Answer:**

Property binding can lead to security vulnerabilities if not handled correctly.

```typescript
// SECURITY ISSUE 1: innerHTML with untrusted content
@Component({
  selector: 'app-unsafe',
  template: `
    <div [innerHTML]="userContent"></div>
  `
})
export class UnsafeComponent {
  userContent = '<img src=x onerror="alert(\'XSS\')">';
  // VULNERABLE! Script will execute!
}

// SOLUTION: Use DomSanitizer
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-safe',
  template: `<div [innerHTML]="safeContent"></div>`
})
export class SafeComponent {
  safeContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const userContent = '<img src=x onerror="alert(\'XSS\')">';
    this.safeContent = this.sanitizer.sanitize(1, userContent) as SafeHtml;
    // Script is stripped out
  }
}

// SECURITY ISSUE 2: href with javascript protocol
@Component({
  template: `
    <a [href]="userLink">Click</a>
  `
})
export class LinkComponent {
  userLink = 'javascript:alert("XSS")';
  // Angular blocks this automatically
}

// SECURITY ISSUE 3: Style binding with user input
@Component({
  template: `
    <div [style.color]="userColor"></div>
  `
})
export class StyleComponent {
  userColor = 'blue'; // Safe

  // But be careful with background-image
  userBackground = 'url(javascript:alert("XSS"))';
  // Angular sanitizes this
}

// BEST PRACTICE: Never trust user input
@Component({
  template: `<div [innerHTML]="trustedContent"></div>`
})
export class BestPracticeComponent {
  trustedContent: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {
    this.userService.getUserContent().subscribe(content => {
      // Always sanitize user input
      this.trustedContent = this.sanitizer.sanitize(1, content) as SafeHtml;
    });
  }
}

// CSP (Content Security Policy) headers prevent inline scripts
// Add to your server: Content-Security-Policy: script-src 'self'
```

---

### 30. How do you handle component communication in complex scenarios? (ADVANCED)

**Answer:**

Multiple strategies for different communication patterns.

```typescript
// Scenario: GrandParent → Parent → Child → GrandChild

// Strategy 1: Using Services (Subject/BehaviorSubject)
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}

// Any component can send/receive
@Component({
  selector: 'app-grandparent',
  template: `
    <input (change)="sendData($event)">
    <app-parent></app-parent>
  `
})
export class GrandparentComponent {
  constructor(private commService: CommunicationService) { }

  sendData(event: any) {
    this.commService.sendMessage(event.target.value);
  }
}

@Component({
  selector: 'app-grandchild',
  template: `<p>{{ message$ | async }}</p>`
})
export class GrandchildComponent {
  message$ = this.commService.message$;

  constructor(private commService: CommunicationService) { }
}

// Strategy 2: ViewChild/ContentChild for parent-to-child
@Component({
  selector: 'app-parent',
  template: `
    <button (click)="callChildMethod()">Call Child</button>
    <app-child #child></app-child>
  `
})
export class ParentComponent {
  @ViewChild('child') child: ChildComponent;

  callChildMethod() {
    this.child.doSomething();
  }
}

@Component({
  selector: 'app-child'
})
export class ChildComponent {
  doSomething() {
    console.log('Child method called from parent');
  }
}

// Strategy 3: State Management with NgRx (for complex apps)
// Define shared state
export interface AppState {
  messages: string[];
  currentUser: User;
}

// All components can access/modify this centralized state
@Component({
  selector: 'app-any',
  template: `<p>{{ messages$ | async | json }}</p>`
})
export class AnyComponent {
  messages$ = this.store.select(state => state.messages);

  constructor(private store: Store<AppState>) { }
}

// Strategy 4: Router params for route-based communication
export const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent
  }
];

@Component({
  selector: 'app-user-detail'
})
export class UserDetailComponent implements OnInit {
  userId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id'];
  }
}

// Strategy 5: Query parameters for optional data
this.router.navigate(['/search'], { queryParams: { q: 'angular' } });

@Component({
  selector: 'app-search'
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Search:', params['q']);
    });
  }
}
```

---

## Tips for Interview Success

1. **Practice coding** - Write actual code, not just theory
2. **Understand the "why"** - Know why things work, not just how
3. **Real-world examples** - Relate answers to practical scenarios
4. **Ask clarifying questions** - It shows you think critically
5. **Be honest** - If you don't know something, say so and explain how you'd find the answer
6. **Show problem-solving** - Explain your thought process
7. **Stay updated** - Follow Angular blog and changelog
8. **Build projects** - Create real applications to solidify knowledge
9. **Test your knowledge** - Write unit tests for your code
10. **Be confident** - Demonstrate your expertise clearly