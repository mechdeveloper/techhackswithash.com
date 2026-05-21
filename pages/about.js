import Layout from '../components/layout/layout';
import SocialLinks from '../components/social/SocialIcons';
import Link from 'next/link';
import config from '../lib/config';

const experience = [
  {
    role: 'Azure Solution Architect',
    company: 'Tata Consultancy Services',
    period: 'Oct 2024 – Present',
    location: 'Mumbai, India',
    current: true,
    highlights: [
      'Recognized as top performer for delivering high-impact cloud and DevOps initiatives',
      'Led migration of 11 business-critical applications to Azure, building a scalable cloud platform',
      'Established Azure DevOps org from scratch, improving CI/CD release efficiency by 40–50%',
      'Reduced deployment-related issues by 30–40% through automation and release governance',
      'Modernized a legacy application used by 4,000+ users into a modern .NET desktop solution',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Tata Consultancy Services',
    period: 'Aug 2018 – Sep 2024',
    location: 'Oslo, Norway',
    current: false,
    highlights: [
      'Built a production-grade container platform for a leading European bank — $100K+ in cost savings',
      'Drove migration from legacy WebSphere to containerized services using Podman rootless containers',
      'Led end-to-end DevOps transformation: CI/CD pipelines, Docker Swarm, on-prem Azure DevOps',
      'Reduced manual operational overhead by ~30–40% through standardization and automation',
    ],
  },
  {
    role: 'Software Engineer · .NET Full Stack',
    company: 'Tata Consultancy Services',
    period: 'Mar 2014 – Jul 2018',
    location: 'Mumbai, India',
    current: false,
    highlights: [
      'Built and maintained large-scale mission-critical claims processing systems',
      'Owned a 15+ year-old VB.NET claims platform, modernizing the UI with JavaScript',
      'Optimized Oracle database procedures, significantly reducing processing time',
    ],
  },
  {
    role: 'Procurement Engineer',
    company: 'ETA Engineering Private Limited',
    period: 'Jul 2013 – Feb 2014',
    location: 'Noida, India',
    current: false,
    highlights: [
      'Managed vendor coordination and procurement for large-scale infrastructure projects',
      'Streamlined payment workflows, improving delivery cycles and vendor relationships',
    ],
  },
];

const skillGroups = [
  {
    category: 'Cloud & DevOps',
    skills: ['Microsoft Azure', 'Azure DevOps', 'Terraform', 'CI/CD Pipelines', 'GitHub Actions', 'AWS'],
  },
  {
    category: 'Containers & Orchestration',
    skills: ['Docker', 'Kubernetes', 'Docker Swarm', 'Podman', 'Linux Containers', 'Windows Containers'],
  },
  {
    category: 'Languages & Frameworks',
    skills: ['C# / .NET', 'Python', 'JavaScript', 'PowerShell', 'Bash', 'SPFx'],
  },
  {
    category: 'AI & Data',
    skills: ['Azure Machine Learning', 'MLOps', 'Generative AI', 'Azure AI Services', 'MongoDB'],
  },
  {
    category: 'Databases & Integration',
    skills: ['Oracle', 'SQL Server', 'Azure Logic Apps', 'Event-Driven Architecture'],
  },
];

const certifications = [
  { name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', color: 'blue' },
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', color: 'blue' },
  { name: 'Azure Fundamentals', issuer: 'Microsoft', color: 'blue' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', color: 'indigo' },
  { name: 'Generative AI Fundamentals', issuer: 'Databricks', color: 'indigo' },
  { name: 'Advanced PL/SQL Developer', issuer: 'Oracle', color: 'orange' },
  { name: 'MongoDB Node.js Developer Path', issuer: 'MongoDB', color: 'green' },
  { name: 'FLMI Level 1 Certificate', issuer: 'LOMA', color: 'gray' },
];

const certColorMap = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300',
  orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800 text-orange-700 dark:text-orange-300',
  green: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 text-green-700 dark:text-green-300',
  gray: 'bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300',
};

export default function About() {
  return (
    <Layout
      pageMeta={{
        title: `About – ${config.siteName}`,
        description: config.authorBio,
      }}
    >
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold mb-6 shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/50">
          ASB
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{config.author}</h1>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">{config.authorTitle}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-6 flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {config.location}
        </p>
        <SocialLinks className="justify-center" />
      </section>

      <div className="max-w-4xl mx-auto pb-24 space-y-20">

        {/* Story */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>
              I graduated as a Mechanical Engineer, but computers were always my real passion. While my degree was in mechanical systems, I spent every spare moment tinkering with technology — it was only a matter of time before I made it my career. In 2014 I joined <strong className="text-gray-800 dark:text-gray-200">Tata Consultancy Services</strong> as a Systems Engineer Trainee, where I discovered .NET development and found exactly what I wanted to do with my life.
            </p>
            <p>
              Four years of full-stack development taught me how large-scale enterprise systems are built and operated. Then in 2018, an opportunity came to move to <strong className="text-gray-800 dark:text-gray-200">Oslo, Norway</strong> and lead DevOps transformation for one of Europe&apos;s largest banks. I spent six years there modernising mission-critical financial infrastructure — building container platforms, overhauling CI/CD pipelines, and migrating legacy workloads to Linux-based containerised environments using Podman and Docker.
            </p>
            <p>
              Back in Mumbai since 2024, I&apos;m now a <strong className="text-gray-800 dark:text-gray-200">Cloud Solution Architect</strong> at TCS, leading cloud modernisation programs on Microsoft Azure. I&apos;ve migrated 11 business-critical applications to Azure, built CI/CD systems that cut deployment time by half, and delivered platforms that support thousands of users.
            </p>
            <p>
              I love working with the latest technologies — whether that&apos;s exploring a new Azure service, experimenting with AI tooling, or containerising something that was never meant to be containerised. This blog is where I document what I learn, share practical knowledge with the community, and hopefully save someone a few hours of debugging. I also speak at conferences when I get the chance — because the best way to understand something deeply is to explain it to others.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Experience</h2>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-10">
              {experience.map((exp) => (
                <div key={exp.role + exp.period} className="sm:pl-12 relative">
                  <div className="hidden sm:flex absolute left-0 top-1.5 w-8 h-8 rounded-full items-center justify-center bg-white dark:bg-gray-900 border-2 border-blue-500 ring-4 ring-white dark:ring-gray-900">
                    {exp.current ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                    )}
                  </div>

                  <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-blue-200 dark:hover:border-blue-700/50 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        {exp.current && (
                          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-1">
                            Current
                          </span>
                        )}
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map(({ category, skills }) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`flex items-start gap-3 p-4 rounded-xl border ${certColorMap[cert.color]}`}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs opacity-70 mt-0.5">{cert.issuer}</p>
                </div>
                <svg className="w-5 h-5 shrink-0 mt-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-gray-100 dark:border-gray-700/50 p-8 text-center bg-gray-50/50 dark:bg-gray-800/30">
          <h2 className="text-xl font-bold mb-2">Let&apos;s connect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto text-sm">
            Open to conversations about cloud architecture, DevOps, AI — or speaking at your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
            <Link
              href="/speaking"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-sm font-medium transition-colors"
            >
              View my talks
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
