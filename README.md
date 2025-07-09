
# 📦 Exclusive Packages – Next.js Project

This project implements the "Exclusive Packages" UI component using Next.js 14 (App Router), SCSS modules, RTK Query, and a modular architecture based on features.

---

## 🚀 Getting Started

1. **Clone the repository:**

   2. **Install dependencies:**

    `npm i`

3. **Start the development server:**

    `npm run dev`

4. **Visit** http://localhost:3000

## 📂 Project Structure



<pre>
src/
 │── app/                           		# App Router (Next.js 14)
 │   │── layout.tsx              		# Global layout
 │   │── page.tsx                		# Home page
 │   │── globals.scss            		# Global styles
 │   └── providers/              		# React providers
 │── components/                 		# Shared reusable components
 │── UI/                         		# UI elements (e.g., buttons)
 │   └── CommonButton.tsx
 │── features/
 │   └── exclusive-packages/
 │        │── components/         		# Feature-specific components
 │        └── types.ts            		# Feature types
 │── shared/
 │   └── api/                    		# RTK Query API endpoints and dummy data for cards
 │        │── dataApi.ts
 │        └── postsApi.ts
 │── const/                      		# Project-wide constants
 │── store/
 │   └── store.ts                		# Redux store config
 │── types/                      		# Global types
 │── styles/
 │   │── global/
 │   │   │── _variables.scss     		# SCSS variables
 │   │   └── _mixins.scss        		# SCSS mixins
 │   └── *.scss                  		# Component styles
</pre>

## 🛠️ Used Technologies


| Package                                                | Purpose                     |
| ------------------------------------------------------ | --------------------------- |
| `next`                                                 | Framework                   |
| `react`,`react-dom`                                    | UI rendering                |
| `sass`                                                 | SCSS support                |
| `react-icons`                                          | Icon library                |
| `@reduxjs/toolkit`                                     | Modern Redux implementation |
| `react-redux`                                          | Redux bindings for React    |
| `@tanstack/react-query`or `@reduxjs/toolkit/query`     | Data fetching               |
| `typescript`                                           | Type safety                 |
| `eslint`                                               | Code linting                |
