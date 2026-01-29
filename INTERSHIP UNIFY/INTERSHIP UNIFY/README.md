# DevConf 2026 – Tech Conference Website

## Project Overview

**DevConf 2026** is an advanced HTML5 website for a fictional technology conference. This project demonstrates professional semantic HTML5 structure, proper accessibility practices, and modern form implementation without any CSS or JavaScript.

The website serves as a complete conference information portal with registration, speaker profiles, schedules, FAQs, and contact functionality.

## Phase 2: Advanced HTML5 Upgrade

This version has been **upgraded to Advanced HTML5** with the following enhancements:

### New Features Added

#### Semantic HTML5 Structure
- Full implementation of semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`
- Proper heading hierarchy (h1, h2, h3, h4)
- HTML comments for major code sections
- Better code organization and readability

#### Video Integration
- Promotional video on homepage with `autoplay`, `muted`, `loop`, and `controls`
- Speaker introduction videos with multiple format support (MP4, WebM)
- Proper fallback text for video accessibility
- Video controls and poster images for better UX

#### Advanced Forms
- **register.html**: Complete registration form with fieldsets, validation, and multiple input types
  - Text, email, tel, number, date inputs
  - Radio buttons, checkboxes, dropdowns
  - File upload support (PDF resumes)
  - Required, minlength, maxlength, min, max, and pattern validation
  - Terms & Conditions acceptance checkbox

- **contact.html**: Professional contact form with semantic elements
  - Address block for location information
  - Embedded map with iframe
  - Subject selection dropdown
  - Textarea for messages
  - Newsletter subscription option

#### FAQ Implementation
- **faq.html**: Comprehensive FAQ page using semantic `<dl>` (definition list)
- Minimum 12 frequently asked questions organized by category
- Mini contact form on FAQ page for unanswered questions
- Sections: General, Registration, Content, Logistics, and Sponsorship

#### Enhanced Navigation
- Breadcrumb navigation on all pages for better UX
- Consistent navigation menu on every page
- Quick links sidebar (aside) on each page
- Working relative links throughout

#### Accessibility Features
- `aria-label` for breadcrumbs
- `aria-current="page"` for active breadcrumb items
- Alt text for all images
- Fallback text for videos and embedded content
- Proper form labeling

#### Professional Structure
- All files use `<!DOCTYPE html>`
- Meta viewport tags for responsive design
- Semantic `<article>` elements for speaker profiles
- Proper `<table>` elements with `<caption>` for data
- Organized sidebar (`<aside>`) elements
- Clean footer with links and copyright

## Pages Included

### Core Pages (All Upgraded)
1. **index.html** - Homepage with hero video, statistics, and call-to-action
2. **about.html** - Conference history, mission, and tracks
3. **speakers.html** - Keynote speakers (6 total) with bios and video introductions (3 speakers with videos)
4. **schedule.html** - Two-day event schedule in semantic tables
5. **sponsors.html** - Sponsorship tiers, benefits, and sponsor listings

### New Pages (Phase 2)
6. **register.html** - Advanced registration form with validation
7. **contact.html** - Contact information, location map, and contact form
8. **faq.html** - 12+ FAQs using definition lists, organized by category

## Folder Structure

```
INTERSHIP UNIFY/
├── index.html              # Homepage
├── about.html              # About the conference
├── speakers.html           # Keynote speakers
├── schedule.html           # Event schedule
├── sponsors.html           # Sponsors & sponsorship tiers
├── register.html          # Registration form (NEW)
├── contact.html           # Contact & location (NEW)
├── faq.html               # FAQ page (NEW)
├── README.md              # This file
├── assets/
│   ├── images/            # Images folder
│   │   ├── hero-poster.jpg
│   │   ├── speaker1.jpg through speaker6.jpg
│   │   ├── sponsor_*.jpg
│   │   └── ... (placeholder references)
│   └── videos/            # Videos folder
│       ├── hero-promo.mp4
│       ├── hero-promo.webm
│       ├── speaker1-intro.mp4 through speaker4-intro.mp4
│       └── ... (video files)
└── DAY2/                   # Folder for additional files
```

## Technologies Used

- **HTML5** (HyperText Markup Language)
  - Semantic tags for structure
  - Form validation attributes
  - Video and audio elements
  - Accessibility features
  
- **No CSS** or **JavaScript** (Pure HTML)

## Key HTML5 Elements Used

### Semantic Elements
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- `<address>` for contact information

### Form Elements
- `<form>`, `<fieldset>`, `<legend>`
- `<input>` (text, email, tel, number, date, radio, checkbox, file)
- `<select>`, `<option>`, `<textarea>`
- `<label>` with proper associations
- Form validation attributes: required, minlength, maxlength, min, max, pattern

### Media Elements
- `<video>` with `<source>` tags for multiple formats
- `poster` attribute for video thumbnails
- Proper fallback content

### Content Elements
- `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- `<dl>` (definition list), `<dt>`, `<dd>` for FAQs
- `<ol>` (ordered list), `<ul>` (unordered list)

### Accessibility
- `<nav aria-label="breadcrumb">` for navigation landmarks
- `aria-current="page"` for breadcrumb activation
- `alt` attributes for all images
- Fallback text in video elements
- Proper heading hierarchy

## How to Use

1. **Navigate to the project folder** on your computer
2. **Open `index.html`** in your web browser (Chrome, Firefox, Edge, Safari)
3. **Use the navigation menu** at the top to browse all pages
4. **Test the forms** on register.html, contact.html, and faq.html
5. **Follow breadcrumb links** to understand page hierarchy

## Form Fields Overview

### Registration Form (register.html)
- Personal Information: First Name, Last Name, Email, Phone
- Job Information: Job Title, Years of Experience, Industry
- Attendance Preferences: Day selection, Registration type, Dietary restrictions
- Track Interests: Multiple conference track checkboxes
- Additional Info: How you heard about us, Resume upload
- Terms & Conditions: Checkbox acceptance, Newsletter signup

### Contact Form (contact.html)
- Name, Email, Phone
- Subject selection
- Message textarea
- Newsletter subscription

### FAQ Mini Form (faq.html)
- Name, Email
- Question textarea

## Validation Features

- **Required fields** using `required` attribute
- **Text length limits** using `minlength` and `maxlength`
- **Number ranges** using `min` and `max`
- **Email validation** using `type="email"`
- **Phone validation** using `pattern` attribute
- **File type restriction** using `accept=".pdf"`

## Accessibility Standards

✓ Semantic HTML structure  
✓ Proper heading hierarchy  
✓ Alt text for all images  
✓ Fallback content for videos  
✓ Form labels properly associated with inputs  
✓ Breadcrumb navigation with aria-label  
✓ Keyboard navigation support  
✓ Screen reader friendly  

## Features Demonstration

### Video Support
- Multiple video formats (MP4, WebM) for browser compatibility
- Poster images for visual placeholder
- Controls for user playback management
- Fallback links for unsupported browsers

### Tables
- Semantic table structure with caption
- Proper header and body distinction
- Easy data readability

### Definition Lists
- 12+ FAQ items organized by topic
- Clear definition terms and descriptions
- Better semantic meaning for Q&A content

### Forms
- Multiple input types demonstrating HTML5 capabilities
- Fieldset grouping for related fields
- Legend descriptions for each fieldset
- Inline validation feedback ready for styling

## Browser Compatibility

- Chrome/Chromium ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## Notes for Day 2 Submission

This project represents **Phase 2 of the DevConf 2026 Website Development**:

- ✓ All existing pages upgraded to semantic HTML5
- ✓ Three new pages created (register, contact, faq)
- ✓ Advanced form implementation with validation
- ✓ Video integration with fallbacks
- ✓ Professional semantic structure throughout
- ✓ Accessibility best practices implemented
- ✓ Consistent navigation and breadcrumbs
- ✓ Clean, beginner-friendly code

**Status: Ready for submission** ✓

---

*Created as a Day 2 HTML assignment - DevConf 2026 Advanced HTML5 Project*
