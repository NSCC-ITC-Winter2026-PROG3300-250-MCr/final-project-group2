## Working Within Webador Constraints

**Project:** Tallow Bliss Skincare Website Redesign  
**Team:** Group 2 – PROG3300  
**Client:** Tallow Bliss Skincare (Antigonish, NS)  
**Prepared By:** Shayne McNeil, Project Manager  

# 1. Purpose of This Research

The purpose of this document is to:

1. Identify the technical constraints of **Webador** as a hosting and ecommerce platform.
2. Determine what is feasible regarding integration of a custom-built frontend (HTML/CSS/JS).
3. Assess risks associated with direct integration.
4. Explore fallback strategies:

   * Hybrid (separate frontend hosted externally, connected via API)
   * Full migration to another platform

This research directly supports risk mitigation and architectural decision-making for the project.

# 2. Overview of Webador

**Webador** is a SaaS website builder platform offering:

* Drag-and-drop editor
* Ecommerce support
* Built-in payment processing
* Hosting + SSL
* Template-based design
* Custom code embedding (limited)

It is not a traditional hosting provider like Netlify or AWS where raw project folders can be deployed freely.

# 3. What Is Possible Within Webador

### 3.1 Custom HTML Embeds

Webador allows:

* HTML embed widgets
* Custom code injection blocks
* Script embedding (within limits)

This allows:

* Custom JS features
* Interactive components
* Styling overrides via injected CSS


### 3.2 Ecommerce Use

Webador natively supports:

* Product listings
* Payment gateways
* Inventory management
* Order management

This means:

* We do NOT need to rebuild payment processing.
* We should ideally leverage Webador’s ecommerce backend.

### 3.3 Custom Domain + Hosting

Webador manages:

* DNS
* Hosting
* SSL certificates

So:

* Client avoids hosting complexity.
* Lower operational burden.

# 4. What Is NOT Possible (Major Constraints)

### 4.1 Full Raw Deployment of a Custom Site

Webador does NOT allow:

* Uploading a complete custom-built HTML/CSS/JS folder structure.
* Using Webador as generic file hosting.
* Direct server-side scripting (Node, PHP, etc.).
* Custom backend logic.

This is the most critical constraint.

If we build:

```
/index.html
/css/
   styles.css
/js/
   app.js
```

We likely CANNOT upload this structure directly and replace the entire Webador template.

### 4.2 Limited API Access

Webador does not publicly advertise:

* Open REST API access
* Webhooks for product synchronization
* Headless CMS mode

This limits hybrid decoupled architecture options.


### 4.3 Styling Limitations

Webador templates:

* Inject their own CSS
* Restrict global overrides
* Limit deep DOM manipulation

Risk:
Custom styling may conflict with Webador’s internal layout system.


# 5. Integration Strategy Chosen

### Primary Strategy:

**Build custom UI components that can be embedded inside Webador pages.**

This means:

* Design frontend components in modular sections.
* Inject via Webador’s HTML blocks.
* Use Webador for:

  * Products
  * Cart
  * Checkout
  * Hosting

This keeps:

* Backend intact
* Client’s operational workflow unchanged
* Ecommerce safe

# 6. Risk Assessment & Mitigation

## Risk 1: Webador Strips Scripts

**Likelihood:** Medium
**Impact:** High

Mitigation:

* Early proof-of-concept embed test.
* Sprint 1 deliverable: deploy small JS module inside Webador.
* Validate DOM access & event listeners.

## Risk 2: CSS Conflicts

**Likelihood:** High
**Impact:** Medium

Mitigation:

* Namespace all CSS:

```css
.tb-container h2 { }
```

* Avoid global resets.
* Use scoped component architecture.

## Risk 3: Ecommerce Styling Not Customizable

**Likelihood:** High
**Impact:** Medium

Mitigation:

* Accept checkout UI constraints.
* Improve pre-checkout experience.
* Focus on branding before cart flow.

## Risk 4: Webador Feature Limitations Block Core Functionality

**Likelihood:** Low–Medium
**Impact:** Very High

Mitigation:

* Identify required functionality early.
* Avoid building features requiring backend control.
* Confirm client expectations.

# 7. Alternative Architecture Options

## OPTION A – Hybrid Architecture

(Custom Frontend Hosted Separately)

### Architecture:

```
Frontend (Netlify)
      ↓
Webador Ecommerce Backend
```

### Requirements:

* Webador must support API access.
* Or use redirect-based product linking.
* Or embed Webador store via iframe.

### Advantages:

* Full frontend freedom
* Proper CI/CD
* Cleaner dev workflow

### Disadvantages:

* Possible API limitations
* Sync issues
* More complexity
* Two systems to maintain

## OPTION B – Full Migration

Move to:

* Shopify
* WooCommerce (WordPress)
* Headless CMS + Stripe
* Fully custom backend

### Advantages:

* Full control
* API access
* Clean CI/CD pipeline
* Long-term scalability

### Disadvantages:

* Client retraining
* Data migration complexity
* Payment reconfiguration
* Higher maintenance burden
* Emotional cost (client recently lost family member)

Given client circumstances, this option is high disruption.

# 8. Comparative Risk Matrix

| Option                     | Technical Freedom | Client Disruption | Dev Complexity | Long-Term Scalability |
| -------------------------- | ----------------- | ----------------- | -------------- | --------------------- |
| Direct Webador Integration | Low               | Very Low          | Low            | Medium                |
| Hybrid                     | Medium–High       | Medium            | High           | High                  |
| Full Migration             | Very High         | High              | Very High      | Very High             |

# 9. Alignment With Course Requirements

Per course documentation :

* CI/CD must be implemented.
* Unit tests required.
* Deployed site required.

If Webador limits CI/CD:

* We deploy primary build to Netlify for demo.
* Final production version injected into Webador.

This satisfies:

* Technical grading requirements
* Real-world client needs

# 10. Recommended Path Forward

### Phase 1 (Sprint 1)

* Build modular frontend prototype.
* Test HTML/CSS/JS injection into Webador.
* Confirm script execution & styling.

### Phase 2

* Integrate branded sections.
* Preserve Webador ecommerce.

### Phase 3

* Polish.
* Validate cart + checkout.
* Final demo via deployed staging version.


# 11. Final Recommendation

**Stay on Webador unless proven technically impossible.**

Because:

* Lowest client disruption
* Preserves ecommerce
* Minimizes migration risk
* Aligns with client emotional and operational constraints

Fallback plan:

1. Hybrid external frontend.
2. Full migration (last resort only).
