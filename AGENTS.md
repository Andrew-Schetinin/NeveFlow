# neveflow — AI assistant rules

## Runtime

Use **Bun** exclusively. Node.js is not supported (`engines` field enforces this).

- `bun <file>` not `node` / `ts-node`
- `bun install` not `npm install` / `yarn` / `pnpm`
- `bun run <script>` not `npm run`
- `bunx <pkg>` not `npx`
- Bun loads `.env` automatically — do not use `dotenv`

## Bun API substitutions

| Use | Instead of |
|---|---|
| `Bun.serve()` | `express`, `fastify`, `hono` |
| `bun:sqlite` | `better-sqlite3` |
| `Bun.redis` | `ioredis` |
| `Bun.sql` | `pg`, `postgres.js` |
| `Bun.file()` | `fs.readFile` / `fs.writeFile` |
| `Bun.$\`cmd\`` | `execa` |
| `WebSocket` (built-in) | `ws` |

`Bun.serve()` handles routing, WebSockets, and HTTPS natively. For frontends, use HTML imports — Bun bundles `.tsx`/`.jsx`/`.css` automatically without Vite or webpack.

## Testing

```bash
bun test        # run all tests
```

Test files: `*.test.ts` / `*.test.tsx`, using `import { test, expect } from "bun:test"`.

## Development

```bash
bun run index.ts       # run
bun --hot index.ts     # run with hot reload
```
