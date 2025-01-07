import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.RecentNotes({showTags:false}),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/kaushalpartani",
      LinkedIn: "https://www.linkedin.com/in/kaushal-p-5247a8121/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer()),

  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer()),

  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Explorer()),
  ],
}
