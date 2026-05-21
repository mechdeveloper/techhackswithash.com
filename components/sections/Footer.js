import Link from 'next/link';
import SocialLinks from '../social/SocialIcons';
import config from '../../lib/config';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/videos', label: 'Videos' },
  { href: '/speaking', label: 'Speaking' },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          <nav className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
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
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {config.author}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
