# neveflow

Enterprise-grade Snowflake database migration pipeline using [Flyway](https://flywaydb.org/), with AI-assisted authoring via Claude Code and CI/CD orchestration on GitHub Actions + AWS.

Designed as a production-ready template: fork it, run the setup script, and have a working pipeline by end of day.

## What it does

- Ordered, auditable migration history across multiple Snowflake databases and environments (DEV, TEST, PROD)
- Idempotent repeatable migrations for VIEWs, stored procedures, UDFs, Tasks, and Streams
- RBAC (roles, grants, future grants) versioned alongside schema
- Clone-based migration testing — a zero-copy Snowflake clone is created per PR, migrations are applied from scratch, then the clone is dropped
- Post-migration DDL extraction and drift detection — Git-tracked DDL snapshots catch out-of-band schema changes
- External API contract checking — designated objects are validated for breaking changes on every migration PR
- First-time import of an existing database — one command generates the baseline migration from live DDL
- AI-assisted authoring — Claude Code skills generate and review migration files; spec-first workflow via [OpenSpec](https://github.com/Fission-AI/OpenSpec/)
- Secrets via AWS Secrets Manager — same code path for local development and CI; no credentials on disk

## Stack

Snowflake · Flyway · GitHub Actions · AWS (Secrets Manager, IAM OIDC) · Bun · TypeScript · Claude Code

## Getting started

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions.

## License

Apache 2.0 — see [LICENSE](LICENSE).
