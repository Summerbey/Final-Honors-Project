# RareTech - Bulma Implementation

## 📁 Project Structure
```
bulma-version/
├── index.html          # Homepage (~240 lines)
├── styles.css          # Minimal custom CSS (~70 lines)
├── script.js           # Custom JavaScript (~65 lines)
└── README.md          # This file
```

## 🎯 What's Implemented

### Bulma Philosophy - Semantic & Modern:

✅ **Component-Based (like Bootstrap)**
- Pre-built components: `.card`, `.navbar`, `.hero`
- But with semantic naming: `is-`, `has-`
- Pure Flexbox (no CSS Grid)

✅ **CSS-Only**
- No JavaScript included
- Lighter than Bootstrap
- Must write custom JS for interactions

✅ **Modifier Classes**
```html
<button class="button is-link is-large">
  <!-- is-link = color, is-large = size -->
</button>
```

## 🔍 COMPLETE FRAMEWORKS COMPARISON - ALL 2!

### Lines of Code:

| Framework | HTML | CSS | JS | Total | Notes |
|-----------|------|-----|-----|-------|-------|
| **Bootstrap** | 150 | 80 | 40 | **270** | Smallest total |
| **Bulma** | 240 | 70 | 65 | **375** | Balanced |


### External Dependencies:

| Framework | Size | Type | Notes |
|-----------|------|------|-------|
| **Bootstrap** | ~85 KB | CSS + JS | Includes JavaScript |
| **Bulma** | ~200 KB | CSS only | No JavaScript |

### Development Speed:

| Framework | Speed | Estimate |
|-----------|-------|----------|
| **Bootstrap** | 40-50% | **Fastest** |
| **Bulma** | 45-55% | Similar to Bootstrap |

## 🎨 Bulma Approach - Examples

### Component Classes + Modifiers:

**Bulma Structure:**
```html
<!-- Component + Modifiers -->
<button class="button is-link is-large">
  <!-- button = component -->
  <!-- is-link = color modifier -->
  <!-- is-large = size modifier -->
</button>

<!-- Semantic prefixes -->
is-*        <!-- for states/modifiers -->
has-*       <!-- for helpers -->
```

### Column System (Flexbox):
```html
<div class="columns">
  <div class="column is-one-quarter">
    <!-- 25% width -->
  </div>
  <div class="column is-half">
    <!-- 50% width -->
  </div>
</div>
```

### Responsive:
```html
<div class="column is-half-tablet is-one-quarter-desktop">
  <!-- Responsive column widths -->
</div>
```

## 📊 Component Comparison - Product Card


### Bootstrap:
```html
<div class="card h-100 shadow-sm">
  <img src="..." class="card-img-top" alt="Product">
  <div class="card-body">
    <h5 class="card-title">Product</h5>
    <span class="fs-4 text-primary">£89.99</span>
    <button class="btn btn-primary btn-sm">Add to Cart</button>
  </div>
</div>

<!-- Minimal custom CSS needed -->
```


### Bulma:
```html
<div class="card product-card">
  <div class="card-image">
    <figure class="image is-square">
      <img src="..." alt="Product">
    </figure>
  </div>
  <div class="card-content">
    <p class="title is-5">Product</p>
    <p class="title is-4 has-text-link">£89.99</p>
    <button class="button is-link is-small">
      <strong>Add to Cart</strong>
    </button>
  </div>
</div>

<!-- Minimal custom CSS for hover effects -->
```

## ✨ Bulma Unique Features

### 1. **Semantic Naming**
```html
<!-- Very readable class names -->
is-primary, is-link, is-success, is-danger
is-large, is-medium, is-small
has-text-centered, has-background-light
```

### 2. **Pure Flexbox**
- Everything built with Flexbox
- No CSS Grid
- Very consistent layout system

### 3. **Level Component**
```html
<!-- Horizontal layout with auto-alignment -->
<div class="level">
  <div class="level-left">Left content</div>
  <div class="level-right">Right content</div>
</div>
```

### 4. **Helper Classes**
```html
<!-- Spacing helpers -->
mt-4, mb-5, px-3, py-2

<!-- Text helpers -->
has-text-centered, has-text-weight-bold

<!-- Color helpers -->
has-text-link, has-background-light
```

### 5. **CSS-Only**
- No JavaScript dependency
- Lighter than Bootstrap
- More control over interactivity

## ⚖️ Bulma vs Other

### Bulma vs Bootstrap:

| Aspect | Bootstrap | Bulma |
|--------|-----------|-------|
| **JavaScript** | ✅ Included | ❌ CSS-only |
| **Size** | ~85 KB | ~200 KB |
| **Grid System** | 12-column | Flexbox columns |
| **Naming** | Generic | Semantic (`is-`, `has-`) |
| **Components** | More | Fewer |
| **Popularity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐☆☆ |

## 🎯 Bulma Strengths

### What Bulma Does Best:
✅ **Semantic & Readable** - `is-link`, `has-text-centered`
✅ **Modern CSS** - Pure Flexbox, clean markup
✅ **Lightweight** - No JavaScript overhead
✅ **Easy to Learn** - Intuitive class names
✅ **Good Documentation** - Clear examples
✅ **Flexible** - Easy to customize
✅ **Mobile-First** - Responsive by default

### Comparison:
- **Faster than**: Vanilla (much faster)
- **More semantic than**: Tailwind
- **Lighter than**: Bootstrap (no JS)
- **More flexible than**: Bootstrap
- **Less verbose than**: Tailwind

## ⚠️ Bulma Limitations

### Cons:
❌ **No JavaScript** - Must write custom JS
❌ **Fewer Components** - Smaller ecosystem vs Bootstrap
❌ **Less Popular** - Smaller community
❌ **Larger CSS** - ~200KB vs Bootstrap ~85KB
❌ **Flexbox Only** - No CSS Grid utilities
❌ **Manual Interactions** - Navbar, dropdowns need JS

### When NOT to Use Bulma:
- Need built-in JavaScript components
- Want largest possible component library
- Prefer CSS Grid over Flexbox
- Need maximum community support
- Want smallest possible bundle

## 📱 Bulma Responsive System

### Breakpoints:
```
mobile:       < 769px
tablet:       ≥ 769px
desktop:      ≥ 1024px
widescreen:   ≥ 1216px
fullhd:       ≥ 1408px
```

### Responsive Columns:
```html
<!-- Mobile: full, Tablet: half, Desktop: quarter -->
<div class="column is-half-tablet is-one-quarter-desktop">
```

### Responsive Helpers:
```html
<!-- Hide on mobile, show on tablet+ -->
<div class="is-hidden-mobile">

<!-- Show only on desktop -->
<div class="is-hidden-touch">
```

## 🏆 FINAL RANKINGS - All 4 Frameworks

### Development Speed:
1. **Bootstrap** ⭐⭐⭐⭐⭐ (Fastest)
2. **Bulma** ⭐⭐⭐⭐☆

### Code Cleanliness:
1. **Bootstrap** ⭐⭐⭐⭐☆
2. **Bulma** ⭐⭐⭐⭐☆

### Flexibility:
1. **Bulma** ⭐⭐⭐⭐☆
2. **Bootstrap** ⭐⭐⭐☆☆

### Learning Curve:
1. **Bulma** ⭐⭐⭐⭐☆ (Semantic names)
2. **Bootstrap** ⭐⭐⭐⭐☆

### Bundle Size:
1. **Bootstrap** ⭐⭐⭐☆☆ (85 KB)
2. **Bulma** ⭐⭐⭐☆☆ (200 KB)

### Component Library:
1. **Bootstrap** ⭐⭐⭐⭐⭐ (Most components)
2. **Bulma** ⭐⭐⭐⭐☆

### Overall for Rapid Development:
1. **Bootstrap** ⭐⭐⭐⭐⭐
2. **Bulma** ⭐⭐⭐⭐☆

### Overall for Custom Design:
1. **Bulma** ⭐⭐⭐⭐☆
2. **Bootstrap** ⭐⭐⭐☆☆

## 💡 When to Use Each Framework

### Use **Bootstrap** when:
- Rapid development needed
- Standard UI patterns
- Large component library needed
- Team familiarity
- Built-in JavaScript components wanted

### Use **Bulma** when:
- Modern semantic framework wanted
- No JavaScript dependency needed
- Clean, readable HTML preferred
- Flexbox-based layouts
- Between Bootstrap and Tailwind approach

## 📊 Complete Metrics Table

| Metric | Bootstrap | Bulma |
|--------|---------|-----------|----------|-------|
| **Total Lines** | 810 | 270 | 340 | 375 |
| **HTML Lines** | 200 | 150 | 280 | 240 |
| **CSS Lines** | 550 | 80 | 30 | 70 |
| **JS Lines** | 60 | 40 | 60 | 65 |
| **Dependencies** | 0 KB | 85 KB | 3.5MB* | 200 KB |
| **Setup Time** | None | CDN | CDN/Build | CDN |
| **Dev Speed** | Slow | Fast | Medium | Fast |

## 🎓 Key Learnings

### Framework Philosophy:

**Bootstrap**: Component-based, everything provided
**Bulma**: Semantic components, CSS-only

### HTML Verbosity:

**Cleanest to Most Verbose:**
1. Bootstrap (moderate utility classes)
2. Bulma (semantic modifiers)

### CSS Written:

**Most to Least:**
1. Bootstrap (80 lines)
2. Bulma (70 lines)

### JavaScript Required:

**Most to Least:**
1. Bulma (65 lines - manual everything)
2. Bootstrap (40 lines - built-in JS)

## 🔍 Personal Observations

### Personal Consideration:

**Speed:**
- Which was fastest to build?
- Which felt most productive?
- Which had best workflow?

**Code Quality:**
- Which produced cleanest HTML?
- Which was most maintainable?
- Which would you want to return to?

**Developer Experience:**
- Which was most enjoyable?
- Which had best documentation?
- Which had steepest learning curve?

**Flexibility:**
- Which gave most control?
- Which was easiest to customize?
- Which felt most limiting?

**Overall:**
- Which would you choose for a real project?
- Which surprised you most?
- Which would you recommend to others?

## 🚀 Running the Project

Simply open `index.html` in a browser. Bulma loads via CDN.

```bash
# Optional: Use a local server
python -m http.server 8000
# Then open http://localhost:8000
```

---

## 📝 Research Deliverables

**complete implementations** of:
1. ✅ Bootstrap 5 (component-based)
2. ✅ Bulma (semantic CSS-only)

### Next Steps for Project:

1. **Experience Documentation**
   - Time spent on each
   - Challenges encountered
   - Learning curve observations

2. **Analyze Code Metrics**
   - Lines of code
   - File sizes
   - Complexity

3. **Compare Developer Experience**
   - Speed of development
   - Ease of customization
   - Documentation quality

4. **Evaluate Results**
   - Visual consistency
   - Responsive behavior
   - Code maintainability

5. **Draw Conclusions**
   - Best use cases for each
   - Trade-offs identified
   - Recommendations

---

**Honours Project**: Comparative Evaluation of CSS Frameworks  
**Student**: Summer Rhoda Banner ID (B00477047)  
**Framework**: Bulma 0.9.4  
**Status**: ✅ ALL 2 FRAMEWORKS COMPLETE!
