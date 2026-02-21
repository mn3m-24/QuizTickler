# 📝 QuizTickler

> **Quiz app for the cool kids.**  
> A sleek, high-performance trivia experience powered by the Open Trivia API.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://quiz-tickler.vercel.app/)
[![GitHub stars](https://img.shields.io/github/stars/mn3m-24/QuizTickler?style=for-the-badge)](https://github.com/mn3m-24/QuizTickler/stargazers)

---

## 🚀 Overview

**QuizTickler** is a modern React application that turns the [Open Trivia Database](https://opentdb.com) into a fast, interactive quiz experience. It focuses on clean UI, robust state management, and a seamless "app-like" feel using industry-standard tools.

### Key Features
- 🎭 **Dynamic Categories:** Fetch and play quizzes across multiple genres.
- ⏱️ **Real-time Scoring:** Track your progress as you play.
- ⚡ **Lightning Fast:** Powered by Vite for instant HMR and optimized builds.
- 🎨 **Sleek UI:** Fully responsive design with a "cool kids" aesthetic.
- 🧩 **Skeleton Loaders:** Custom loading states for a smoother perceived performance.
- 🔔 **Smart Notifications:** Error handling and feedback via Sonner toast messages.

---

## 🛠️ Tech Stack

### Frontend Core
- **Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
- **Icons/UI:** Custom Skeleton components for premium UX.

### State & Data Management
- **Global State:** [Zustand](https://zustand-demo.pmnd.rs/) — Lightweight, centralized state (migrated from `useContext` for better performance and scalability).
- **Server State:** [useSWR](https://swr.vercel.app/) — Handles data fetching, caching, and revalidation automatically.

### Tooling & DX
- **Build Tool:** Vite
- **Package Manager:** pnpm
- **Linter:** ESLint
- **Formatter:** Prettier
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) (Beautiful toast components)

---

## 📂 Project Structure

```text
src
├── api
│   ├── use-categories.ts
│   └── use-questions.ts
├── App.tsx
├── components
│   ├── categories.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── question-card.tsx
│   ├── quiz-form.tsx
│   ├── quiz-navigation.tsx
│   ├── quiz-pagination.tsx
│   ├── quiz-timer.tsx
│   ├── review-question.tsx
│   ├── submit-modal.tsx
│   ├── theme-toggle.tsx
│   └── ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── modal.tsx
│       ├── progress-bar.tsx
│       └── skeleton.tsx
├── hooks
│   ├── use-countdown.ts
│   ├── use-quiz-flow.ts
│   └── use-theme.ts
├── lib
│   └── fetcher.ts
├── main.tsx
├── pages
│   ├── quiz-page.tsx
│   ├── result-page.tsx
│   └── start-page.tsx
├── store
│   └── use-quiz-store.ts
├── style.css
├── types
│   ├── api.ts
│   ├── question.ts
│   └── quiz.ts
└── utils
    ├── cn.ts
    ├── create-url.ts
    ├── decode-html.ts
    ├── format-time.ts
    └── normalize-questions.ts

```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mn3m-24/QuizTickler.git
   cd QuizTickler
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

---


## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/mn3m-24/QuizTickler/issues).

## 📄 License
This project is open-source. Feel free to use it as a template for your own cool projects!

---

### Developed with ❤️ by [mn3m-24](https://github.com/mn3m-24)
