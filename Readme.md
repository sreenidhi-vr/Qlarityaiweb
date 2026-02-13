# QlarityAI Web Platform

> Enterprise AI-Powered Knowledge Intelligence Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

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

## 🏭 Industry Use Cases

- **🏥 Healthcare**: Clinical protocols & compliance assistant
- **🏭 Manufacturing**: SOP & maintenance assistant
- **💻 IT**: Developer documentation assistant
- **🎓 Education**: Faculty & student knowledge hub
- **💼 HR & Finance**: Policy Q&A, compliance automation
- **🛒 Retail & Logistics**: Supplier & product query engine

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

### AI & Data
- **Vercel AI SDK** - AI integration
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

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
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   │   ├── capabilities/    # Platform capabilities endpoint
│   │   ├── chat/           # AI chat endpoint
│   │   ├── health/         # Health check endpoint
│   │   ├── live/           # Live status endpoint
│   │   ├── request-demo/   # Demo request handler
│   │   └── status/         # System status endpoint
│   ├── use-cases/          # Industry-specific pages
│   │   ├── education/
│   │   ├── healthcare/
│   │   ├── hr-finance/
│   │   ├── it/
│   │   ├── manufacturing/
│   │   └── retail-logistics/
│   ├── capabilities/        # Capabilities showcase
│   ├── seo-dashboard/      # SEO analytics
│   ├── status/             # System status page
│   ├── try/                # Interactive demo
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/              # Reusable components
│   ├── ui/                 # Base UI components
│   ├── shared/             # Shared components
│   └── [feature-components]
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
│   ├── api-client.ts       # API client utilities
│   ├── document-processor.ts # Document processing
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
└── styles/                  # Additional styles
\`\`\`

## 🔌 API Endpoints

- **`/api/capabilities`** - Get platform capabilities
- **`/api/chat`** - AI chat interface
- **`/api/health`** - Health check
- **`/api/live`** - Live status updates
- **`/api/request-demo`** - Demo request submission
- **`/api/status`** - System status information

## 📜 Available Scripts

\`\`\`bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
\`\`\`

## 🎨 Theme Support

The platform supports both light and dark themes with automatic system preference detection. Theme switching is available via the navbar.

## 📦 Key Dependencies

- **Next.js 16.0.7** - Core framework
- **React 19.2.0** - UI library
- **Vercel AI SDK 5.0.87** - AI capabilities
- **Radix UI** - Component primitives
- **Tailwind CSS 4.1.9** - Styling
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod 3.25.76** - Schema validation

## 🚢 Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables (if needed)
4. Deploy

**Live URL**: [https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain](https://vercel.com/info-31265398s-projects/v0-qlarityaiwebmain)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📧 Contact

For more information or to request a demo, visit the platform and use the "Request Demo" feature.

---

Built with ❤️ by the QlarityAI Team
