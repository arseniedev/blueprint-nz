# Prostate Care | Aotearoa
![Astro](https://img.shields.io/badge/AstroJS-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Design Thinking](https://img.shields.io/badge/Design_Thinking-%231F67CC.svg?style=for-the-badge&logo=adobexd&logoColor=white)

> BCDE311 - Software Development Project
> 
>  A community-focused website remake for Prostate Cancer NZ, as part of the **BCDE311 - Software Development Project** course. This app is built with TypeScript, designed to help users build consistent habits through structured tracking, intelligent reminders, and actionable insights. 

---
## Overview
Prostate Care is an informational and resource platform designed to support individuals affected by prostate cancer in New Zealand. The site aims to provide reliable guidance, raise awareness, and connect users with helpful resources and support networks.
This project demonstrates full-stack development using modern web technologies, accessibility best practices, and responsive design principles.

[![Live Demo](https://img.shields.io/badge/Netlify-Live%20Demo%20-181717?style=for-the-badge&logo=netlify&labelColor=080182)](https://blueprintnz.netlify.app/)

## Wiki [→](https://github.com/arzenikos/prostate-care/wiki)
- **[Iterations](https://github.com/arzenikos/prostate-care/wiki/Development-Iterations)**
- **[Figma Prototype](https://www.figma.com/design/fCs420IxnIJFJ5a36LEQdp/DesignThinkingProjects--Copy-?node-id=2012-192&t=OKl2kRrYhCOtsRTu-1)**
- **[PDF Wireframe Diagram](https://github.com/arseniedev/prostate-care/tree/docs/assets/diagrams/prostate-care-diagram.pdf)**
- **[Emerge Poster](https://github.com/arseniedev/prostate-care/tree/docs/assets/documents/emerge-poster.pdf)**
- **[Short Paper](https://github.com/arseniedev/prostate-care/tree/docs/assets/documents/citrenz-short-paper.pdf)**

---
## Features
- Informational Pages: Clear, structured content on prostate cancer awareness, symptoms, treatment options, and support services.
- Responsive Design: Optimized for mobile, tablet, and desktop screens.
- Fast & Lightweight: Built with Astro for minimal client-side JavaScript and high performance.
- Accessibility-Focused: Ensures inclusive navigation for all users.
- Deployment: Seamlessly hosted on Netlify with automated CI/CD.

## Project Structure

<!-- README_TREE:START -->
```
./
├─ public/           # Static assets (images, icons)
├─ src/
│  ├─ assets/        # Boilerplate assets
│  ├─ components/    # Reusable UI components
│  ├─ content/       # Blog content (in Markdown format) 
│  ├─ layouts/       # Page layouts
│  ├─ pages/         # Route-based pages
│  └─ styles/        # Global and component styles
├─ package.json
├─ tsconfig.json
└─ astro.config.mjs
```
<!-- README_TREE:END -->

---
## Installation

### 1. Clone the repository

```bash
git clone https://github.com/arzenikos/prostate-care.git
```

### 2. Install dependencies

```bash
cd prostate-care
pnpm install
```

### 3. Copy assets to `public/`

```bash
cp -r src/assets/ public/assets/
```

### 4. Start local development server

```bash
pnpm run dev
```

---
## Deployment
The site is deployed on Netlify for easy hosting and continuous deployment:
1. Connect your GitHub repo to Netlify.
2. Configure build settings:
   - Build command: npm run build
   - Publish directory: dist/
3. Automatic redeploy on every push to the main branch.

---


> [!WARNING]
> ## Important Notice: Academic Integrity
> **BCDE311 - Software Development Project**
> 
> This portfolio contains original work completed as part of my BCDE311 - Software Development Project course at Ara Institute of Canterbury. I do not condone plagiarism or academic misconduct in any form. This project is for academic purposes only and is not intended to be copied or used without proper authorisation.
> The university has a STRICT policy on academic misconduct, and I fully support this policy. Any attempt to plagiarize, copy, or use this work as your own will result in serious consequences. Please respect academic integrity and do not attempt to pass off this work as your own.
>
> ## **Disclaimer**
> All the content presented here is the result of my own individual work, and any resemblance to other works is purely coincidental. If you are a student, please refrain from using or copying this work in any way that violates the principles of academic honesty and integrity.

