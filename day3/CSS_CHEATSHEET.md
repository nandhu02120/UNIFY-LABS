# CSS Cheat Sheet - Day 3

## Text & Fonts

```css
/* Font properties */
font-family: 'Arial', sans-serif;
font-size: 16px;              /* px, em, rem, etc. */
font-weight: 700;             /* 100, 200, ..., 900 or bold, normal */
font-style: italic;           /* italic, normal, oblique */
line-height: 1.6;             /* unitless, px, em, % */
letter-spacing: 2px;          /* Space between letters */
word-spacing: 5px;            /* Space between words */
text-align: center;           /* left, center, right, justify */
text-decoration: underline;   /* none, underline, overline, line-through */
text-transform: uppercase;    /* uppercase, lowercase, capitalize */
color: #333;                  /* Text color */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
```

## Colors & Backgrounds

```css
/* Color formats */
color: red;                   /* Named */
color: #FF0000;              /* Hex */
color: rgb(255, 0, 0);       /* RGB */
color: rgba(255, 0, 0, 0.5); /* RGBA with opacity */
color: hsl(0, 100%, 50%);    /* HSL */

/* Background */
background-color: white;
background-image: url('image.jpg');
background-size: cover;       /* cover, contain, auto, 100px, etc. */
background-position: center;  /* top, bottom, left, right, center, etc. */
background-repeat: no-repeat; /* repeat, no-repeat, repeat-x, repeat-y */
background-attachment: fixed; /* scroll, fixed */

/* Gradients */
background: linear-gradient(to right, #667eea, #764ba2);
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: radial-gradient(circle, #667eea, #764ba2);
```

## Box Model

```css
/* Margin (outside) */
margin: 20px;                 /* All sides */
margin: 10px 20px;           /* Top/Bottom, Left/Right */
margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left (TRBL) */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Padding (inside) */
padding: 20px;               /* All sides */
padding: 10px 20px;         /* Top/Bottom, Left/Right */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;

/* Border */
border: 2px solid #333;
border-top: 1px solid red;
border-right: 2px dashed blue;
border-bottom: 3px dotted green;
border-left: 4px double purple;
border-radius: 8px;          /* Rounded corners */
border-radius: 50%;          /* Circle */

/* Box sizing */
box-sizing: content-box;     /* Default: width doesn't include padding/border */
box-sizing: border-box;      /* width includes padding and border */
```

## Display & Layout

```css
/* Display types */
display: block;              /* Full width, starts new line */
display: inline;             /* Flows with text, inline */
display: inline-block;       /* Inline but respects width/height */
display: flex;               /* Flexbox container */
display: grid;               /* CSS Grid container */
display: none;               /* Hidden from DOM */
display: grid;

/* Visibility */
visibility: hidden;          /* Hidden but takes up space */
opacity: 0.5;               /* 0 = transparent, 1 = opaque */

/* Width & Height */
width: 100%;
height: auto;
min-width: 200px;
max-width: 1200px;
min-height: 100px;
max-height: 500px;
```

## Flexbox

```css
.container {
    display: flex;
    flex-direction: row;          /* row, column, row-reverse, column-reverse */
    justify-content: center;      /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    align-items: center;          /* flex-start, flex-end, center, stretch, baseline */
    gap: 1rem;                    /* Space between items */
    flex-wrap: wrap;              /* nowrap, wrap, wrap-reverse */
}

.item {
    flex: 1;                      /* flex-grow flex-shrink flex-basis */
    flex-grow: 1;                 /* Growth factor */
    flex-shrink: 1;               /* Shrink factor */
    flex-basis: auto;             /* Base size */
    order: 1;                     /* Change order */
}
```

## CSS Grid

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);     /* 3 equal columns */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
    grid-template-rows: repeat(2, 100px);      /* 2 rows, 100px each */
    gap: 2rem;                                 /* Space between grid items */
    row-gap: 1rem;
    column-gap: 2rem;
}

.item {
    grid-column: 1 / 3;           /* Span columns 1-3 */
    grid-row: 1 / 4;              /* Span rows 1-4 */
}
```

## Positioning

```css
position: static;             /* Default, normal flow */
position: relative;           /* Relative to normal position */
position: absolute;           /* Relative to positioned parent */
position: fixed;              /* Relative to viewport, doesn't scroll */
position: sticky;             /* Relative until threshold, then fixed */

top: 20px;
bottom: 20px;
left: 20px;
right: 20px;
z-index: 10;                  /* Stacking order (higher = on top) */
```

## Shadows & Effects

```css
/* Box Shadow */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
/* Format: offset-x offset-y blur-radius color */

/* Text Shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

/* Filter */
filter: blur(5px);
filter: brightness(0.8);
filter: contrast(1.2);
filter: grayscale(50%);
filter: opacity(0.5);
filter: saturate(1.5);
```

## Transitions & Animations

```css
/* Transition */
transition: background-color 0.3s ease;
transition: all 0.3s ease;    /* All properties */
transition-property: color, background-color;
transition-duration: 0.3s;
transition-timing-function: ease; /* linear, ease, ease-in, ease-out, ease-in-out */
transition-delay: 0.1s;

/* Transform */
transform: translateX(50px);  /* Move in X */
transform: translateY(-20px); /* Move in Y */
transform: translate(50px, -20px);
transform: scale(1.2);        /* Scale up */
transform: scaleX(1.5);
transform: scaleY(0.8);
transform: rotate(45deg);     /* Rotate */
transform: skew(10deg);
transform: rotate(-30deg) scale(0.8);  /* Multiple transforms */

/* Animation */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.element {
    animation: slideIn 0.5s ease-in-out;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-delay: 0.1s;
    animation-iteration-count: 1; /* or infinite */
    animation-direction: normal;   /* or reverse, alternate */
}
```

## Pseudo-Classes & Pseudo-Elements

```css
/* Pseudo-classes (state) */
a:hover { color: blue; }      /* Mouse over */
a:active { color: red; }      /* While clicking */
a:visited { color: purple; }  /* Visited link */
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(2) { color: red; }
li:nth-child(odd) { background: #f0f0f0; }

/* Pseudo-elements (content) */
.element::before {
    content: '→ ';
    color: blue;
}

.element::after {
    content: ' ✓';
    color: green;
}

p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
```

## Media Queries (Responsive)

```css
/* Mobile First (Progressive Enhancement) */
.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

/* Common Breakpoints */
@media (max-width: 480px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (min-width: 769px) and (max-width: 1024px) { /* Large tablet */ }
@media (min-width: 1025px) { /* Desktop */ }

/* Other media query features */
@media (orientation: portrait) { }
@media (orientation: landscape) { }
@media (prefers-reduced-motion: reduce) { }
@media (prefers-color-scheme: dark) { }
```

## Useful CSS Functions

```css
/* calc() - Perform calculations */
width: calc(100% - 20px);
padding: calc(1rem + 2px);

/* var() - Use CSS variables */
:root {
    --primary-color: #3498db;
    --spacing-unit: 1rem;
}

color: var(--primary-color);
margin: var(--spacing-unit);

/* min() / max() - Responsive sizing */
font-size: clamp(1rem, 5vw, 3rem); /* min size, preferred size, max size */

/* rgba() / hsla() - Colors with transparency */
background-color: rgba(255, 0, 0, 0.5);
```

## Common Property Values

```css
/* Sizes */
16px, 1rem, 1.5em, 50%, 100vw, 100vh

/* Colors */
#FF0000, rgb(255,0,0), rgba(255,0,0,0.5)

/* Time */
0.3s, 300ms

/* Angles */
45deg, 0.5turn, 1.5rad

/* Directions */
to top, to right, to bottom-left, 135deg
```

## CSS Reset Template

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

button, input, select {
    font: inherit;
}

a {
    text-decoration: none;
    color: inherit;
}
```

---

**Pro Tips:**
- Use `rem` units for scalable sizes (based on root font-size)
- Use `%` for responsive widths
- Use `em` for element-relative sizing
- Always test responsive designs on real devices
- Use DevTools to inspect and debug CSS
- Keep colors consistent with a palette
- Use semantic class names (`.nav-menu` not `.menu1`)
