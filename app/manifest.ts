import type { MetadataRoute } from "next"

// Customize name / colors here — these feed Chrome/Edge/Safari install prompts
// and the /manifest.webmanifest route (no service worker needed for installability).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextMeal - Plan your next meal",
    short_name: "NextMeal",
    description:
      "NextMeal helps you plan meals, discover recipes, and organize your week.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    categories: ["food", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
