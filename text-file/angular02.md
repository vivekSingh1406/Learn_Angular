
## 1. What is Component in Angular?

A Component is the fundamental building block of an Angular application. In Angular, everything you see on the screen is made using components.
- Examples:- Navbar, Sidebar, Login Form, Registration Form, Product Card, Dashboard, Footer, User Profile, Header

- Real-Life Understanding
Suppose you are creating an E-Commerce website. Instead of creating the whole UI in one file, Angular divides the UI into small reusable parts called components. Each section works independently.

---

## Why Angular Uses Components?

Angular follows:

## Component-Based Architecture

This architecture helps developers:

- Reuse code
- Maintain applications easily
- Build scalable applications
- Separate logic properly

---

## Structure of a Component

A component mainly contains:

| Part | Description |
|---|---|
| HTML | UI Design |
| CSS | Styling |
| TypeScript | Business Logic |

---

## 2. Why Components are Used?

Components are used because they make applications:

- Reusable
- Maintainable
- Scalable
- Organized

---

### 1. Reusability

The same component can be used multiple times.

### Example

```html
<app-product-card></app-product-card>
<app-product-card></app-product-card>
<app-product-card></app-product-card>
```

This saves development time.

---

### 2. Separation of Concerns

Angular separates:

| Layer | Responsibility |
|---|---|
| HTML | UI |
| CSS | Design |
| TypeScript | Logic |

This keeps code clean.

---

### 3. Easy Maintenance

Small components are easier to:
- Debug
- Update
- Test
- Understand

---

### 4. Better Performance

Angular updates only required components instead of reloading the entire page. This improves performance.

---

## 3. How to Create Component?

Angular CLI provides commands to generate components automatically.

---

### Create Component

```bash
ng generate component component_name

ng g c component_name
```
---

### Create Component Inside Folder

```bash
ng g c admin/dashboard
```

---

### Skip Test File

```bash
ng g c user --skip-tests
```

---

## 4. What is Component Decorator?

Angular uses decorators to add metadata. `@Component` is a decorator.

It tells Angular:

- This class is a component
- What HTML to use
- What CSS to use
- What selector to use

## How Angular Uses @Component?

When Angular application starts:

1. Angular scans decorators
2. Reads metadata
3. Creates component
4. Renders UI

---

### Syntax

```ts
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
```
---


## 1. How to Declare Variable / State in Component?

In Angular, variables are declared inside the component class. Angular uses TypeScript, so variables are declared using TypeScript syntax.


These variables store:
- Data
- State
- User information
- API responses
- Form values
---


## 2. What is Data Binding?

Data binding is a technique used in frameworks like Angular to connect your application data (component) with the user interface (HTML view) ** It keeps your data and UI in sync automatically.**

It allows communication between:
- UI and Component
- Component and UI

## Why Data Binding is Important?


Without data binding:
- You would manually update the UI when data changes
- And manually read values from the UI

With data binding:
- Changes in data reflect in UI automatically
- User actions update data automatically

## One-Way Data Binding
Data flows in one direction only — either from component → view or view → component.

1. Interpolation ({{ }})
Used to display data from the component in the HTML.
Always component → view.

2. Property Binding ([ ])
Binds a component property to an HTML element property.
Also component → view.

3. Event Binding (( ))
Sends data from the view to the component when an event occurs.
view → component

## Two-Way Data Binding
Data flows both ways (component ↔ view).

Using ngModel
Combines property binding + event binding.
Requires importing FormsModule

---

## 4 What is interpolation & how to use interpolation in angular ?

Interpolation means binding data from the component to the view (HTML) using double curly braces. The expression inside {{ }} is evaluated by Angular, and its result is displayed in the UI.



## 1 What is Directive ?

A Directive in Angular is a special instruction that helps Angular modify the behavior, appearance, or structure of HTML elements. Directives are one of the most important features of Angular because they make web pages dynamic.

Using directives, we can:
- Show or hide elements
- Repeat elements
- Change styles dynamically
- Add custom behavior
- Manipulate DOM easily

# Why Directives Are Important ?

Without directives:
- Web pages become static
- Manual DOM manipulation becomes difficult

With directives:
- UI becomes dynamic
- Angular automatically updates DOM
- Cleaner and reusable code

---

## 2 What Are Types of Directive ?

Angular mainly provides 3 types of directives.

- Component Directive | Create UI components |
- Structural Directive | Modify DOM structure |
- Attribute Directive | Change style or behavior |

---

# 1. Component Directive

A component is also a directive with its own template.

Example:

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
```

Used for:
- Pages
- Layouts
- Reusable sections

---

# 2. Structural Directive

Structural directives change the structure of the DOM.

They can:
- Add elements
- Remove elements
- Repeat elements

Examples:
- `*ngIf`
- `*ngFor`
- `*ngSwitch`

Example:

```html
<div *ngIf="showData">
  Hello Angular
</div>
```

---

# 3. Attribute Directive

Attribute directives modify:
- Style
- Color
- Classes
- Behavior

But they do NOT remove elements.

Examples:
- `ngStyle`
- `ngClass`

Example:

```html
<p [ngStyle]="{'color':'red'}">
  Angular
</p>
```

## 3 What Are Structural Directives ?

Structural directives are directives that change the DOM structure. Structural directives always use `*`.

They:
- Create elements
- Remove elements
- Repeat elements dynamically

---

# Common Structural Directives

- `*ngIf` | Show or hide element |
- `*ngFor` | Repeat element |
- `*ngSwitch` | Multiple conditions |


# Benefits of Structural Directives

- Dynamic UI rendering
- Better performance
- Less manual DOM handling
- Cleaner code

## 3 What Are Attribute Directives ?

Attribute directives are directives that modify:
- Appearance
- Style
- CSS classes
- Behavior

They work on existing HTML elements.

Attribute directives DO NOT:
- Create elements
- Remove elements

---

# Common Attribute Directives

- `ngClass` | Add/Remove CSS classes |
- `ngStyle` | Add dynamic styles |
- `formControl` | Control form fields |

---

# 1 What is Control Flow Statement ?

Control Flow Statements are used to control:
- Rendering of UI
- Execution flow
- Conditional display
- Looping of elements

In Angular, control flow statements help developers:
- Show or hide content
- Repeat elements
- Handle conditions dynamically



# Angular New Control Flow Syntax

Angular 17 introduced a new modern syntax:

- `*ngIf` | `@if` |
- `*ngFor` | `@for` |
- `*ngSwitch` | `@switch` |


```html
@if(role === 'admin') {
  <h1>Admin Panel</h1>
}
@else if(role === 'user') {
  <h1>User Dashboard</h1>
}
@else {
  <h1>Guest User</h1>
}
```
---

# 1 What is Signal ?

A Signal in Angular is a reactive state management feature introduced in Angular 16.

Signals help Angular automatically track changes and update the UI whenever data changes.

Signals are used to:
- Store reactive data
- Automatically update UI
- Improve performance
- Reduce unnecessary change detection
*** A Signal is a reactive variable that notifies Angular whenever its value changes. ***

---

# Why Signals Were Introduced ?

Before Signals:
- Angular mainly used Zone.js
- Full component change detection happened
- Performance issues in large applications

Signals solve these problems by:
- Updating only required UI
- Making Angular more reactive
- Improving performance

Features of Signals
- Reactive state
- Automatic UI updates
- Better performance
- Fine-grained reactivity
- Cleaner code


```ts
count = signal(0);
```

Signals are created using:
- `signal()`

Signals are updated using:
- `set()`
- `update()`

---

# 1 What is Linked Signal ?

A Linked Signal is a special reactive signal in Angular that creates a connection between signals.

It allows one signal to depend on another signal while still allowing manual updates.

Linked Signal is introduced in Angular Signals API to create:
- Derived reactive state
- Two-way reactive synchronization
- Smart reactive data flow

*** Linked Signal is a signal whose value depends on another signal but can also be updated manually. ***


#  Why Linked Signal is Used ?

Linked Signals are used when:
- State depends on another state
- Automatic updates are required
- Manual override is also needed

Without linked signals:
- We manually sync signals
- Duplicate logic increases
- State becomes difficult to manage

Benefits of Linked Signal
- Cleaner code
- Reactive synchronization
- Less manual updates
- Better readability
- Improved state handling


```ts
import {
  Component,
  signal,
  linkedSignal
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  count = signal(5);

  doubleCount = linkedSignal({
    source: this.count,
    computation: (value) => value * 2
  });

}
```

---

# 1 What is Routing in Angular ?

Routing in Angular is a feature that allows users to navigate between different pages/components in a Single Page Application (SPA) without reloading the browser. When the user changes the URL, Angular loads the corresponding component dynamically.

Angular Router maps a URL to a specific component.

---

# Example

| URL        | Component        |
| ---------- | ---------------- |
| `/home`    | HomeComponent    |
| `/about`   | AboutComponent   |
| `/contact` | ContactComponent |


---

# Why Routing is Important ?

Without routing:

* Entire page reloads
* Poor user experience
* Slow navigation

With Angular Routing:

* Fast navigation
* SPA behavior
* Better performance
* Better user experience

When you click:

* Home → Home screen opens
* Profile → Profile screen opens
* Settings → Settings screen opens

# Routing Flow

```text
User Clicks Link
       ↓
URL Changes
       ↓
Angular Router Checks Route
       ↓
Matched Component Loads
       ↓
Component Displays Inside router-outlet
```
---

# 2 How to Create Routes ?

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
```

---

# 3 How to Create Default Route ?

A default route loads automatically when the application starts.


```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
```

# 4 What is RouterLink ?

`RouterLink` is a directive used for navigation between routes in Angular templates.

It works like:

* HTML anchor tag
* But without page reload

# Example

```html
<nav>
  <a routerLink="/home">Home</a>

  <a routerLink="/about">About</a>

  <a routerLink="/contact">Contact</a>
</nav>
```
Benefits of RouterLink

* No page reload
* Fast navigation
* SPA behavior
* Easy routing

# RouterLink with Button

```html
<button routerLink="/home">
  Go Home
</button>
```

# Dynamic RouterLink

```html
<a [routerLink]="['/user', userId]">
  User Details
</a>
```



---
## Interview Questions
---

### 1. What is Component in Angular?

A component is the basic building block of Angular applications that controls part of the UI.

---

### 2. What is selector?

Selector is a custom HTML tag used to render a component.

---

### 3. Difference between template and templateUrl?

| template | templateUrl |
|---|---|
| Inline HTML | External HTML file |

---

### 4. Why Components are Important?

Components help in:
- Reusability
- Scalability
- Maintainability
- Better organization

---

### 5. What is Data Binding?

Data binding connects component data with HTML template.

---

### 6. Types of Data Binding in Angular?

- Interpolation
- Property Binding
- Event Binding
- Two-Way Binding

---

### 7. What is Interpolation?

Interpolation displays TypeScript data inside HTML using `{{ }}`.

---

### 8. What is Property Binding?

Property binding binds component data to HTML element properties using `[ ]`.

---

### 9. What is ngModel?

ngModel is a directive used for two-way data binding.

---

### 10. Why FormsModule is required?

FormsModule provides support for ngModel directive.

---

### 11. Difference between Property Binding and Interpolation?

| Property Binding | Interpolation |
|---|---|
| Uses [ ] | Uses {{ }} |
| Binds property | Displays text |

---

### 12. Difference Between ngClass and ngStyle

| ngClass | ngStyle |
|---|---|
| Adds CSS class | Adds inline CSS |
| Better for reusable styles | Better for dynamic values |
| Uses CSS file | Uses inline styles |

---

### 13. Difference between ngClass and class binding ?

| ngClass | class binding |
|---|---|
| Multiple classes | Single class |
| Complex conditions | Simple conditions |

---

### 14. Difference between ngStyle and style binding ?

| ngStyle | style binding |
|---|---|
| Multiple styles | Single style |
| Complex styling | Simple styling |


### 15. What is Routing in Angular ?

Routing enables navigation between components/pages in a Single Page Application without reloading the browser.

---

### 16. What is router-outlet ?

A placeholder directive where routed components are dynamically loaded.

---

### 17. What is RouterLink ?

A directive used for navigation between routes.

---

### 18. Difference between href and RouterLink ?

| href                   | RouterLink     |
| ---------------------- | -------------- |
| Reloads page           | No reload      |
| Traditional navigation | SPA navigation |
| Slower                 | Faster         |

---

### 19. What is pathMatch: 'full' ?

It tells Angular to match the complete URL path.
