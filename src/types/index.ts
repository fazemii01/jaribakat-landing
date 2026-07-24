// ============================================================
// InsightMe.id — TypeScript Interfaces
// ============================================================

export interface ProgramItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TopicItem {
  slug: string;
  name: string;
  icon: string;
  href: string;
}

export interface NavTopicItem {
  slug: string;
  name: string;
  icon: string;
  href: string;
}

export interface NavMenuItem {
  label: string;
  href?: string;
  children?: NavMenuChild[];
}

export interface NavMenuChild {
  label: string;
  href: string;
  icon?: string;
  iconBg?: string;
}

export interface BannerSlide {
  id: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  ctaHref: string;
  ctaText: string;
  ctaMobileText: string;
}

export interface CommunityLink {
  name: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface USPItem {
  title: string;
  description: string;
}

export interface RunningTextData {
  text: string;
  highlight: string;
  suffix: string;
  ctaText: string;
  ctaHref: string;
}
