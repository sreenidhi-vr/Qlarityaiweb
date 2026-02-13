# QlarityAI Logo Assets

## Required File

Place the **Logo.png** file in this directory.

### File Specifications
- **Filename**: `Logo.png` (case-sensitive)
- **Recommended dimensions**: 1200x630 pixels (for optimal OpenGraph display)
- **Format**: PNG with transparency support
- **Path in code**: `/assets/Logo.png`

### Usage

The logo is referenced throughout the application:

#### Metadata (OpenGraph & Twitter Cards)
- `app/layout.tsx` - Main layout metadata
- All use-case layouts:
  - `app/use-cases/education/layout.tsx`
  - `app/use-cases/healthcare/layout.tsx`
  - `app/use-cases/hr-finance/layout.tsx`
  - `app/use-cases/it/layout.tsx`
  - `app/use-cases/manufacturing/layout.tsx`
  - `app/use-cases/retail-logistics/layout.tsx`

#### React Components
- `components/navbar.tsx` - Main navigation logo (180x60 display size)

### Next.js Public Folder

Files in the `/public` directory are served at the root path. This means:
- File location: `/public/assets/Logo.png`
- URL in browser: `https://www.qlarityai.in/assets/Logo.png`
- React/Next.js reference: `/assets/Logo.png`

### Important Notes

1. **Do not use relative paths** like `../assets/Logo.png` or `./assets/Logo.png`
2. **Always use absolute paths** from the public folder: `/assets/Logo.png`
3. The logo will be used for social media previews (LinkedIn, Twitter, Facebook)
4. Ensure the logo has proper branding and is clear at small sizes