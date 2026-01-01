# React Component Library

A small React component library built with **Next.js**, **TypeScript**, and **Storybook**.  
Includes reusable components: `Input`, `Toast`, and `Sidebar Menu`.

---

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/VladimirRudkovskiy/book-library.git
cd book-library
npm install
npm run storybook
```


2. Input

Supports text, password, number

Clearable input with ✕ button

Password visibility toggle 👁

Props: type, value, placeholder, clearable, onChange

3. Toast

Bottom-right notification

Auto-dismiss after duration (ms)

Types: success, error, info

Props: message, type, duration, onClose

4. Sidebar Menu

Sliding panel from right

Supports nested menus (1 or 2 levels)

Closes when overlay clicked

Props: items, open, onClose


### Input Component

![Text Input](./screenshots/text-input.png) 
![Text Input Content](./screenshots/text-input-content.png) 
![Password Input Shown](./screenshots/password-input-shown.png) 
![Password Input Hidden](./screenshots/password-input-hidden.png) 
![Clearable Input](./screenshots/clearable-input.png) 
![Cleared Input](./screenshots/cleared-input.png) 

### Toast Component

![Success Toast](./screenshots/success-toast.png) 
![Error Toast](./screenshots/error-toast.png) 
![Info Toast](./screenshots/info-toast.png) 

### Sidebar Menu

![Sidebar Level1](./screenshots/sidebar-level1.png) 
![Sidebar Level2](./screenshots/sidebar-level2.png) 
