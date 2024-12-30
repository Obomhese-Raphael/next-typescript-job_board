// app/not-found.js

import Link from 'next/link';
import { initClerk } from '@clerk/clerk-react';

// Replace with your actual Clerk app ID and publishable key (consider using environment variables)
initClerk({
    appId: 'app_2qufJF7omhA0oUNLXeiLJQhTnI2',
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-500">
                The page you are looking for does not exist.
            </p>
            {/* Optionally add a link to the homepage */}
            <Link href="/" className="mt-4 text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
}