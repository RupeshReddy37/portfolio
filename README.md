# Lomada Rupesh Reddy - Premium Engineering Portfolio

A world-class, premium personal portfolio website built to position Lomada Rupesh Reddy as a Software Engineer specializing in Java Backend Systems and AI-Powered Applications. The design prioritizes an engineering-focused experience, communicating technical depth, backend architecture, and problem-solving capability.

## Technology Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Lucide React & React Icons
- **Utility:** `clsx` and `tailwind-merge` for scalable UI primitives

## Features & Architecture

- **SaaS Aesthetic:** Inspired by modern developer platforms like Vercel and Linear, featuring clean typography, deliberate spacing, and minimal glassmorphism.
- **Dedicated Project Pages:** Detailed case studies for enterprise projects, replacing simple cards with comprehensive problem/solution/architecture breakdowns.
- **Modular UI Library:** Custom-built UI primitives (`Button`, `Card`, `Badge`, `SectionHeading`) allowing maintainable and consistent design.
- **Scroll-triggered Animations:** Elegant, performant entrance animations utilizing Framer Motion.
- **Fully Responsive:** Mobile-first architecture ensuring perfect scaling across all devices.

## Getting Started

1. **Install Dependencies:**
   ``bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Run Project Checks:**
   ```bash
   npm run check
   ```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). A `vercel.json` configuration file is included to properly route all requests to `index.html`, allowing React Router to manage the application state seamlessly.

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Vite environment and configure the build settings.
3. Deploy!

## Resume Updates

The portfolio uses `public/resume.pdf` for every resume button. To update the resume later, replace that file with a new PDF using the same filename. If you want to change the URL, update `resumeUrl` in `src/constants/profile.ts`.

## License

MIT License
