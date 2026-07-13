/**
 * Site font registration — single place to change families, weights, or provider.
 *
 * - Used by `astro.config.mjs` (`fonts`) and layout `<SiteFonts />` (preload / Font component).
 * - `cssVariable` values must match tokens consumed in CSS (`--font-body`, `--font-headings`).
 * - Prefer `fontProviders.fontsource()` (local via @fontsource packages) over remote providers.
 * - Use a weight range string (e.g. `"100 900"`) for variable fonts instead of discrete weights.
 *
 * @see https://docs.astro.build/en/guides/fonts/
 */
import { fontProviders } from "astro/config";

export const siteFonts = [
  {
    name: "Instrument Sans",
    cssVariable: "--font-body",
    provider: fontProviders.google(),
    weights: [400, 600, 700],
    styles: ["normal"],
    fallbacks: ["sans-serif"],
    subsets: ["latin"],
  },
  {
    name: "Instrument Sans",
    cssVariable: "--font-body",
    provider: fontProviders.google(),
    weights: [400],
    styles: ["italic"],
    fallbacks: ["sans-serif"],
    subsets: ["latin"],
  },
  {
    name: "Young Serif",
    cssVariable: "--font-headings",
    provider: fontProviders.google(),
    weights: [400],
    styles: ["normal"],
    fallbacks: ["serif"],
    subsets: ["latin"],
  },
];
