export default function IdentityPage() {
  return (
    <pre style={{ padding: 16 }}>
      {JSON.stringify(
        {
          agent: process.env.AGENT_NAME || "default-agent",
          vercelEnv: process.env.VERCEL_ENV || "unknown",
          vercelUrl: process.env.VERCEL_URL || "unknown"
        },
        null,
        2
      )}
    </pre>
  );
}
