import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { user } from './schema';

// Load environment variables from .env file
config({
  path: '.env',
});

async function createTestUser(email: string, password: string) {
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL is not defined');
  }

  const client = postgres(process.env.POSTGRES_URL);
  const db = drizzle(client);

  try {
    // Hash the password
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    // Create the user
    await db.insert(user).values({
      email,
      password: hashedPassword,
    });

    console.log('✅ Test user created successfully');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (error) {
    console.error('Failed to create test user:', error);
    throw error;
  } finally {
    await client.end();
  }
}

// Create a test user
const email = 'test@example.com';
const password = 'password123';

createTestUser(email, password)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  }); 