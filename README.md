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


1. Input

Supports text, password, number

Clearable input with ✕ button

Password visibility toggle 👁

Props: type, value, placeholder, clearable, onChange

2. Toast

Bottom-right notification

Auto-dismiss after duration (ms)

Types: success, error, info

Props: message, type, duration, onClose

3. Sidebar Menu

Sliding panel from right

Supports nested menus (1 or 2 levels)

Closes when overlay clicked

Props: items, open, onClose


### Input Component

![Text Input](<img width="647" height="571" alt="Image" src="https://github.com/user-attachments/assets/a83cccda-f8fd-4d83-9234-0a03f0f481ac" />)
![Text Input Content]<img width="646" height="571" alt="Image" src="https://github.com/user-attachments/assets/d67d091e-b829-46e3-92b5-2915eeb1c5e7" />
![Password Input Shown]<img width="648" height="570" alt="Image" src="https://github.com/user-attachments/assets/3386cdc7-5d05-40ba-a358-bacae335d93f" />
![Password Input Hidden]<img width="647" height="570" alt="Image" src="https://github.com/user-attachments/assets/06556160-77ee-4114-b9ed-35968cc7a6a3" />
![Clearable Input]<img width="647" height="571" alt="Image" src="https://github.com/user-attachments/assets/f1a95254-77ba-4fe6-b606-edeae8a2bd79" />
![Cleared Input]<img width="647" height="571" alt="Image" src="https://github.com/user-attachments/assets/72e46ec5-6a87-47d3-9f6f-6b9bf5592c18" />

### Toast Component

![Success Toast]<img width="646" height="570" alt="Image" src="https://github.com/user-attachments/assets/c9b8899a-7019-4f9f-803e-682f5f6003ac" />
![Error Toast]<img width="647" height="569" alt="Image" src="https://github.com/user-attachments/assets/3d889171-294f-49ac-b3c5-24c60d5595c0" />
![Info Toast]<img width="647" height="570" alt="Image" src="https://github.com/user-attachments/assets/743987f5-edae-4c5d-ac90-cc2aafca47a9" />

### Sidebar Menu

![Sidebar Level1]<img width="648" height="571" alt="Image" src="https://github.com/user-attachments/assets/51f6d0be-849a-42ae-8eaf-a0252b348866" />
![Sidebar Level2]<img width="647" height="570" alt="Image" src="https://github.com/user-attachments/assets/58959f55-b553-461c-bc65-2a9bcba51736" />
