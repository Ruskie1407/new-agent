# Isolated Agent Starter (Next.js 14 App Router)

Minimal skeleton for a truly independent agent project.

## Quick start
1. Set environment variables in Vercel:
   - `AGENT_NAME` (any label)
   - `OPENAI_API_KEY` (use a **new** key; ideally a new OpenAI Project)
   - Optional DB: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `DB_SCHEMA`

2. Deploy to Vercel.

## Identity & Health
- Identity page: `/_identity`
- Health check API: `/api/health`

## Notes
- Do **not** set `output: 'export'` in `next.config.js` or API routes will not work.
- Clone this repo to create more fully isolated agents; give each project unique env vars and data backends.
