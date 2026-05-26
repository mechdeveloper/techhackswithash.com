import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../components/logo/Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/videos', label: 'Videos' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  const renderThemeChanger = () => {
    if (!mounted) return <div className="w-5 h-5" />;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return currentTheme === 'dark' ? (
      <button
        className="select-none p-1 text-gray-400 hover:text-yellow-400 transition-colors"
        aria-label="Switch to light mode"
        onClick={() => setTheme('light')}
      >
        <SunIcon className="w-5 h-5" />
      </button>
    ) : (
      <button
        className="select-none p-1 text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Switch to dark mode"
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="w-5 h-5" />
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center">
        {/* Left */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Center — desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {renderThemeChanger()}
          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden select-none p-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
