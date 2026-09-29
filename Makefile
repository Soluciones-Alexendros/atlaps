.PHONY: lint test smoke validate validate-docs

lint:
	pnpm format:check
	pnpm lint
	pnpm typecheck

test:
	pnpm test

smoke:
	pnpm test:e2e

validate-docs:
	bash scripts/validate-docs.sh

validate: lint test validate-docs
