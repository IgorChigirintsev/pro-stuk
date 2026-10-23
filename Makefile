.PHONY: backend-run backend-test aab site-dev site-build tree-validate

tree-validate:
	node shared/validate-tree.mjs

backend-run:
	cd backend && go run ./cmd/api

backend-test:
	cd backend && go test ./...


aab:
	bash scripts/publish-aab.sh

site-dev:
	cd site && npm run dev

site-build:
	cd site && npm run build
