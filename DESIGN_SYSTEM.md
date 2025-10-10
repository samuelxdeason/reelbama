# ReelBama Design System & Brand Guidelines

## Brand Identity

### Logo
- **Primary Logo**: ReelBama logo with fishing reel icon
- **Size Guidelines**: 
  - Navigation: `w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36`
  - Footer: `w-20 h-20 md:w-24 md:h-24`
- **Usage**: Always maintain aspect ratio and use `object-contain`
- **Effects**: `hover:scale-105 transition-transform duration-300 drop-shadow-xl`

### Typography
- **Primary Font**: Montserrat (--font-montserrat) - Sans-serif, modern, clean
- **Secondary Font**: Lora (--font-lora) - Serif, elegant, readable
- **Font Classes**:
  - `.font-heading` - Montserrat, bold, for headlines
  - `.font-body` - Lora, for body text

### Color Palette

#### Primary Colors
- **Slate (Primary Text/Backgrounds)**:
  - `slate-900` (#0f172a) - Primary text, dark elements
  - `slate-800` (#1e293b) - Borders, buttons, accents
  - `slate-700` (#334155) - Secondary text
  - `slate-600` (#475569) - Muted text
  - `slate-500` (#64748b) - Disabled states

- **Amber (Accent/Brand)**:
  - `amber-600` (#d97706) - Primary accent, hover states
  - `amber-500` (#f59e0b) - Secondary accent, highlights
  - `amber-400` (#fbbf24) - Light accents, borders
  - `amber-100` (#fef3c7) - Light backgrounds, badges

#### Supporting Colors
- **White**: `#ffffff` - Clean backgrounds, cards
- **Gray**: `gray-50` (#f9fafb) - Page backgrounds
- **Emerald**: `emerald-600` (#059669) - Success states, nature elements
- **Blue**: `blue-600` (#2563eb) - Information, links

## Component Guidelines

### Navigation
- **Background**: `bg-white`
- **Border**: `border-b-4 border-slate-800`
- **Shadow**: `shadow-lg`
- **Height**: `h-28 md:h-36 lg:h-40`
- **Logo**: Large, prominent with drop shadow
- **Links**: `text-slate-800 hover:text-amber-600`
- **Dropdowns**: White background with slate borders, high z-index

### Buttons
- **Primary**: `bg-slate-800 text-white hover:bg-slate-900 border-2 border-slate-800`
- **Secondary**: `bg-amber-500 text-white hover:bg-amber-600 border-2 border-amber-400`
- **Outlined**: `border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white`
- **Style**: `font-bold py-3 px-6 md:px-8 rounded-md transition-all duration-300 uppercase tracking-wide`

### Cards & Sections
- **Background**: `bg-white` or `bg-gray-50`
- **Border**: `border-2 border-slate-300` or `border-4 border-slate-800` for emphasis
- **Shadow**: `shadow-lg` or `shadow-xl` for depth
- **Padding**: `p-6 md:p-8`
- **Rounded**: `rounded-lg` or `rounded-xl`

### Headers & Titles
- **Main Headlines**: `text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-slate-900`
- **Section Headers**: `text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-slate-900`
- **Subheadings**: `text-xl md:text-2xl font-bold text-slate-900`
- **Body Text**: `text-base md:text-lg text-slate-700 font-body`

### Badges & Labels
- **Primary Badge**: `bg-amber-100 text-amber-700 px-4 py-2 rounded-md font-bold uppercase tracking-wide border-2 border-amber-200`
- **Status Badge**: `bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold`

## Layout Principles

### Spacing
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-12 md:py-16 lg:py-24`
- **Grid Gaps**: `gap-8 md:gap-12`
- **Element Spacing**: `mb-4 md:mb-6` for consistent rhythm

### Grid Systems
- **Two Column**: `grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12`
- **Three Column**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
- **Responsive**: Always mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints

### Borders & Shadows
- **Light Borders**: `border-2 border-slate-300`
- **Emphasis Borders**: `border-4 border-slate-800`
- **Card Shadows**: `shadow-lg` or `shadow-xl`
- **Text Shadows**: `drop-shadow-lg` for overlays

## Interactive Elements

### Hover States
- **Links**: `hover:text-amber-600`
- **Buttons**: `hover:bg-slate-900` or `hover:bg-amber-600`
- **Cards**: `hover:shadow-xl hover:scale-105`
- **Images**: `hover:scale-105 transition-transform duration-300`

### Transitions
- **Standard**: `transition-all duration-300`
- **Transforms**: `transition-transform duration-300`
- **Color Changes**: `transition-colors duration-200`

### Focus States
- **Accessibility**: `focus:outline-none focus:ring-2 focus:ring-amber-600`
- **Input Fields**: `focus:border-amber-600 focus:ring-2 focus:ring-amber-600`

## Content Guidelines

### Tone & Voice
- **Professional**: Clean, modern, trustworthy
- **Outdoorsy**: Natural, adventurous, community-focused
- **Alabama Pride**: Local, authentic, welcoming
- **Fishing Expertise**: Knowledgeable, helpful, experienced

### Imagery
- **Style**: High-quality, natural lighting, outdoor scenes
- **Content**: Fishing, Alabama landscapes, community events
- **Treatment**: Subtle overlays, proper aspect ratios, consistent sizing

### Icons & Emojis
- **Usage**: Strategic use for visual interest and personality
- **Style**: Consistent sizing, meaningful placement
- **Examples**: 🎣 🏆 📸 💬 🐟 🗺️ 🌡️ 📅

## Responsive Design

### Breakpoints
- **Mobile**: Default (320px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

### Mobile Considerations
- **Touch Targets**: Minimum 44px height
- **Readable Text**: Minimum 16px font size
- **Simplified Navigation**: Collapsible menus
- **Stacked Layouts**: Single column on mobile

## Accessibility

### Color Contrast
- **Text on White**: Slate-900 (4.5:1 ratio minimum)
- **Text on Dark**: White or light gray
- **Interactive Elements**: Clear hover/focus states

### Typography
- **Line Height**: `leading-relaxed` (1.7) for body text
- **Letter Spacing**: `tracking-tight` for headlines, `tracking-wide` for uppercase
- **Font Weights**: Bold for emphasis, semibold for secondary

## Implementation Notes

### CSS Classes
- Use Tailwind utility classes for consistency
- Create custom classes only when necessary
- Maintain consistent naming conventions

### Component Structure
- Mobile-first responsive design
- Consistent spacing and typography
- Proper semantic HTML structure
- Accessible form elements and navigation

### Performance
- Optimize images for web
- Use appropriate image formats (WebP when possible)
- Implement lazy loading for below-fold content

---

*This design system should be referenced for all new pages and components to maintain visual consistency and brand identity across the ReelBama platform.*
