import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// Define the required environment variables
const requiredEnvVars = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY'];

// Validate the presence of required environment variables
const missingVars = requiredEnvVars.filter((variable) => !process.env[variable]);

if (missingVars.length > 0) {
  console.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
  process.exit(1); // Fail-fast if validation fails
}

export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
};
