.PHONY: backend-run backend-test apk site-dev site-build tree-validate

tree-validate:
	node shared/validate-tree.mjs

backend-run:
	cd backend && go run ./cmd/api

backend-test:
	cd backend && go test ./...

apk:
	bash scripts/publish-apk.sh

site-dev:
	cd site && npm run dev

site-build:
	cd site && npm run build
