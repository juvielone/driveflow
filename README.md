# DriveFlow - Driving Instructor Management Platform

DriveFlow is a comprehensive platform for driving instructors to manage their schedules, availability, and student bookings with ease.

## Features

- 🔐 **User Authentication** - Secure login and registration with Supabase
- 📅 **Schedule Management** - Manage your availability and bookings
- 👥 **Student Management** - Track and manage your students
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase account

### Environment Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd driveflow
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Create the `profiles` table in your Supabase database:

```sql
CREATE TABLE profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  driving_school TEXT NOT NULL,
  license_number TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
```

4. Enable email authentication in Supabase Dashboard > Authentication > Settings

### Running the Application

1. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   └── layout.tsx         # Root layout with AuthProvider
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
│   └── useAuth.tsx       # Authentication hook
├── lib/                  # Utility libraries
│   ├── auth.ts           # Authentication service
│   └── supabaseClient.ts # Supabase client configuration
└── types/                # TypeScript type definitions
    └── supabase.ts       # Supabase database types
```

## Authentication Flow

The app uses Supabase Auth with the following flow:

1. **Registration**: Users create an account with email/password and profile information
2. **Login**: Users sign in with email/password
3. **Profile Management**: User profiles are stored in the `profiles` table linked to auth users
4. **Protected Routes**: Authentication state is managed via React Context

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.
