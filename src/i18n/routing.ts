import { defineRouting, LocalePrefix } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const AppConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' as LocalePrefix,
};
export const routing = defineRouting({
  ...AppConfig

});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);