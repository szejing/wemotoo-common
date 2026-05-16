---
name: shared-contract-update
description: Add or change shared enums, constants, metadata, and pure utilities in wemotoo-common. Use when backend, CRM portal, and/or storefront need the same canonical value or helper.
---

# Shared Contract Update

Use this skill when editing `wemotoo-common/`.

## What Belongs Here

- Enums used by two or more projects.
- Constants such as API paths, cookie/header keys, setting codes, and canonical status values.
- Entity relation metadata shared by backend and frontend code.
- Pure utilities that are framework-agnostic and safe for the intended runtime.
- Request signing helpers shared by backend and Nuxt server code.

## What Does Not Belong Here

- Vue/Nuxt composables, components, routes, middleware, or UI types.
- NestJS decorators, providers, guards, modules, or TypeORM-specific runtime code.
- App-specific business workflows only used by one project.
- Browser code that imports Node-only APIs through the browser entry point.

## Export Workflow

1. Add the file under `src/constants/`, `src/enum/`, `src/metadata/`, or `src/utils/`.
2. Re-export it from the subfolder `index.ts`.
3. Verify top-level entry points expose it:
   - `index.esm.ts`
   - `index.cjs.ts`
   - `index.browser.esm.ts` only when browser-safe.
4. Run `npm run build`.
5. Update consumers in `ecommerce-nestjs`, `wemotoo-crm-portal`, and/or `wemotoo-webapp`.

## Browser Safety

- `index.browser.esm.ts` must not export utilities that require `node:crypto`, `fs`, `path`, process-only APIs, or server secrets.
- If a utility has server and browser variants, export the browser-safe variant from `src/utils/index.browser.ts`.
- Keep signing/hash helpers aligned with backend guards and both Nuxt `server/base_api.ts` files.

## Quality Rules

- Prefer explicit TypeScript return types.
- Avoid `any`; use unions, generics, or unknown with narrowing.
- Keep utilities pure and side-effect free.
- Do not log at import time.
- Minimize dependencies; do not add framework packages.
