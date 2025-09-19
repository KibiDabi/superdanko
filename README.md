# SuperDanko - Premium Peanut Butter E-commerce

A modern, animated e-commerce platform built with Next.js 14, featuring premium peanut butter products with stunning animations and user interactions.

## 🚀 Features

- **Modern UI/UX**: Built with Tailwind CSS and shadcn/ui components
- **Smooth Animations**: Framer Motion animations throughout the site
- **Authentication**: Clerk integration for user management
- **Database**: Vercel Postgres for data persistence
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Product Management**: Dynamic product pages with variants
- **Shopping Cart**: Full cart functionality with Zustand state management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Authentication**: Clerk
- **Database**: Vercel Postgres
- **State Management**: Zustand
- **Icons**: Lucide React, Heroicons, FontAwesome

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd superdanko
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Vercel Postgres Database
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_database
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🗄️ Database Setup

The project includes seed scripts for initial data:

```bash
# Seed all data
npm run seed

# Or seed individual tables
npm run seedUsers
npm run seedCategories
npm run seedProducts
npm run seedCart
npm run seedOrders
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (about)/           # About page route group
│   ├── (blog)/            # Blog page route group
│   ├── (particles)/       # Ingredients page route group
│   ├── (product)/         # Product detail route group
│   ├── (products)/        # Products listing route group
│   ├── auth/              # Authentication pages
│   ├── components/        # React components
│   └── globals.css        # Global styles
├── components/            # Shared UI components
├── lib/                   # Utility functions and types
├── hooks/                 # Custom React hooks
├── store/                 # Zustand stores
├── scripts/               # Database seed scripts
└── public/                # Static assets
```

## 🎨 Key Components

- **Hero**: Animated landing section with floating particles
- **ProductList**: Dynamic product grid with animations
- **SuperdankoBrain/Arm**: Feature sections with 3D animations
- **Ingredients**: Interactive ingredient showcase
- **Cart**: Shopping cart with real-time updates

## 🔧 Development

- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Formatting**: Prettier (recommended)

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any issues or suggestions, please contact the development team.