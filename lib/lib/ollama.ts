const OLLAMA_BASE = "http://localhost:11434";

export async function callOllamaChat(args: {
  model: string;
  prompt: string;
  json?: boolean;
}) {
  const { model, prompt, json } = args;

  const body: any = {
    model,
    messages: [{ role: "user", content: prompt }],
    stream: false,
  };

  if (json) {
    body.format = "json";
  }

  const res = await fetch(`${OLLAMA_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ollama error: ${res.status} ${text}`);
  }

  const data = await res.json();
  const content: string = data.message?.content ?? "";
  return content;
}
