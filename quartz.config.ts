import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "KP's Thoughts",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "kaushalpartani.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", ".DS_Store", "README.md", ".trash"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // thank you gipitty
        lightMode: {
          light: "#f5f5dc",       // Light tan color (background)
          lightgray: "#d8d8d8",   // Light gray, slightly warmer to match tan
          gray: "#b0b0b0",        // Medium gray, slightly warmer to match tan
          darkgray: "#7d7d7d",    // Dark gray, slightly warmer to match tan
          dark: "#5a5a5a",        // Charcoal gray
          secondary: "#4b6333",   // Dark green (matches well with tan)
          tertiary: "#84a59d",    // Light green (matches well with tan)
          highlight: "rgba(129, 143, 153, 0.15)", // Light gray highlight
        },        
        darkMode: {
          light: "#161618",
          lightgray: "#5a5a5a",
          gray: "#8e8e8e",
          darkgray: "#b3b3b3",
          dark: "#cac8c8",
          secondary: "#4b6333",
          tertiary: "#75938b",
          highlight: "rgba(198, 200, 200, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
