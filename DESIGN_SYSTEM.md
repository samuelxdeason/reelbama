# ReelBama Design System

## Overview
The ReelBama design system is built around a light, modern, and community-focused aesthetic that celebrates Alabama's fishing heritage. The design emphasizes clarity, accessibility, and engagement while maintaining a professional yet fun atmosphere.

---

## Brand Colors

### Primary Colors

#### Alabama Red (Primary Brand Color)
- **Hex:** `#9E1B32`
- **CSS Variable:** `--alabama-crimson`
- **Usage:** Primary call-to-action buttons, important links, tournament highlights, brand emphasis
- **When to Use:** 
  - Primary action buttons (Submit, Join, Share)
  - Tournament winner cards
  - Brand logo elements
  - Important navigation links
  - Weight badges on catch photos
- **Avoid:** Large background areas (can be overwhelming), body text

**Variations:**
- **Light:** `#C41E3A` (`--alabama-crimson-light`)
- **Dark:** `#7A1526` (`--alabama-crimson-dark`)
- **Darker:** `#5C101C` (`--alabama-crimson-darker`)

### Secondary Colors

#### Deep Blue (Water Theme)
- **Hex:** `#1e40af`
- **CSS Variable:** `--deep-blue`
- **Usage:** Video sections, water-related content, secondary icons
- **When to Use:**
  - GoPro/Video of the Week components
  - Water condition indicators
  - Deep water fishing content

#### Lake Green (Fishing & Nature)
- **Hex:** `#059669`
- **CSS Variable:** `--lake-green`
- **Usage:** Wildlife sections, guide registry, nature-related content
- **When to Use:**
  - Guide Registry components
  - Wildly Alabama creature features
  - Environmental/conservation content
  - Success states and positive indicators

#### Sunset Orange (Media & Podcasts)
- **Hex:** `#ea580c`
- **CSS Variable:** `--sunset-orange`
- **Usage:** Podcast sections, media content, fishing violations
- **When to Use:**
  - Podcast Links components
  - Media player elements
  - Trash Fish of the Week (warning theme)

#### Gold Accent (Achievement & Winners)
- **Hex:** `#f59e0b`
- **CSS Variable:** `--gold-accent`
- **Usage:** Tournament winners, achievements, badges
- **When to Use:**
  - Winner badges and labels
  - Achievement indicators
  - Trophy icons and tournament headers
  - Premium features

#### Blog Accent (Purple)
- **Hex:** `#7c3aed`
- **CSS Variable:** `--blog-accent`
- **Usage:** Blog posts, columns, featured stories
- **When to Use:**
  - Drop-Shot Column components
  - Road Trip of the Month features
  - Blog content highlighting

#### Community Blue
- **Hex:** `#0ea5e9`
- **CSS Variable:** `--community-blue`
- **Usage:** Community features, photo galleries, social elements
- **When to Use:**
  - Photo of the Week components
  - Community member content
  - Social sharing features
  - Event calendars

### Neutral Colors

#### Typography Scale
- **Heading:** `#1e293b` (gray-900)
- **Body Text:** `#475569` (gray-600)
- **Secondary Text:** `#64748b` (gray-500)
- **Muted Text:** `#94a3b8` (gray-400)

#### Background Colors
- **Primary Background:** `#ffffff` (white)
- **Secondary Background:** `#f8fafc` (gray-50)
- **Card Background:** `#f1f5f9` (gray-100)
- **Page Background:** `#f9fafb` (gray-50)

#### Border Colors
- **Default Border:** `#e2e8f0` (gray-200)
- **Light Border:** `#cbd5e1` (gray-300)
- **Card Border:** `#e5e7eb` (gray-200)

---

## Typography

### Font Families

#### Headings - Montserrat
- **Usage:** All headings (h1-h6), navigation, button labels
- **Weights:** 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extra Bold)
- **CSS Class:** `font-heading`
- **Characteristics:** Clean, modern, geometric sans-serif

#### Body - Lora
- **Usage:** Body text, descriptions, articles, blog content
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **CSS Class:** `font-body`
- **Characteristics:** Elegant serif with excellent readability

### Font Sizes
- **Hero Title:** `text-4xl` to `text-6xl` (36-60px)
- **Section Headings:** `text-2xl` to `text-4xl` (24-36px)
- **Card Titles:** `text-xl` to `text-2xl` (20-24px)
- **Body Text:** `text-base` (16px)
- **Small Text:** `text-sm` (14px)
- **Tiny Text:** `text-xs` (12px)

---

## Border Radius

### Standard Radius Values
- **Small Components:** `rounded-lg` (8px) - Buttons, badges, small cards
- **Medium Components:** `rounded-xl` (12px) - Standard cards, input fields, images
- **Large Components:** `rounded-2xl` (16px) - Main section cards, hero elements
- **Circular Elements:** `rounded-full` - Avatars, badges, icon containers

### Usage Guidelines
```css
/* Buttons and small interactive elements */
.button { border-radius: 0.5rem; /* 8px - rounded-lg */ }

/* Standard cards and images */
.card { border-radius: 0.75rem; /* 12px - rounded-xl */ }

/* Major section containers */
.section { border-radius: 1rem; /* 16px - rounded-2xl */ }

/* Avatars and circular badges */
.avatar { border-radius: 9999px; /* rounded-full */ }
```

---

## Shadows

### Shadow Scale
- **Small Shadow:** `shadow-sm` - Subtle elevation for inputs
- **Default Shadow:** `shadow-md` - Standard cards and buttons
- **Large Shadow:** `shadow-lg` - Major sections and modals
- **Extra Large Shadow:** `shadow-xl` - Hover states, focused elements
- **2X Large Shadow:** `shadow-2xl` - Hero sections, major features

### Usage Examples
```css
/* Buttons */
button { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */ }

/* Cards */
.card { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */ }

/* Hero and major sections */
.hero { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */ }
```

---

## Spacing

### Padding Scale
- **Component Padding:** `p-6` to `p-8` (24-32px) - Main sections
- **Card Padding:** `p-4` to `p-6` (16-24px) - Cards and containers
- **Button Padding:** `px-4 py-2` to `px-8 py-3` - Buttons and CTAs
- **Compact Padding:** `p-2` to `p-3` (8-12px) - Tight spaces

### Gap/Spacing
- **Large Gaps:** `gap-8` (32px) - Between major sections
- **Medium Gaps:** `gap-6` (24px) - Between cards in a grid
- **Small Gaps:** `gap-4` (16px) - Between related elements
- **Tight Gaps:** `gap-2` to `gap-3` (8-12px) - Compact layouts

---

## Components

### Buttons

#### Primary Button (Alabama Red)
```jsx
<button className="bg-alabama-red hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300">
  Call to Action
</button>
```

#### Secondary Button (Outline)
```jsx
<button className="border-2 border-alabama-red text-alabama-red hover:bg-alabama-red hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
  Secondary Action
</button>
```

#### Tertiary Button (Link Style)
```jsx
<button className="text-alabama-red hover:text-red-800 font-medium">
  Learn More →
</button>
```

### Cards

#### Standard Card
```jsx
<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
  {/* Card content */}
</div>
```

#### Interactive Card (Hover Effect)
```jsx
<div className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-alabama-red transition-all duration-300">
  {/* Card content */}
</div>
```

### Section Headers

#### Standard Section Header
```jsx
<div className="flex items-center mb-8">
  <div className="w-12 h-12 bg-gradient-to-br from-alabama-red to-red-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
    <span className="text-2xl">🎣</span>
  </div>
  <div>
    <h2 className="text-2xl font-bold text-gray-900 font-heading">Section Title</h2>
    <p className="text-gray-600 text-sm">Brief description</p>
  </div>
</div>
```

### Badges

#### Winner Badge (Gold on Alabama Red)
```jsx
<span className="bg-gold-accent text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
  WINNER
</span>
```

#### Category Badge (Themed)
```jsx
<span className="bg-lake-green/10 text-lake-green px-3 py-1 rounded-full text-sm font-medium border border-lake-green/20">
  🎣 Fishing Category
</span>
```

---

## Animations

### Transitions
- **Standard Duration:** `transition-all duration-300` - Default for most interactions
- **Quick Duration:** `transition-colors duration-200` - Color changes only
- **Slow Duration:** `transition-all duration-500` - Large transformations

### Hover Effects
```css
/* Card hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Button hover */
.button:hover {
  transform: scale(1.02);
}
```

### Custom Animations

#### Bob (Fishing Bobber Float)
```css
@keyframes bob {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.bob { animation: bob 3s ease-in-out infinite; }
```

#### Community Pulse
```css
@keyframes community-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
}
.community-pulse { animation: community-pulse 2s infinite; }
```

---

## Iconography

### Icon Style
- **Emoji Icons:** Used for section headers (🎣, 🏆, 📸, 🎥, 🗺️)
- **SVG Icons:** Used for UI elements (arrows, check marks, location pins)
- **Size Standard:** Icon containers are typically `w-10 h-10` or `w-12 h-12`

### Gradient Icon Containers
```jsx
<div className="w-12 h-12 bg-gradient-to-br from-[color] to-[darker-color] rounded-xl flex items-center justify-center shadow-lg">
  <span className="text-2xl">[emoji]</span>
</div>
```

---

## Image Handling

### Aspect Ratios
- **Hero Images:** `aspect-[4/3]` - Main featured images
- **Catch Photos:** `aspect-[5/4]` - Slightly portrait
- **Gallery Images:** `aspect-[16/9]` - Landscape
- **Profile/Avatar:** `aspect-square` - 1:1 ratio

### Image Treatment
```jsx
<div className="relative aspect-[5/4] bg-gradient-to-br from-gray-100 to-gray-200">
  <img 
    src={imageUrl} 
    alt="Description"
    className="w-full h-full object-cover rounded-xl"
  />
</div>
```

---

## Grid & Layout

### Standard Grid Layouts

#### Two-Column Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Content */}
</div>
```

#### Three-Column Layout (Sidebar Right)
```jsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">{/* Main content */}</div>
  <div>{/* Sidebar */}</div>
</div>
```

#### Flex Layout (Height Matching)
```jsx
<div className="flex flex-col lg:flex-row gap-8">
  <div className="lg:w-2/3">{/* Main */}</div>
  <div className="lg:w-1/3">{/* Sidebar */}</div>
</div>
```

---

## Accessibility

### Color Contrast
- All text on Alabama red backgrounds uses white (`#ffffff`) for WCAG AAA compliance
- Body text uses `gray-600` or darker on white backgrounds
- Interactive elements have clear hover and focus states

### Focus States
```css
button:focus, a:focus {
  outline: 2px solid var(--alabama-crimson);
  outline-offset: 2px;
}
```

### Interactive Elements
- Minimum touch target size: 44x44px
- Clear visual feedback on hover
- Keyboard navigation support

---

## Responsive Design

### Breakpoints
- **Mobile:** `< 768px` (default)
- **Tablet:** `md:` `≥ 768px`
- **Desktop:** `lg:` `≥ 1024px`
- **Large Desktop:** `xl:` `≥ 1280px`

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens using Tailwind's responsive prefixes (`md:`, `lg:`, `xl:`).

---

## Best Practices

### Do's ✅
- Use Alabama red for primary actions and brand emphasis
- Apply consistent border radius (lg, xl, 2xl) throughout
- Maintain white space with proper padding and gaps
- Use gradient icon containers for section headers
- Keep hover states smooth with transition utilities
- Apply shadows appropriately (md for buttons, lg for cards)

### Don'ts ❌
- Don't mix border radius sizes within the same component type
- Don't use Alabama red for large background areas
- Don't reduce contrast for accessibility
- Don't forget hover states on interactive elements
- Don't use more than 2-3 accent colors per section
- Don't make text smaller than 12px (text-xs)

---

## Component Color Matrix

| Component Type | Primary Color | Accent Color | Background |
|---------------|---------------|--------------|------------|
| Catch of the Week | Alabama Red | - | White |
| Tournament Winners | Alabama Red | Gold Accent | White |
| Blog/Road Trip | Blog Accent (Purple) | Lake Green | Gray-50 |
| Podcasts | Sunset Orange | - | Gray-50 |
| Photo of the Week | Community Blue | - | White |
| Video of the Week | Deep Blue | - | Gray-50 |
| Guide Registry | Lake Green | Alabama Red | Gray-50 |
| Wildlife Section | Lake Green | - | White |
| Calendar | Community Blue | Alabama Red | White |

---

## Getting Started

### Using CSS Variables
```css
/* In your CSS */
.my-component {
  background-color: var(--alabama-crimson);
  color: var(--foreground);
}
```

### Using Tailwind Classes
```jsx
/* In your JSX */
<div className="bg-alabama-red text-white rounded-2xl shadow-lg p-8">
  Content
</div>
```

---

## Version
Design System Version: 1.0
Last Updated: October 2025
Maintained by: ReelBama Design Team

