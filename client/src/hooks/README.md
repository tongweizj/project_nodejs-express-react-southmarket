# Hooks Directory

This directory contains **domain-specific hooks** for the SouthMarket client.

## Rules

- Hooks in this folder:
  - May contain business logic
  - May access API / services / auth
  - May use React Query / Context

- Do NOT place generic utility hooks here.
  - Generic hooks belong in `src/shared/hooks` (if needed).

## Examples

- useAuth
- useCart
- useFavorites
