// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow overriding the Nitro preset at build time so the same project can be
// deployed to Vercel (NITRO_PRESET=vercel), Netlify (NITRO_PRESET=netlify),
// or anywhere static (NITRO_PRESET=static). Defaults to Cloudflare for local
// preview / Lovable hosting.
const preset = process.env.NITRO_PRESET;

export default defineConfig(
  preset
    ? {
        nitro: { preset },
      }
    : {},
);
