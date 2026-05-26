import { useState } from 'react';
import Layout from '../components/layout/layout';
import config from '../lib/config';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      window.location.href = `mailto:${config.contactEmail}?subject=Hello from techhackswithash.com&body=${encodeURIComponent(form.message)}`;
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout
      pageMeta={{
        title: `Contact – ${config.siteName}`,
        description: 'Get in touch with Ashish Singh Baghel — cloud architecture, DevOps, or speaking enquiries.',
      }}
    >
      <section className="py-16 sm:py-24 text-center max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Get in touch</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Open to cloud architecture discussions, DevOps consulting, or speaking invitations.
        </p>

        {status === 'success' ? (
          <div className="rounded-xl border border-green-100 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-8 text-center">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">Message sent!</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again or email me directly.</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium transition-colors"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}

        {/* Alternative contact */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Or reach me directly on</p>
          <div className="flex justify-center gap-4">
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
            <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">X / Twitter</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
