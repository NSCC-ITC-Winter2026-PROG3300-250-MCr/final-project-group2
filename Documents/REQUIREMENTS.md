## ℹ️ General Info

**Project:** Tallow Bliss Skincare Website Redesign  
**Course:** PROG3300 – Integrated Project for Programming  
**Group:** 2  
**Project Manager:** Shayne McNeil  
**DevOps Engineer:** Aaron Hirtle
**Product Owner/Lead Developer**: Amelia MacDonald

## ⏰ Version History 

| Version | Approved By     | Revision Date     | Description   | Approved By                                                       | Author          |
| ------- | --------------- | ----------------- | ------------- | ----------------------------------------------------------------- | --------------- |
| 1.0.0   | Project Manager | February 17, 2026 | First version | Project Manager, DevOps Engineer, Product Owner, Development Team | Project Manager |
| 1.1.0   | Client          | February 28, 2026 | First Version | Requirements reviewed by client and formally finalized            | Amelia MacDonald|
|         |                 |                   |               |                                                                   |                 |
|         |                 |                   |               |                                                                   |                 |
|         |                 |                   |               |                                                                   |                 |


## 1️⃣ Product Overview

## 1.1 Purpose

This project will redesign and modernize the frontend website for Tallow Bliss Skincare (Antigonish, NS). The product will deliver:

- A modern, responsive, professional user interface
- Improved usability and accessibility
- A structured, maintainable codebase
- CI/CD pipeline with automated testing
- Deployment to a public hosting platform

The solution must meet course requirements including Agile development, proper Git workflows, comprehensive unit testing, and documented CI/CD automation

## 2️⃣ Business Requirements

These requirements define **why** the project exists and what business outcomes must be achieved.

### BR-1: Modern Brand Representation

**Requirement:**  
The website must visually align with the Tallow Bliss Skincare brand identity.

**Success Criteria:**

- Consistent color palette
- Professional typography
- High-quality imagery
- Clean layout

**Tasks:**

- Define brand color system
- Define typography system
- Create UI design mockups
- Client approval of visual direction

### BR-2: Improve User Experience (UX)

**Requirement:**  
Users must be able to easily navigate products and information.

**Success Criteria:**

- Clear navigation structure
- Logical page hierarchy
- Simple checkout/product access pathway (if integrated)

**Tasks:**

- Create site map
- Implement navigation component
- Conduct internal UX review
- Adjust navigation based on feedback

### BR-3: Production Deployment

**Requirement:**  
The website must be deployed to a public hosting platform for final presentation.

**Success Criteria:**

- Live URL accessible
- CI/CD pipeline auto-deploys on merge to main

**Tasks:**

- Configure hosting (Netlify or equivalent)
- Configure auto-deployment
- Test production build

### BR-4: Maintainability & Scalability

**Requirement:**  
The codebase must be structured for future modifications.

**Success Criteria:**

- Modular components
- Clear folder structure
- Documented functions

**Tasks:**

- Define project architecture
- Implement modular folder structure
- Add JSDoc to all functions

## 3️⃣ Functional Requirements

These describe **what the system must do**.

### FR-1: Responsive Layout

**Requirement:**  
The website must adapt to desktop, tablet, and mobile screen sizes.

**Acceptance Criteria:**

- No layout breakage on common resolutions
- Navigation collapses appropriately on mobile

**Tasks:**

- Implement responsive grid system
- Add mobile navigation toggle
- Test breakpoints
- Write layout validation checklist

### FR-2: Dynamic Product Rendering

**Requirement:**  
Products must be rendered dynamically via JavaScript (not hardcoded HTML).

**Acceptance Criteria:**

- Product data stored in structured format (JSON or JS object)
- Products generated via reusable function
- Unit tests verify rendering logic

**Tasks:**

- Create product data model
- Build product rendering function
- Write unit tests for renderer
- Refactor for modularity

### FR-3: Product Filtering or Search

**Requirement:**  
Users must be able to filter or search products.

**Acceptance Criteria:**

- Search input field present
- Results update dynamically
- No page reload required

**Tasks:**

- Implement search/filter logic
- Connect search input to filtering function
- Write unit tests for filtering
- Add UI state for no results

### FR-4: Contact Form with Validation

**Requirement:**  
A contact form must validate user input before submission.

**Acceptance Criteria:**

- Required fields enforced
- Email format validation
- Error messages displayed dynamically
- Unit tests for validation functions

**Tasks:**

- Create form UI
- Write validation logic
- Add error messaging UI
- Write validation unit tests

### FR-5: Navigation System

**Requirement:**  
Global navigation must allow access to all primary sections.

**Acceptance Criteria:**

- Persistent navigation bar
- Highlight active page
- Mobile-friendly behavior

**Tasks:**

- Build nav component
- Implement active link highlighting
- Add mobile behavior
- Write navigation tests (if applicable)

### FR-6: Automated Testing

**Requirement:**  
All core functions must have unit tests.

**Acceptance Criteria:**

- 100% test coverage for core logic functions
- Tests run automatically in CI pipeline
- Tests must pass before merge

**Tasks:**

- Configure testing framework
- Write tests for:
    - Product rendering
    - Filtering/search
    - Form validation
- Integrate tests into GitHub Actions

### FR-7: CI/CD Pipeline

**Requirement:**  
A GitHub Actions workflow must:

- Run tests on Pull Request
- Block merges if tests fail
- Deploy on merge to main

**Tasks:**

- Create workflow YAML file
- Configure test runner
- Configure deployment step
- Validate workflow execution

## 4️⃣ Non-Functional Requirements

These describe **how well the system must perform**.

### NFR-1: Performance

- Page load time under 3 seconds
- Optimized image assets
- Minified production build

**Tasks:**

- Optimize images
- Enable production build mode
- Measure Lighthouse performance score

### NFR-2: Accessibility

- Proper semantic HTML
- Alt text for images
- Color contrast compliance
- Keyboard navigability

**Tasks:**

- Add ARIA attributes where needed
- Audit color contrast
- Perform accessibility review

### NFR-3: Security

- No sensitive data stored client-side
- Input sanitization for forms
- Secure deployment configuration

**Tasks:**

- Validate form inputs
- Review environment variables
- Perform security checklist review

### NFR-4: Code Quality

- All functions documented with JSDoc
- Clean naming conventions
- No unused variables
- Linting enabled

**Tasks:**

- Add ESLint configuration
- Add JSDoc comments
- Run linter pre-commit
- Fix lint errors

### NFR-5: Collaboration Compliance

- All changes via Pull Request
- No direct commits to main
- Kanban board updated daily
- Commit messages follow convention

**Tasks:**

- Define commit message standard
- Enforce PR review process
- Monitor branch protection rules
## 5️⃣ Definition of Done (Global)

A task is considered complete when:

- Code implemented
- Unit tests written and passing
- Pull Request approved
- CI pipeline passes
- Documentation updated
- Deployed successfully (if applicable)
