import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Logo from '../../components/logo/Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/videos', label: 'Videos' },
  { href: '/speaking', label: 'Speaking' },
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return <div className="w-7 h-7" />;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return currentTheme === 'dark' ? (
      <SunIcon className="w-5 h-5 cursor-pointer text-gray-400 hover:text-yellow-400 transition-colors" role="button" onClick={() => setTheme('light')} />
    ) : (
      <MoonIcon className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-600 transition-colors" role="button" onClick={() => setTheme('dark')} />
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <Logo />
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
        <div className="flex items-center gap-4">
          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
};

export default Header;
