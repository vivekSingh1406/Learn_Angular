# 🔗 Angular Data Binding

## 📌 Description

Data Binding in Angular is a way to connect the **component (TypeScript)** with the **template (HTML)**.
It allows data to flow between the application logic and the UI automatically.

👉 In simple words:
**Data Binding = Communication between TS ↔ HTML**

---

## 🎯 Why Use Data Binding?

* Display data in UI
* Handle user input
* Keep UI and data synchronized
* Reduce manual DOM manipulation

---

## 🔥 Types of Data Binding

---

### ✅ 1. Interpolation (TS → HTML)

Used to display data in HTML.

```html
<p>{{ name }}</p>
```

```ts
name = "Vivek";
```

---

### ✅ 2. Property Binding (TS → HTML)

Used to bind values to HTML properties.

```html
<button [disabled]="isDisabled">Click</button>
<img [src]="imageUrl">
```

```ts
isDisabled = true;
imageUrl = "image.png";
```

---

### ✅ 3. Event Binding (HTML → TS)

Used to handle user events.

```html
<button (click)="increment()">Increment</button>
```

```ts
increment() {
  console.log("Clicked");
}
```

---

### ✅ 4. Two-Way Binding (TS ↔ HTML)

Used for syncing data between UI and component.

```html
<input [(ngModel)]="name">
<p>{{ name }}</p>
```

```ts
name = "";
```

---

## 🚨 Important Note

To use `ngModel`, import FormsModule:

```ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule {}
```

---

## 💡 Example (All Together)

### app.component.ts

```ts
export class AppComponent {

  name = "Vivek";
  count = 0;
  isDisabled = false;

  increment() {
    this.count++;
  }

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

}
```

---

### app.component.html

```html
<h2>Hello {{ name }}</h2>

<input [(ngModel)]="name">

<p>Count: {{ count }}</p>

<button (click)="increment()">Increment</button>

<button [disabled]="isDisabled">Test Button</button>

<button (click)="toggleButton()">Enable/Disable</button>
```

---

## 🧠 Summary

| Type             | Syntax | Direction |
| ---------------- | ------ | --------- |
| Interpolation    | {{ }}  | TS → HTML |
| Property Binding | [ ]    | TS → HTML |
| Event Binding    | ( )    | HTML → TS |
| Two-way Binding  | [( )]  | TS ↔ HTML |

---

## 🚀 Conclusion

Data Binding is a core feature of Angular that helps build dynamic and interactive applications easily by connecting logic and UI seamlessly.

---
