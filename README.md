# Synapcity

## Overview

Synapcity is a modular and highly customizable application designed for seamless organization, project management, and dynamic content creation. Built with modern web technologies and guided by principles like component-driven development (CDD) and test-driven development (TDD), Synapcity empowers users to create, organize, and manage areas, pages, tasks, notes, and more, in a highly flexible and visual environment.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Progress Tracker](#progress-tracker)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Code Standards](#code-standards)
- [Ideas & Features to Implement](#ideas--features-to-implement)
- [Usage](#usage)
- [Community and Support](#community-and-support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Tech Stack

### Frontend

- [**Next.js**](https://nextjs.org/docs) (with App Router for file-based routing)
- [**TypeScript**](https://www.typescriptlang.org/docs/) (for type safety across the codebase)
- [**React**](https://react.dev/reference/react) (core library for building UI components)
- [**Zustand**](https://zustand.docs.pmnd.rs/guides/nextjs) & [**React Context**](https://react.dev/reference/react/useContext) (for state management across the application)
- [**React Query**](https://tanstack.com/query/v4/docs/framework/react/guides/ssr) / [**SWR**](https://swr.vercel.app/docs/with-nextjs) (for client-side data fetching, caching, and synchronization)

  - [How to set up React Query in Next.js](https://zustand.docs.pmnd.rs/guides/nextjs)

- [**shadcn-ui**](https://ui.shadcn.com/docs/installation/next) (UI component library for building accessible and reusable components)
- [**TailwindCSS**](https://tailwindcss.com/docs/installation) (utility-first CSS framework for responsive and maintainable styles)
- [**CSS Modules**](https://github.com/css-modules/css-modules) (for scoped and modular styling)

  - [What are CSS Modules](https://css-tricks.com/css-modules-part-1-need/)
  - [Component-Scoped Styles with CSS Modules](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/)

- [**Lexical**](https://lexical.dev/docs/intro) (rich text editor framework for dynamic content creation)

### Backend

- **Supabase** (backend-as-a-service for database, authentication, and real-time features)
- **Prisma** (ORM for interacting with the database)
- **GraphQL** (for API management; might use Apollo Server or Hasura)

- **JWT/OAuth** (authentication with JSON Web Tokens or OAuth for third-party login integrations)
- **WebSockets** (for real-time functionality and collaboration)
- **Express.js** (optional for custom backend routes or API logic, if needed)

### Database & Storage

- **PostgreSQL** (managed by Supabase, used for relational data storage)
- **Prisma Migrations** (for schema migrations and database structure management)

- **Redis** / **IndexedDB** (for caching)

### Testing Tools

- **Jest** (for unit testing and test-driven development)
- **Cypress** (for end-to-end testing)
- **React Testing Library** (for component-level testing)

- **Storybook** (for isolated UI component development and testing)

### Development Environment

- **Docker** (for containerization; local development or deployment)
- **Vercel** (for deployment, automatically integrates with Next.js)

- **Prisma Studio** (for managing and interacting with the database)

### Development Tools

- [**ESLint**](https://nextjs.org/docs/app/api-reference/config/eslint) (for static code analysis and enforcing coding standards)
- [**Prettier**](https://prettier.io/docs/en/) (for code formatting consistency)
- [**Husky**](https://typicode.github.io/husky/) (for Git hooks, such as pre-commit, pre-push hooks, and enforcing code quality and formatting)
- [**lint-changed**](https://github.com/artsy/lint-changed) (for linting only the files that have changed, ensuring faster linting and reducing unnecessary checks)

- **GitHub Actions** (for CI/CD workflows and automating tests/deployment)

### Performance & Optimization

- **Lazy Loading & Code Splitting** (using Next.js dynamic imports, for improved performance)

- **Image Optimization (Next.js)** (automatic image optimization, built into Next.js)
- **Cloudinary / Imgix** (for advanced image and media optimization)

- **Sentry** (for error tracking and performance monitoring)
- **PWA (Progressive Web App)** (for offline support and better mobile experience)

### Real-Time & Collaboration

- **Socket.io** (custom WebSocket server for real-time collaboration)
- **Supabase Realtime** (real-time functionality for live updates, built-in with Supabase)

- **GraphQL Subscriptions** (real-time updates and subscriptions)

### Version Control & Deployment

- **Git** (for version control)
- **GitHub** (for repository hosting and collaboration)

- **Vercel** (for automatic deployment from GitHub, optimized for Next.js)
- **CircleCI** / **Travis CI** (for custom CI/CD pipelines)

### Monitoring & Analytics

- **Google Analytics** (for tracking user interactions and behavior)
- **Mixpanel** (for detailed user engagement and analytics)

- **LogRocket** (for session replay and debugging)
- **Sentry** (for error and performance monitoring)

### Documentation & Collaboration

- **Markdown** (for project documentation)
- **Notion** / **Confluence** (for knowledge management and project management)

- **Swagger** / **Postman** (for documenting and testing APIs)

---

## Progress Tracker

### Milestones

#### **Planning & Setup**

- [ ] **Confirm tech stack:** Next.js, TypeScript, TailwindCSS, etc.
- [ ] **Set up the development environment** (Version control, CI/CD, Project structure)
- [ ] **Create wireframes/UI design** for initial pages (Home, Projects, Areas)
- [ ] **Basic UI Layout**: Set up the navigation, sidebar, and responsive design.

### In Progress

- [ ] **Set up**:

  - [ ] **Development Environment**: Next.js, TypeScript, TailwindCSS, ESLint, and Prettier.
    - [x] Initialize with Next.js, TypeScript, TailwindCSS
    - [x] Install and configure ESLint, Prettier, Husky, `lint-changed`
    - [x] Install and configure TailwindCSS, `postcss`, `auto-prefixer`, `shadcn-ui`
  - [ ] **Basic project structure:**

    - [ ] **Development Environment**: Next.js, TypeScript, TailwindCSS, ESLint, and Prettier.
    - [ ] **Basic project structure:**

  - [ ] **Development Environment**: Next.js, TypeScript, TailwindCSS, ESLint, and Prettier.
    - [x] Initialize with Next.js, TypeScript, TailwindCSS
    - [x] Install and configure ESLint, Prettier, Husky, `lint-changed`
    - [x] Install and configure TailwindCSS, `postcss`, `auto-prefixer`, `shadcn-ui`
  - [ ] **Basic project structure:**

                            ```md
                            src/
                            app/
                            notes/
                            components/
                            [id]/
                            layout.tsx
                            page.tsx
                            components/
                            stores/
                            NotesStore.ts
                            layout.tsx
                            page.tsx
                            components/
                            layout.tsx
                            page.tsx
                            shared/
                            components/
                            contexts/
                            hooks/
                            lib/
                            prisma/
                            schema.prisma
                            seed.mjs
                            client.mjs
                            supabase/
                            client.ts
                            server.ts
                            middleware.ts
                            styles/
                            globals.css
                            stores/
                            UIStore.ts
                            utils/
                            eslint.config.mjs
                            middleware.ts
                            next.config.ts
                            postcss.config.mjs
                            tailwind.config.ts
                            tsconfig.json
                            ```

  - [ ] **TDD/CDD:**
    - [ ] Jest
    - [ ] Cypress
    - [ ] React Testing Library
    - [ ] Storybook

### Completed Features

- [x] **Define scope and goals**: Documented in README.

### Ideas & Future Tasks

- [ ] **Deployment**: Deploy the app on Vercel or another platform, set up CI/CD pipeline.
- [ ] **Area Creation Functionality**: Implement UI and logic for adding Areas and Pages.
- [ ] **Library System**: Develop basic folder and file organization features.
- [ ] **Dynamic Content Management**: Implement Areas, Pages, and Library System for content organization.
- [ ] **Advanced Block System**: Develop blocks, widgets, and tabbed views.
- [ ] **Smart Information Management**: Implement tagging, search, and linking functionality.
- [ ] **Interactive UI**: Build visual indicators, flexible layouts, and accessibility features.
- [ ] **Version Control & Integration**: Integrate with version control and third-party tools like Notion.

### Bugs/Issues Fixed

---

## Roadmap

### Phase 1: Planning & Setup

- **Define project scope and goals**
- **Choose tech stack**: Next.js, TypeScript, TailwindCSS
- **Create wireframes/UI design** for initial pages (Home, Projects, Areas)
- **Set up the development environment** (Version control, CI/CD, Project structure)
- **Basic UI**: Set up the navigation, sidebar, and responsive design.

### Phase 2: Core Features Development

- **Dynamic Content Management**: Develop Areas, Pages, Library System.
- **Advanced Block System**: Blocks for text, tasks, code snippets.
- **Interactive UI**: Add visual indicators and flexible layouts.
- **Tagging & Search**: Implement basic search and categorization of notes, tasks, and files.

### Phase 3: Advanced Features & Integration

- **Version Control Integration**: Implement version tracking for pages and tasks.
- **Third-party Integrations**: Sync with Notion, Google Drive, etc.

### Phase 4: Finalization & Deployment

- **Testing**: Ensure functionality and UI are solid (Jest, Cypress).
- **Deployment**: Deploy to Vercel, set up CI/CD.
- **Documentation**: Update README and user guides.

### Stretch Goals

- Enhanced AI-powered suggestions for organization and task prioritization.
- Mobile and tablet-friendly interfaces.
- Advanced analytics and reporting.

### Long-Term Vision

- Seamless cross-platform synchronization.
- Open API for developer extensions.

---

## Contributing

### Guidelines

Fork the repository and create a new branch:

```bash
  git checkout -b feature/your-feature-name
```

Commit your changes with meaningful messages:

```bash
  git commit -m "feat: Add new feature"
```

Push the branch and create a pull request:

```bash
  git push origin feature/your-feature-name
```

---

## Code Standards

- **TypeScript**: Follow best practices for types and interfaces.
- **React**: Adhere to React component structure (Functional components, hooks).
- **TailwindCSS**: Use utility-first classes for fast styling.
- **Testing**: Write tests for every new feature using Jest and Cypress.

---

## Ideas & Features to Implement

### Dynamic Content Management

- **Areas & Pages:** Organize information into customizable areas and pages for specific projects or themes.
- **Library System:** Maintain categorized libraries for each area or a unified main library.
- **File Organization:** Use folders and categories to store and retrieve files efficiently.

### Advanced Block System

- **Blocks & Widgets:** Add dynamic blocks for various elements, including notes, code snippets, tasks, and links.
- **Tab Menus:** Use tabbed views for multiple layouts or types of information within a file.

### Smart Information Management

- **Tagging and Search:** Effortlessly find and categorize notes, tasks, and files.
- **Associative Linking:** Connect pages, blocks, and code snippets to create an interconnected workspace.
- **Automatic Contextualization:** Enable auto-association of resources like folders and snippets within new projects.

### Interactive and Intuitive UI

- **Visual Indicators:** Enhance navigation with link indicators, pinned blocks, and status highlights.
- **Flexible Layouts:** Transform block types dynamically and adapt the UI to your needs.
- **Accessibility Features:** Designed for inclusive use with robust accessibility standards.

### Interactive and Visual Tools

- **Notes Categorization:** Organize notes with tags, subtitles, and task associations.
- **Linked Data:** Seamlessly associate notes, code snippets, and other content.
- **Dynamic Visualization:** Visual indicators for linked elements and previews in the side panel.

### Accessibility & Responsiveness

- Designed for accessibility, adhering to the latest ARIA and WCAG standards.
- Fully responsive layout, ensuring usability across devices and screen sizes.

### Collaboration & Integration

- **Version Control:** Keep track of drafts and research efficiently.
- **Code Snippet Management:** Include detailed guides or notes for breakdowns.
- **Notion:** Integrate with existing Notion workspace to synchronize data between platforms.
- **Cross-Platform Sync:** Sync data in real-time across devices (mobile, desktop) with an API backend.
- **Custom Plugins:** Allow users to create custom blocks/widgets using a plugin system (consider using Web Components for flexibility).

## Development and Deployment

- **Modern Tech Stack:** Built with Next.js, TypeScript, TailwindCSS, Prisma, Supabase, and Vercel.
- **Component-Driven Development:** Implements reusable and modular components for maintainability and scalability.
- **Testing and Quality Assurance:** Write unit and integration tests for every new feature.
  - Use Jest for unit testing, React Testing Library for component tests, and Cypress for end-to-end tests.

---

## Usage

### Key Sections

- **Home:** Overview of projects and areas.
- **Projects:** Track progress and manage tasks.
- **Areas:** Dedicated workspaces for focused productivity.
- **Resources:** Centralized library of files, notes, and snippets.
- **Archives:** Safely store completed projects and notes.

### Customization

- Use the Design System to adjust themes and layouts.
- Extend functionality with plugins and custom widgets.

### Adding Areas and Pages

- Navigate to the Areas section.
- Create a new area and specify its purpose.
- Add pages within the area, defining layouts and linking relevant content.

### Managing Files and Libraries

- Open the Library section.
- Create folders and organize files based on categories.
- Use tab menus to switch between views or layouts.

### Linking Blocks and Notes

- Use the Blocks feature to create tasks, notes, and widgets.
- Link blocks to pages or other blocks dynamically.
- Visualize links using the side panel with colored indicators.

### Integration

- Integrate third-party tools like Google Drive, GitHub, and Notion.
- Export/import data for seamless transitions.

---

## Community and Support

- **Issues and Bugs:** Report issues on GitHub.
- **Support:** Contact via email at <synapcity.dev@gmail.com>

---

## License

Synapcity is licensed under the MIT License. Feel free to use, modify, and distribute this software with attribution.

---

## Acknowledgements

- Built using cutting-edge web technologies.
- Inspired by productivity tools and modular design systems, such as Notion and Obsidian.
- Also inspired by "The Second Brain" and PARA organizational systems created and established by Tiago Forte.
