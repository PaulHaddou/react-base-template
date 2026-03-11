# React Base Template

A production-ready React template built with Vite, TypeScript, and modern tooling focused on performance and developer experience.

## Stack

- **React 19** with [React Compiler](https://react.dev/learn/react-compiler) enabled — automatic memoization, no more manual `useMemo`/`useCallback`
- **Vite** — fast dev server and optimized builds
- **TypeScript** — strict type checking
- **Tailwind CSS v4** — utility-first CSS with the new high-performance engine
- **React Router v7** — client-side routing

## Tooling

### Formatter — oxfmt

[oxfmt](https://github.com/nicolo-ribaudo/oxfmt) is used instead of Prettier. It is significantly faster and provides the same formatting guarantees with better DX.

```bash
npm run format        # format all files
```

### Linter — oxlint

[oxlint](https://oxc.rs/docs/guide/usage/linter) replaces ESLint. Written in Rust, it runs 50–100x faster while covering the most important lint rules.

```bash
npm run lint          # lint src/
npm run lint:fix      # lint and auto-fix
```

### Type checking

```bash
npm run typecheck     # runs tsc --noEmit
```

## Git hooks — Husky

[Husky](https://typicode.github.io/husky/) enforces quality gates before every commit.

### `pre-commit`

The following checks run on every commit and will **reject** it if any of them fail:

| Check         | Command           | Fails when                  |
| ------------- | ----------------- | --------------------------- |
| Formatting    | `oxfmt --check .` | Files are not formatted     |
| Linting       | `oxlint src`      | Lint errors are found       |
| Type checking | `tsc --noEmit`    | TypeScript errors are found |

### `commit-msg`

Commit messages are validated with [commitlint](https://commitlint.js.org/) using the [Conventional Commits](https://www.conventionalcommits.org/) spec.

```
feat: add login page
fix: correct padding on mobile nav
chore: update dependencies
```

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start dev server                    |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Preview production build            |
| `npm run format`    | Format all files with oxfmt         |
| `npm run lint`      | Lint `src/` with oxlint             |
| `npm run lint:fix`  | Lint and auto-fix                   |
| `npm run typecheck` | Type-check without emitting files   |
