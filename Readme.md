# QlarityAI Web Platform

> Enterprise AI-Powered Knowledge Intelligence Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![SEO Score](https://img.shields.io/badge/SEO%20Score-85%2F100-brightgreen?style=for-the-badge)](https://www.qlarityai.in)

## 🎯 Overview

QlarityAI is an enterprise-grade knowledge intelligence platform that transforms how organizations access and leverage their institutional knowledge. Built with cutting-edge AI technology, it provides secure, contextual, and conversational access to enterprise documents, SOPs, compliance frameworks, and more.

## ✨ Key Features

### 🔒 Secure Knowledge Ingestion
- Import and index SOPs, manuals, and compliance frameworks (HIPAA, JCI, ISO, NABH)
- Integration with Slack, Microsoft Teams, and SharePoint
- AES-256 encrypted data handling
- Cloud, hybrid, and on-premises deployment options

### 🧠 Contextual Intelligence
- Hybrid semantic + keyword retrieval system
- Citation-backed answers for accuracy and traceability
- Natural language query processing
- Real-time document analysis

### 💬 Conversational Access
- Multi-channel support (Web, Slack, Microsoft Teams)
- Interactive chat interface with AI assistant
- Document upload and processing capabilities
- Context-aware responses

### 📊 Insights & Analytics
- Identify high-demand topics
- Highlight knowledge gaps
- Customizable audit trails
- Usage analytics dashboard

### 🏛️ Governance & Compliance
- Role-based access control
- Audit trail tracking
- Compliance framework support
- Secure document management

### 🔍 SEO & Social Media Optimization
- **Dynamic Sitemap** - Auto-generated XML sitemap with 12+ pages
- **Structured Data** - JSON-LD schema for Organization, SoftwareApplication, and WebSite
- **OG Image Generation** - Dynamic Open Graph images for all pages (1200×630px)
- **robots.txt** - Proper search engine crawling configuration
- **Page-Specific Metadata** - Unique titles, descriptions, and keywords for each page
- **Image Optimization** - WebP/AVIF support with Next.js Image optimization

## 🏭 Industry Use Cases

- **🏥 Healthcare**: Clinical protocols & compliance assistant
- **🏭 Manufacturing**: SOP & maintenance assistant
- **💻 IT**: Developer documentation assistant
- **🎓 Education**: Faculty & student knowledge hub
- **💼 HR & Finance**: Policy Q&A, compliance automation
- **🛒 Retail & Logistics**: Supplier & product query engine

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - Latest UI library with React Compiler
- **TypeScript 5** - Static type checking and type safety

### UI & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - 20+ accessible, unstyled component primitives
- **shadcn/ui** - Beautiful, customizable UI components
- **Lucide React 0.454.0** - Modern icon library (1000+ icons)
- **next-themes** - Advanced theme management (light/dark mode)
- **Geist Font** - Modern, clean typography

### Component Library
- **Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu**
- **Hover Card, Label, Navigation Menu, Popover, Progress Bar**
- **Radio Group, Scroll Area, Select, Separator, Slider, Switch**
- **Tabs, Toast/Sonner, Toggle, Tooltip**
- **cmdk** - Command palette component
- **Vaul** - Drawer component
- **Recharts** - Chart and data visualization library

### Forms & Validation
- **React Hook Form** - Performant form state management
- **@hookform/resolvers** - Validation resolvers
- **Zod 3.25.76** - TypeScript-first schema validation
- **input-otp** - One-time password input component

### AI & Analytics
- **Vercel AI SDK 5.0.87** - AI/LLM integration toolkit
- **@vercel/analytics** - Built-in Vercel Analytics
- **date-fns 4.1.0** - Modern date utility library

### Email & Communication
- **Resend** - Modern email API
- **@react-email/render** - React email component rendering

### Utilities
- **class-variance-authority** - CVA for component variants
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind CSS classes intelligently
- **tailwindcss-animate** - Tailwind animation utilities
- **tw-animate-css** - Additional animation utilities

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS transformation
- **Autoprefixer 10.4.20** - Automatic vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/qlarityaiweb.git
cd qlarityaiweb
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
qlarityaiweb/
├── app/                          # Next.js App Router (Pages & Layouts)
│   ├── api/                     # API Routes
│   │   ├── og/route.tsx         # Dynamic OG image generation (Edge runtime)
│   │   └── request-demo/route.ts # Demo request handler
│   ├── use-cases/               # Industry-specific pages with SEO metadata
│   │   ├── healthcare/          # Healthcare AI solutions
│   │   │   ├── page.tsx        # Page component
│   │   │   ├── client-page.tsx # Client-side logic
│   │   │   └── layout.tsx      # SEO metadata & layout
│   │   ├── manufacturing/       # Manufacturing AI solutions
│   │   ├── it/                 # IT & Technology solutions
│   │   ├── education/          # Education AI solutions
│   │   ├── hr-finance/         # HR & Finance solutions
│   │   └── retail-logistics/   # Retail & Logistics solutions
│   ├── seo-dashboard/          # SEO analytics dashboard (78/100 score)
│   │   └── page.tsx
│   ├── globals.css             # Global styles & Tailwind config
│   ├── layout.tsx              # Root layout with JSON-LD schema
│   ├── page.tsx                # Homepage with hero, features, use cases
│   └── sitemap.ts              # Dynamic XML sitemap (11 pages)
│
├── components/                   # React Components
│   ├── ui/                      # shadcn/ui Base Components
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── dialog.tsx          # Modal dialog
│   │   ├── input.tsx, label.tsx # Form inputs
│   │   ├── progress.tsx        # Progress bar
│   │   ├── sheet.tsx           # Slide-out panel
│   │   ├── toast.tsx, toaster.tsx # Toast notifications
│   │   └── ...                 # 20+ additional UI components
│   ├── shared/                  # Shared Business Components
│   │   ├── benefit-card.tsx    # Benefit display card
│   │   ├── cta-section.tsx     # Call-to-action section
│   │   ├── page-hero.tsx       # Page hero component
│   │   └── use-case-card.tsx   # Use case display card
│   ├── navbar.tsx              # Navigation bar with logo & CTA
│   ├── hero.tsx                # Homepage hero section
│   ├── features.tsx            # Features showcase
│   ├── problem-demo.tsx        # Problem demonstration section
│   ├── problem-visualization.tsx # Visual problem display
│   ├── document-upload.tsx     # Document upload component
│   ├── demo-request-modal.tsx  # Demo request modal
│   ├── api-status-checker.tsx  # API health status checker
│   ├── scroll-to-top.tsx       # Scroll to top button
│   └── theme-provider.tsx      # Dark/light theme provider
│
├── lib/                          # Utility Functions
│   ├── api-client.ts            # API client & fetch utilities
│   ├── document-processor.ts    # Document processing logic
│   ├── encoding-utils.ts        # Encoding/decoding helpers
│   ├── scroll-to-top.ts         # Scroll utilities
│   └── utils.ts                 # General helper functions (cn, etc.)
│
├── hooks/                        # Custom React Hooks
│   └── use-toast.ts             # Toast notification hook
│
├── public/                       # Static Assets
│   ├── robots.txt               # Search engine crawling rules
│   └── assets/
│       ├── Logo.png             # QlarityAI logo (180x60)
│       └── README.md            # Assets documentation
│
├── styles/
│   └── globals.css              # Additional global styles
│
├── Configuration Files
├── next.config.mjs              # Next.js config (image optimization, TypeScript)
├── next-seo.config.js           # SEO configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS config
├── tailwind.config.ts           # Tailwind CSS config (implied)
├── components.json              # shadcn/ui configuration
├── package.json                 # Dependencies & scripts
└── .gitignore                   # Git ignore rules
│
└── Documentation Files
    ├── README.md                # This file
    ├── SEO-IMPLEMENTATION-SUMMARY.md  # Complete SEO audit & improvements
    ├── OG-IMAGE-IMPLEMENTATION.md     # OG image generation guide
    └── SEO-AUDIT-REPORT.md           # Initial SEO analysis
\`\`\`

## 🔌 API Endpoints

### Internal APIs
- **`/api/og`** - Dynamic OG image generation (Edge runtime, 1200×630px PNG)
  - Query params: `?title=Your%20Title`
  - Used for Open Graph social media images
- **`/api/request-demo`** - Demo request submission endpoint
  - Method: POST
  - Handles demo request form submissions

### SEO & Discovery
- **`/sitemap.xml`** - Dynamic XML sitemap (11 pages, auto-generated)
- **`/robots.txt`** - Search engine crawling configuration

### Pages (11 Total in Sitemap)
1. **`/`** - Homepage (Priority: 1.0)
2. **`/use-cases/healthcare`** - Healthcare solutions (Priority: 0.8)
3. **`/use-cases/manufacturing`** - Manufacturing solutions (Priority: 0.8)
4. **`/use-cases/it`** - IT solutions (Priority: 0.8)
5. **`/use-cases/education`** - Education solutions (Priority: 0.8)
6. **`/use-cases/hr-finance`** - HR & Finance solutions (Priority: 0.8)
7. **`/use-cases/retail-logistics`** - Retail & Logistics solutions (Priority: 0.8)
8. **`/capabilities`** - Platform capabilities (Priority: 0.7)
9. **`/try`** - Interactive demo (Priority: 0.9)
10. **`/status`** - System status (Priority: 0.5)
11. **`/seo-dashboard`** - SEO analytics (Priority: 0.3, robots: disallow)

## 📜 Available Scripts

\`\`\`bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production (optimized bundle)
npm run start     # Start production server
npm run lint      # Run ESLint for code quality
\`\`\`

### Development Workflow
1. **Development**: `npm run dev` - Hot reload at http://localhost:3000
2. **Build**: `npm run build` - Creates optimized production build
3. **Production**: `npm run start` - Serves production build locally
4. **Lint**: `npm run lint` - Checks code quality and standards

## 🎨 Theme & UI Features

### Theme Support
- **Light & Dark Modes** - Full theme support using `next-themes`
- **System Preference Detection** - Automatic theme based on OS settings
- **Smooth Transitions** - Animated theme switching
- **Persistent Selection** - Theme preference saved in localStorage

### Design System
- **Geist Font Family** - Modern, clean typography
- **Custom Color Palette** - Tailwind-based design tokens
- **Consistent Spacing** - 8px baseline grid system
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant with Radix UI

## 📈 SEO Features

### Structured Data (JSON-LD)
The platform includes comprehensive structured data markup:
- **Organization Schema** - Company information with logo and social links
- **SoftwareApplication Schema** - Product details, pricing, and ratings
- **WebSite Schema** - Website structure and publisher information

### Open Graph Images
All pages feature dynamically generated OG images:
- **Resolution**: 1200×630px (optimized for all social platforms)
- **Design**: Dark AI-themed with blue/purple gradients
- **Branding**: QlarityAI logo and tagline
- **Dynamic Titles**: Unique images for each page

### Page-Specific SEO
Every use case page has unique:
- Title tags optimized for target keywords
- Meta descriptions (150-160 characters)
- Industry-specific keywords
- Open Graph and Twitter Card metadata

### Technical SEO
- **Sitemap**: Auto-generated XML sitemap with proper priorities
- **robots.txt**: Configured for optimal crawling
- **Image Optimization**: WebP/AVIF format support
- **Mobile-Friendly**: Responsive design across all devices
- **Core Web Vitals**: Optimized for performance

**Current SEO Score**: 85/100 (improved from 65/100)

## 📦 Key Dependencies

### Production Dependencies (30+)
| Package | Version | Purpose |
|---------|---------|---------|
| **next** | 16.0.7 | Core React framework with App Router |
| **react** | 19.2.0 | UI library with React Compiler |
| **react-dom** | 19.2.0 | React DOM rendering |
| **typescript** | ^5 | Static type checking |
| **ai** | 5.0.87 | Vercel AI SDK for LLM integration |
| **@vercel/analytics** | latest | Built-in analytics |
| **@radix-ui/react-*** | latest | 20+ accessible UI primitives |
| **tailwindcss** | 4.1.9 | Utility-first CSS framework |
| **@tailwindcss/postcss** | 4.1.9 | Tailwind PostCSS plugin |
| **lucide-react** | 0.454.0 | Icon library (1000+ icons) |
| **react-hook-form** | latest | Form state management |
| **zod** | 3.25.76 | Schema validation |
| **next-themes** | latest | Theme management |
| **date-fns** | 4.1.0 | Date utilities |
| **recharts** | latest | Chart library |
| **resend** | latest | Email API |
| **sonner** | latest | Toast notifications |
| **cmdk** | latest | Command palette |
| **clsx** | 2.1.1 | className utility |
| **tailwind-merge** | 2.5.5 | Tailwind class merging |
| **class-variance-authority** | 0.7.1 | Component variants |

### Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| **@types/node** | ^22 | Node.js type definitions |
| **@types/react** | ^19 | React type definitions |
| **@types/react-dom** | ^19 | React DOM type definitions |
| **autoprefixer** | 10.4.20 | CSS vendor prefixing |
| **postcss** | ^8.5 | CSS transformation |

## 🚢 Deployment

### Vercel Deployment (Recommended)
The project is optimized for Vercel with zero-configuration deployment:

**Live URL**: [https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain](https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain)

#### Quick Deploy
1. **Connect Repository**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Environment Variables** (Optional)
   - No required environment variables for basic deployment
   - Add API keys for AI features if needed

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Live in ~2-3 minutes

#### Deployment Features
✅ **Automatic Builds** - Triggered on git push
✅ **Edge Runtime** - Global CDN with low latency
✅ **Image Optimization** - Automatic WebP/AVIF conversion
✅ **Analytics** - Built-in Vercel Analytics enabled
✅ **HTTPS** - Automatic SSL certificates
✅ **Preview Deployments** - Every PR gets a preview URL

### Post-Deployment SEO Checklist
After your first deployment:

- [ ] **Submit sitemap.xml to Google Search Console**
  - URL: `https://yourdomain.com/sitemap.xml`
  - [Google Search Console](https://search.google.com/search-console)
  
- [ ] **Submit sitemap to Bing Webmaster Tools**
  - [Bing Webmaster Tools](https://www.bing.com/webmasters)
  
- [ ] **Verify structured data**
  - [Rich Results Test](https://search.google.com/test/rich-results)
  - Test URL: `https://yourdomain.com`
  
- [ ] **Test OG images on social platforms**
  - [OpenGraph.xyz](https://www.opengraph.xyz)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  
- [ ] **Update Google verification code**
  - Edit [`app/layout.tsx`](app/layout.tsx:70)
  - Replace placeholder with your code
  
- [ ] **Set up Google Analytics 4** (Optional)
  - Add GA4 tracking code to layout
  
- [ ] **Monitor Core Web Vitals**
  - Use Vercel Analytics dashboard
  - Check PageSpeed Insights regularly

## 🔒 Security & Performance

### Security Features
- **TypeScript Strict Mode** - Type safety across the codebase
- **Input Validation** - Zod schema validation on all forms
- **HTTPS Only** - Enforced on production
- **No Exposed API Keys** - Environment variable management
- **Content Security Policy** - XSS protection (configurable)

### Performance Optimizations
- **Edge Runtime** - OG image generation on Edge
- **Image Optimization** - Next.js Image with WebP/AVIF
- **Code Splitting** - Automatic route-based splitting
- **Font Optimization** - Geist font with `font-display: swap`
- **Lazy Loading** - Components and images loaded on demand
- **Tree Shaking** - Unused code eliminated in production
- **Minification** - CSS and JS automatically minified

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🧪 Testing & Quality

### Code Quality
- **ESLint** - Configured with Next.js recommended rules
- **TypeScript** - Strict mode enabled for type safety
- **Consistent Formatting** - Enforced code style

### Browser Support
- **Chrome/Edge**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Mobile**: iOS Safari 12+, Chrome Android

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit your changes**: `git commit -m 'Add some feature'`
4. **Push to the branch**: `git push origin feature/your-feature`
5. **Submit a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use existing component patterns
- Maintain accessibility standards
- Write descriptive commit messages
- Test on multiple browsers before submitting

## 📄 License

This project is **private and proprietary**. All rights reserved by QlarityAI.

## 📧 Contact & Support

### Get in Touch
- **Request a Demo**: Visit [www.qlarityai.in](https://www.qlarityai.in) and click "Request Demo"
- **Business Inquiries**: Use the demo request form on the website
- **Technical Support**: Available to enterprise customers

### Follow Us
- **LinkedIn**: [linkedin.com/company/qlarityai](https://www.linkedin.com/company/qlarityai)
- **Twitter/X**: [@qlarityai](https://twitter.com/qlarityai)

## 📚 Additional Documentation

Comprehensive documentation available in the repository:

- **[SEO Implementation Summary](SEO-IMPLEMENTATION-SUMMARY.md)** - Complete SEO audit report with 85/100 score
- **[OG Image Implementation](OG-IMAGE-IMPLEMENTATION.md)** - Dynamic Open Graph image generation guide
- **[SEO Audit Report](SEO-AUDIT-REPORT.md)** - Initial SEO analysis and recommendations

## 🏆 Achievements

✅ **SEO Score**: 85/100 (improved from 65/100)
✅ **11 Pages Indexed** - Complete sitemap with proper priorities
✅ **Dynamic OG Images** - Branded social media images for all pages
✅ **Structured Data** - Rich snippets with Organization & SoftwareApplication schema
✅ **Mobile-Friendly** - Responsive design across all devices
✅ **Performance Optimized** - Fast loading with Next.js 16
✅ **Accessibility** - WCAG 2.1 AA compliant with Radix UI

## 🚀 Future Roadmap

- [ ] Blog section with AI industry insights
- [ ] Case studies from enterprise customers
- [ ] Interactive product demos
- [ ] API documentation portal
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Integration marketplace

---

<div align="center">

**Built with ❤️ by the QlarityAI Team**

[🌐 Website](https://www.qlarityai.in) • [📧 Request Demo](https://www.qlarityai.in) • [🔍 SEO Dashboard](https://www.qlarityai.in/seo-dashboard)

*Clarity Delivered by AI*

</div>
