# Contributing to neveflow

## Prerequisites

- [Bun](https://bun.com) — this project uses Bun exclusively; Node.js is not supported.

## Setup

```bash
git clone https://github.com/your-org/neveflow.git
cd neveflow
bun install

# In order to initialize Fission-AI OpenSpec
bunx openspec init
```

## Running

See the [README](README.md) — the pipeline is driven by scripts in `scripts/`. 
Full setup details will be added as the project matures.

## Testing

```bash
bun test
```

## Windows

This repository uses symlinks (`CLAUDE.md`, `.github/copilot-instructions.md`) to keep AI assistant configuration in sync from a single source (`AGENTS.md`). Git on Windows does not create symlinks by default.

Enable symlink support before cloning:

```bash
git config --global core.symlinks true
```

Then clone normally. Without this, the symlinks check out as plain text files containing the path string, which breaks the AI assistant integrations.

## AI assistant configuration

Project rules for AI assistants live in `AGENTS.md`. This file is the single source of truth and is referenced by:

| Assistant | File |
|---|---|
| Claude Code | `CLAUDE.md` → symlink |
| GitHub Copilot | `.github/copilot-instructions.md` → symlink |
| Cursor | `.cursor/rules/core.mdc` → `@file` reference |
| OpenAI Codex, Gemini CLI | `AGENTS.md` directly |

To update rules for all assistants, edit only `AGENTS.md`.
