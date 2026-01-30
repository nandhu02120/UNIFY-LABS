# CSS Styling Exercises - Day 3

## Exercise 1: Typography Hierarchy
**Objective**: Practice creating visual hierarchy with font sizes and weights

Create a page with:
- Main heading (2.5rem, bold)
- Subheading (1.5rem, bold)
- Body text (1rem, regular)
- Small text (0.875rem, light)

```css
.main-heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.subheading {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.body-text {
    font-size: 1rem;
    line-height: 1.8;
}

.small-text {
    font-size: 0.875rem;
    color: #7f8c8d;
}
```

---

## Exercise 2: Color Palette Application
**Objective**: Understand color harmony and usage

Create sections with:
- Primary color for headers and CTAs
- Secondary color for accents
- Light backgrounds for readability
- Proper contrast for text

```css
:root {
    --primary: #3498db;
    --secondary: #f39c12;
    --dark: #2c3e50;
    --light: #ecf0f1;
    --text: #333;
}

.section {
    background-color: var(--light);
    color: var(--text);
}

.heading {
    color: var(--primary);
}

.button {
    background-color: var(--secondary);
}
```

---

## Exercise 3: Box Model Mastery
**Objective**: Practice margin, padding, and border

Create cards with:
- 20px padding inside
- 15px margin between cards
- 2px border on left side
- Rounded corners

```css
.card {
    padding: 20px;
    margin: 15px;
    border-left: 2px solid #3498db;
    border-radius: 8px;
    background: white;
}
```

---

## Exercise 4: Navigation Bar Styling
**Objective**: Create a professional navigation bar

Requirements:
- Sticky positioning (stays at top while scrolling)
- Hover effects on links
- Proper spacing using flexbox
- Shadow for depth

```css
.navbar {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: #2c3e50;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
}

.nav-link {
    color: white;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
}

.nav-link:hover {
    border-bottom-color: #3498db;
}
```

---

## Exercise 5: Button Styling with Hover Effects
**Objective**: Create interactive, professional buttons

Requirements:
- Background color change on hover
- Scale or translate effect
- Shadow enhancement
- Smooth transition

```css
.button {
    background-color: #f39c12;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.button:hover {
    background-color: #e67e22;
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.3);
}
```

---

## Exercise 6: Card Grid Layout
**Objective**: Use Grid for responsive card layouts

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}
```

---

## Exercise 7: Form Styling
**Objective**: Style input fields with proper focus states

```css
input, textarea, select {
    padding: 0.75rem;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}
```

---

## Exercise 8: Hero Section Styling
**Objective**: Create an eye-catching hero section

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8rem 2rem;
    text-align: center;
    margin-bottom: 3rem;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: #ecf0f1;
    font-weight: 300;
}
```

---

## Exercise 9: Responsive Design
**Objective**: Make layouts work on all screen sizes

```css
/* Desktop */
.container {
    max-width: 1200px;
    padding: 0 2rem;
}

.grid {
    grid-template-columns: repeat(3, 1fr);
}

/* Tablet */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hero {
        padding: 4rem 2rem;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
    
    .hero-title {
        font-size: 1.75rem;
    }
}
```

---

## Exercise 10: CSS Pseudo-Elements
**Objective**: Use ::before and ::after for decorative elements

```css
.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #3498db;
    margin: 1rem auto 0;
}

.feature::before {
    content: '✓ ';
    color: #27ae60;
    font-weight: bold;
}
```

---

## Challenge: Build a Complete Landing Page

Combine all learned concepts to build a landing page with:

1. ✅ Sticky navigation bar with hover effects
2. ✅ Hero section with gradient background
3. ✅ Multiple content sections with proper spacing
4. ✅ Card grid for features/team members
5. ✅ Form with styled inputs
6. ✅ Footer with links
7. ✅ Fully responsive design (mobile, tablet, desktop)
8. ✅ Smooth transitions and hover effects
9. ✅ Professional color scheme
10. ✅ Proper typography hierarchy

---

## Common CSS Mistakes to Avoid

❌ **Not using box-sizing: border-box** - Inconsistent sizing
❌ **Hardcoding colors** - Use color variables or a palette
❌ **Ignoring responsive design** - Test on mobile!
❌ **Overusing hover effects** - Keep it subtle and purposeful
❌ **Poor color contrast** - Ensure text is readable
❌ **Not using flexbox/grid** - Creates complex layouts
❌ **Inline styles** - Keep CSS in stylesheets
❌ **Missing transitions** - Smooth interactions feel better
❌ **Inconsistent spacing** - Use a spacing scale
❌ **Not resetting default margins** - Start clean with `* { margin: 0; }`

---

## Resources for Further Learning

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Color Palette Generator**: https://coolors.co
- **Font Pairing**: https://fonts.google.com

---

**Keep Practicing!** CSS mastery comes with repetition. Try building different layouts and experimenting with styles. 🎨
