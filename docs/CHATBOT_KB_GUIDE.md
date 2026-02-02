# Chatbot Knowledge Base Guide

This backend loads the chatbot knowledge base from a JSON file so responses can be updated without changing code.

## Where is the KB?

- File: `data/chatbot_knowledge_base.json`
- Override path via environment variable: `CHATBOT_KB_PATH`

## Structure

The KB is organized by topics:

- `open_source`: Contribution workflow FAQs
- `project`: Features, backend structure, usage
- `developer`: Common developer and platform FAQs
- `guidelines`: Supported queries and update instructions

Example entries:

```json
{
  "open_source": {
    "faqs": [
      { "q": "How do I start contributing?", "a": "Fork, branch, commit, PR." }
    ]
  }
}
```

## Supported Queries

- Open source contribution workflow and PR steps
- Project features, structure, and usage
- Developer setup, environment, and troubleshooting

## Update Instructions

1. Edit `data/chatbot_knowledge_base.json` and add or revise entries.
2. Keep questions concise and answers actionable.
3. Do not include secrets, tokens, or personal data.
4. Commit changes with a clear message (e.g., `docs: update chatbot KB`).
5. If using a custom path, set `CHATBOT_KB_PATH` in `.env`.

## Notes

- If the JSON fails to load, the service falls back to the embedded KB.
- Restart the backend after changes to ensure the latest KB is loaded.
