# DevConf 2026 - Professional CSS Layout

A modern, responsive website for DevConf 2026 built with advanced CSS techniques.

## Features

### 1. Responsive Navigation Bar
- Flexbox-based layout with `display: flex`
- `justify-content: space-between` for optimal spacing
- `align-items: center` for vertical alignment
- Sticky positioning with `position: sticky` and `top: 0`
- Proper z-index management with `--z-sticky: 200`
- Animated underline on hover using `::after` pseudo-element

### 2. Hero Section
- Full viewport height with gradient background
- Multiple gradient layers for visual depth
- `background-size: cover` for responsive image coverage
- Centered content using Flexbox
- Overlay for text readability
- Smooth entrance animations with `@keyframes fadeInUp`
- Text shadows for enhanced contrast

### 3. Speaker Cards - CSS Grid
- Responsive grid layout with `display: grid`
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for automatic responsive columns
- Consistent `gap: var(--spacing-2xl)` for spacing
- Box shadows with hover elevation effects
- Transform animations: `transform: translateY(-10px) scale(1.02)`
- Tag system with gradient backgrounds
- Smooth transitions on all interactive elements

### 4. Schedule Section
- Grid-based layout for day cards
- Flexbox for schedule items
- Timeline-style appearance with left border gradient
- Hover effects with padding and background changes
- Clean typography hierarchy

### 5. CSS Variables
Comprehensive design token system:
- **Colors**: Primary, secondary, neutral, border, shadows
- **Typography**: Font families, sizes (xs to 5xl), weights, line heights
- **Spacing**: xs to 4xl units
- **Border Radius**: sm to full
- **Transitions**: fast, normal, slow
- **Z-index Scale**: dropdown, sticky, fixed, modal, tooltip

### 6. Advanced Positioning
- `position: sticky` for navbar
- `position: absolute` for overlays and pseudo-elements
- `position: fixed` for modal example
- `position: relative` for contextual positioning
- Z-index layering system for proper stacking

### 7. Production-Level CSS
- 750+ lines of clean, commented CSS
- Mobile-first responsive design
- Accessibility features (focus states, screen reader only text)
- Reduced motion support
- High contrast mode support
- Dark mode media query support
- Proper vendor prefixes where needed

## File Structure

```
day4/
├── index.html      # HTML structure
├── styles.css      # Main stylesheet (750+ lines)
└── README.md       # Documentation
```

## Key CSS Techniques Used

1. **Flexbox**: Navigation, hero content, schedule items
2. **CSS Grid**: Speaker cards, schedule section, footer
3. **Gradients**: Linear and radial gradients for backgrounds
4. **Animations**: Keyframe animations and transitions
5. **Pseudo-elements**: `::before` and `::after` for effects
6. **CSS Variables**: Complete design token system
7. **Media Queries**: Responsive breakpoints
8. **Box Shadows**: Elevation and depth
9. **Transforms**: Scale, translate, rotate effects
10. **Filters**: Backdrop and color effects

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Gradient support required
- CSS Variables support required

## Color Scheme

- Primary: `#667eea` (Indigo)
- Secondary: `#764ba2` (Purple)
- Accent: `#f5576c` (Red)
- Text: `#2d3748` (Dark Gray)

## Getting Started

1. Open `index.html` in a web browser
2. All styles are in `styles.css`
3. Customize colors by editing CSS variables in `:root`
4. Modify spacing, typography, and other values as needed

## Key Features to Explore

- Hover over navigation links for animated underlines
- Inspect hero section for gradient and animation effects
- View speaker cards on different screen sizes for responsive grid
- Check footer for grid-based layout
- Use browser DevTools to inspect CSS Grid and Flexbox layouts
