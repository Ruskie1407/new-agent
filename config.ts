export const cfg = {
  agentName: process.env.AGENT_NAME || "lesson-agent",
  openaiKey: process.env.OPENAI_API_KEY || "",
  dbUrl: process.env.SUPABASE_URL || "",
  dbAnon: process.env.SUPABASE_ANON_KEY || "",
  schema: process.env.DB_SCHEMA || "public"
};
