// check-env.js

require("dotenv").config();

console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);
console.log("Database URL:", process.env.NEXT_PUBLIC_DATABASE_URL);
console.log("Gemini API Key:", process.env.NEXT_PUBLIC_GEMINI_API_KEY);
