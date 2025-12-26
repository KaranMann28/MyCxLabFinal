# Gorgias Brand Assets

This folder contains all branding assets for the CX Lab project.

## Folder Structure

```
assets/
├── logos/           # Gorgias logos (SVG, PNG)
├── icons/           # UI icons and custom icons
├── fonts/           # Custom font files (if any)
├── images/          # General images and illustrations
└── brand/           # Brand guidelines, color palettes, etc.
```

## Usage

Import assets in your components:

```tsx
// For images/logos
import logo from '../assets/logos/gorgias-logo.svg';

// Or use public folder for static assets
<img src="/assets/logos/gorgias-logo.svg" alt="Gorgias" />
```

## Brand Colors (Reference)

| Color Name      | Hex Code  | Usage                    |
|-----------------|-----------|--------------------------|
| Gorgias Peach   | #FFD9C7   | Primary background       |
| Gorgias Salmon  | #F5A38A   | Accent, hover states     |
| Gorgias Coral   | #E8826E   | Primary actions, charts  |
| Gorgias Dark    | #1A1A1A   | Text, headings           |
| Gorgias Black   | #000000   | Strong emphasis          |

## Adding New Assets

1. Place files in the appropriate subfolder
2. Use descriptive, kebab-case names (e.g., `gorgias-logo-dark.svg`)
3. Prefer SVG for logos and icons
4. Optimize images before adding (use tools like TinyPNG)


