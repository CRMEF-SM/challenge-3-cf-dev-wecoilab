import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';


const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient);

export {db};