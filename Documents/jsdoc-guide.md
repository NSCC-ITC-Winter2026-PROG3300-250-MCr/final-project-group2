## JSDoc Best Practices Guide (Team Standard)

### 1) Goals of our JSDoc

* Make code **self-explanatory** for teammates and future maintainers.
* Provide **accurate editor IntelliSense** (VS Code hints, types, hover docs).
* Generate **clean HTML documentation** from code comments (course requirement). 
* Reduce “tribal knowledge” by documenting **inputs, outputs, side effects, errors, and usage**.

## 2) What must be documented (minimum standard)

### Must-have JSDoc

Add JSDoc to:

* Every exported function (including handlers, services, utilities)
* Every exported class
* Every exported type (typedefs, callbacks)
* Any non-exported function that is:

  * complex,
  * reused,
  * or easy to misuse.

### Must-have tags (most common)

* `@param` for each parameter
* `@returns` (or `@return`) for return values
* `@throws` when it can throw (directly or intentionally)
* `@example` when usage isn’t obvious
* `@deprecated` when something should not be used

## 3) Style rules (consistency is everything)

### File header comment

At the top of each module (especially important for generated docs):

```js
/**
 * Customer API utilities and validators.
 * @module customers
 */
```

### Function description rules

Write **one sentence** that states what the function does, then add details only if needed:

* ✅ “Validates and normalizes a customer payload for storage.”
* ❌ “This function is used to validate stuff.”

### Parameter naming rules

* Mirror the actual parameter names.
* If it’s an object, document **shape** using typedefs (preferred) or property tags.


## 4) Types: do this even in JavaScript

### Prefer typedefs for object shapes

```js
/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} priceCents
 * @property {boolean} isActive
 */
```

Then:

```js
/**
 * Calculates the display price for a product.
 * @param {Product} product
 * @returns {string} Price formatted as currency (e.g., "$12.99").
 */
export function formatPrice(product) { ... }
```

### Optional params

Use brackets:

```js
/**
 * @param {string} query
 * @param {number} [limit=20]
 */
```

### Union types

```js
/**
 * @param {"asc"|"desc"} sortOrder
 */
```

### Nullable values

```js
/**
 * @returns {Product|null}
 */
```

### Async functions

Return a Promise type:

```js
/**
 * @returns {Promise<Product[]>}
 */
```

## 5) Error behavior and side effects

### If it throws, say so

```js
/**
 * Parses JSON safely.
 * @param {string} raw
 * @returns {Object}
 * @throws {SyntaxError} If `raw` is not valid JSON.
 */
```

### Side effects

If it mutates input, writes to storage, calls network, etc., document it:

* “Mutates `cart.items` in-place.”
* “Writes to localStorage under key `favorites`.”

## 6) Examples: keep them short and real

```js
/**
 * Filters products by keyword match against name.
 * @param {Product[]} products
 * @param {string} keyword
 * @returns {Product[]}
 * @example
 * const results = filterProducts(allProducts, "soap");
 */
```

Rules:

* Examples should run (or nearly run) as-is.
* Prefer realistic values from the project domain.

## 7) Callbacks, events, and handlers

### Callback typedef

```js
/**
 * @callback OnSave
 * @param {string} id
 * @returns {void}
 */
```

Use it:

```js
/**
 * Saves a record and triggers callback.
 * @param {Object} record
 * @param {OnSave} onSave
 */
```

## 8) React / UI components (if applicable)

If you have React components, treat them like public APIs:

```js
/**
 * Product card component.
 * @param {{ product: Product, onAddToCart: (id: string) => void }} props
 * @returns {JSX.Element}
 */
export function ProductCard({ product, onAddToCart }) { ... }
```

## 9) What to avoid (common team-killers)

* Don’t lie: outdated docs are worse than no docs.
* Don’t repeat obvious code (“increments i by 1”).
* Don’t use vague types (`Object`, `any`) unless unavoidable—define shapes.
* Don’t document *every* trivial private helper unless it’s non-obvious.

# Documentation Process (How we keep it “always correct”)

## A) Definition of Done (DoD) for any PR

A PR is not “done” unless:

1. New/changed exported functions/classes have JSDoc.
2. Any new types used across modules have typedefs.
3. JSDoc builds without errors/warnings (or at least without new ones).
4. Docs are regenerated (if your workflow generates/hosts them).
5. Unit tests updated as needed (course requirement). 

## B) Where docs live

* Source-of-truth is **inline JSDoc in code**.
* Generated docs output goes to one of:

  * `Documents/` (committed), or
  * GitHub Pages artifact (recommended), or
  * CI artifact.

Pick one and standardize it.

## C) Tooling: recommended setup (simple + reliable)

### 1) Add dependencies

* `jsdoc`
* (optional but helpful) `better-docs` or a theme
* (optional) `clean-jsdoc-theme`

### 2) Add scripts to `package.json`

```json
{
  "scripts": {
    "docs": "jsdoc -c jsdoc.json",
    "docs:clean": "rimraf ./docs/api"
  }
}
```

### 3) Add `jsdoc.json`

```json
{
  "source": {
    "include": ["src"],
    "includePattern": ".+\\.(js|jsx|ts|tsx)$",
    "excludePattern": "(node_modules/|dist/|build/|coverage/)"
  },
  "opts": {
    "destination": "docs/api",
    "recurse": true
  }
}
```

## D) CI/CD: generate docs automatically (course-friendly)

In GitHub Actions:

* On pull request: run `npm run docs` and fail if docs generation fails.
* On main: generate docs and deploy to GitHub Pages (or store artifact).

This directly supports the “proper project documentation” and “HTML files generated from JSDoc comments” requirement. 

## E) PR Review checklist (copy/paste)

**Documentation checklist**

* [ ] All exported functions/classes updated with accurate JSDoc
* [ ] All params documented with correct types
* [ ] Return type documented (including `Promise<T>`)
* [ ] Errors/throws documented where relevant
* [ ] Any complex function includes an `@example`
* [ ] JSDoc build passes locally (`npm run docs`)
* [ ] No new JSDoc warnings introduced

## F) Maintenance cadence

* Sprint start: confirm docs build works (nobody likes discovering broken docs at the end).
* Sprint review: show docs site + highlight most important modules.
* Before final presentation: run a docs build and sanity-check navigation/search. 

## “Team Standard” Quick Templates

### Function template

```js
/**
 * <verb> <object> <context>.
 *
 * @param {Type} name - What it represents.
 * @returns {Type} What is returned.
 * @throws {ErrorType} When/why it throws. (if applicable)
 * @example
 * // small real example
 */
```

### Object typedef template

```js
/**
 * @typedef {Object} Name
 * @property {Type} field - Meaning.
 */
```

### Async template

```js
/**
 * @returns {Promise<Type>}
 */
```
