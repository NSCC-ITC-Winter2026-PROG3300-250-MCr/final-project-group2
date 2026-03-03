Project Charter  
Note

The full project charter along with approval signature can be found in the Documents directory

Status: APPROVED

PROG3300 – Integrated Project for Programming  
Group 2 – Winter 2026

---

## Development (pnpm)

### Install dependencies
pnpm install

### Run lint
pnpm lint

### Fix lint issues (auto-fix)
pnpm lint:fix

### Run tests
pnpm test

### Watch tests (keep running while you code)
pnpm test:watch

### Verify (lint + tests)
pnpm verify

---

## 1. Project Purpose & Background

### Project Title
Tallow Bliss Skincare Website Redesign & Modernization

### Background
Tallow Bliss Skincare is a small skincare business located in Antigonish, Nova Scotia. The business currently operates with a website built using the Webador platform. While functional, the current website does not fully reflect modern UI/UX standards and presents opportunities for improved design, performance, maintainability, and structured development practices.

The client has recently experienced a family loss and requires support in redesigning and modernizing her website to better represent her brand while maintaining operational continuity.

As outlined in the PROG3300 Project Description, the objective of this course project is to build a fully functioning website using proper collaborative software development practices, Agile methodology, CI/CD pipelines, and comprehensive unit testing.

This project will deliver a professionally redesigned frontend website with meaningful coded functionality beyond static HTML/CSS, while fully implementing collaborative Git workflows and DevOps automation.

---

## 2. Objectives / Desired Outcomes
The primary objectives of this project are:

### Business Objectives
- Deliver a modern, professional website redesign aligned with the client’s brand.
- Improve visual appeal, usability, and accessibility.
- Provide a maintainable, scalable frontend architecture.
- Ensure compatibility with the client’s existing ecommerce/payment infrastructure (Webador or alternative integration).
- Deploy a production-ready site to a hosting platform (e.g., Netlify or equivalent).

### Academic / Technical Objectives
- Implement Agile development with three 2-week Sprints.
- Utilize GitHub collaborative workflows with Pull Requests for all changes.
- Maintain a GitHub Projects Kanban board.
- Implement CI/CD using GitHub Actions.
- Write comprehensive unit tests for all core functions.
- Maintain structured documentation:
  - Project Charter
  - Requirements Document
  - JSDoc-generated documentation
- Conduct a live deployment demonstration during final presentation.

---

## 3. Scope Overview

### In Scope
- Complete frontend redesign of the Tallow Bliss Skincare website.
- Responsive UI design (desktop, tablet, mobile).
- Implementation of at least one significant coded feature beyond static markup (e.g., dynamic product rendering, filtering, search, contact form validation, cart preview logic, etc.).
- Unit testing for all core JavaScript functions.
- CI/CD workflow using GitHub Actions.
- Deployment to hosting platform.
- Agile tracking via GitHub Projects.
- Documentation and presentation materials.

### Potential Enhancements (If Time Permits)
- Product filtering/search functionality.
- Newsletter signup with validation.
- SEO optimization improvements.
- Performance optimization.
- Analytics integration.

### Out of Scope
- Full backend replacement of Webador (unless approved by instructor).
- Payment gateway reimplementation.
- Complex inventory management systems.
- Ongoing post-course maintenance.

---

## 4. Key Stakeholders

Stakeholder | Role | Interest
---|---|---
Michael Crocker | Instructor / Client Representative | Academic oversight, project approval
Tallow Bliss Skincare Owner | Real-World Client | Website redesign, brand alignment
Group 2 Members | Development Team | Project execution & deliverables
NSCC PROG3300 Program | Academic Stakeholder | Demonstration of Agile & DevOps practices

---

## 5. Roles & Responsibilities

### Project Manager — Shayne McNeil
Responsibilities:
- Schedule and facilitate team meetings
- Maintain Project Charter and Requirements Document
- Manage GitHub Projects Kanban Board
- Assign tasks to team members
- Ensure Sprint planning and reviews occur
- Coordinate final presentation materials

### DevOps Engineer — Aaron Hirtle
Responsibilities:
- Maintain Upstream repository
- Configure GitHub Actions CI/CD workflow
- Enforce Pull Request procedures
- Integrate automated testing into workflow
- Oversee deployment pipeline

### Product Owner — Amelia MacDonald
Responsibilities:
- Serve as the primary point of contact between the development team and the client
- Gather initial business requirements from the client
- Clarify the client’s goals, priorities, and expectations
- Translate client needs into clear, actionable requirements
- Create and maintain the product backlog
- Prioritize backlog items based on business value
- Communicate requirement changes to the team promptly
- Ensure all requirements are well-defined before Sprint planning
- Validate that completed features meet client expectations
- Schedule and facilitate client feedback sessions
- Document client feedback and requested changes
- Manage scope to prevent uncontrolled feature creep
- Confirm branding elements (colors, typography, imagery) with the client
- Approve UI/UX mockups before development begins
- Ensure business objectives remain aligned throughout development
- Review Sprint deliverables before presentation to the client
- Communicate timeline expectations and progress updates to the client
- Help resolve requirement ambiguities quickly
- Ensure acceptance criteria are clearly defined for each feature
- Sign off on features once acceptance criteria are met
- Assist with preparation for Sprint reviews involving the client
- Confirm final product readiness before deployment
- Maintain documentation of all client communications

### Developers
- Amelia MacDonald – Lead Developer
- Hudson Latimer – Developer
- David Comeau – Developer
- Morgan Perry – Developer

Responsibilities:
- Implement frontend features
- Write unit tests for implemented functionality
- Submit all changes via Pull Requests
- Follow Git collaborative best practices
- Document code using JSDoc
- Participate in Sprint reviews and demos

---

## 6. High-Level Timeline & Milestones
The project will follow Agile methodology with three 2-week Sprints, as required.

### Pre-Sprint Phase (Week 1)
- Project idea approval
- Role assignments
- Upstream access granted
- Project Charter submission

### Sprint 1 (Weeks 2–3)
Focus: Foundation & Core Structure

Milestones:
- Finalize Requirements Document
- Establish project architecture
- Implement base UI layout
- Configure repository structure
- Setup CI/CD pipeline
- Implement initial unit testing framework
- Sprint 1 Review with Instructor

### Sprint 2 (Weeks 4–5)
Focus: Core Features & Functionality

Milestones:
- Implement dynamic coded feature(s)
- Develop responsive design
- Expand test coverage
- Refine UI/UX
- Midpoint deployment preview
- Sprint 2 Review with Instructor

### Sprint 3 (Weeks 6–7)
Focus: Refinement, Testing & Deployment

Milestones:
- Finalize all features
- Complete comprehensive unit tests
- Optimize performance
- Complete documentation
- Final deployment
- Presentation preparation
- Final Presentation & Demonstration

---

## 7. Assumptions, Constraints, and Risks

### Assumptions
- Client will provide necessary branding materials (logos, images, product details).
- Webador integration access is available if required.
- Team members will meet regularly and adhere to Agile workflow.

### Constraints
- Three 2-week Sprint timeline.
- Academic calendar deadlines.
- Limited scope appropriate for course timeframe.
- Only Project Manager and DevOps Engineer have elevated repository permissions.

### Risks
Risk | Impact | Mitigation
---|---|---
Platform integration challenges | Medium | Early investigation during Sprint 1
Time constraints | High | Strict scope control
CI/CD configuration delays | Medium | DevOps setup early in Sprint 1
Uneven workload distribution | Medium | PM oversight and Kanban tracking

