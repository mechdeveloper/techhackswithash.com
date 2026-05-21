import Layout from '../components/layout/layout';
import config from '../lib/config';

const talks = [
  {
    title: 'MLOps with Azure Machine Learning and Azure DevOps',
    description:
      'A practical walkthrough of building end-to-end MLOps pipelines using Azure ML and Azure DevOps — covering automated model training, testing, deployment, and monitoring.',
    tags: ['MLOps', 'Azure ML', 'Azure DevOps', 'CI/CD'],
  },
  {
    title: 'Kubernetes from Scratch on Linux VMs',
    description:
      'Step-by-step guide to deploying a production-grade Kubernetes cluster on Linux virtual machines on Azure using Terraform — without managed services, to understand what happens under the hood.',
    tags: ['Kubernetes', 'Azure', 'Terraform', 'Linux'],
  },
  {
    title: 'Infrastructure as Code with Terraform and Azure',
    description:
      'How to use GitHub Codespaces and Terraform Cloud to deploy and manage Azure infrastructure as code — covering workspace setup, Azure AD Service Principal auth, and real-world IaC patterns.',
    tags: ['Terraform', 'Azure', 'IaC', 'GitHub Codespaces'],
  },
  {
    title: 'Podman: Rootless Containers in Production',
    description:
      'An introduction to Podman as a lightweight, daemonless alternative to Docker — covering rootless container execution, key security benefits, and real-world lessons from running it in a banking environment.',
    tags: ['Podman', 'Containers', 'Security', 'Linux'],
  },
];

const events = [
  {
    name: 'Cloud Native and Kubernetes Oslo',
    type: 'Meetup',
    location: 'Oslo, Norway',
    description: 'Community meetup for Kubernetes and cloud-native practitioners in the Oslo region.',
  },
  {
    name: 'Azure User Group Sweden',
    type: 'Community Event',
    location: 'Sweden',
    description: 'Swedish Azure community event bringing together cloud professionals and Microsoft enthusiasts.',
  },
  {
    name: 'HashiTalks: India',
    type: 'Conference',
    location: 'Online',
    description: 'HashiCorp community conference focused on Terraform, Vault, Consul, and the HashiCorp ecosystem.',
  },
];

export default function Speaking() {
  return (
    <Layout
      pageMeta={{
        title: `Speaking – ${config.siteName}`,
        description:
          'Talks and sessions by Ashish Singh Baghel on Azure, DevOps, Kubernetes, MLOps, and cloud-native engineering.',
      }}
    >
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Speaking &amp;{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Talks
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I speak at tech conferences and community events on Azure, DevOps, Kubernetes, and MLOps.
          The best way to learn something deeply is to explain it to others.
        </p>
      </section>

      <div className="max-w-4xl mx-auto pb-24 space-y-20">

        {/* Sessions */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Sessions</h2>
          <div className="space-y-6">
            {talks.map((talk) => (
              <div
                key={talk.title}
                className="p-6 rounded-xl border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-blue-200 dark:hover:border-blue-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{talk.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{talk.description}</p>
                <div className="flex flex-wrap gap-2">
                  {talk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Events &amp; Communities</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {events.map((event) => (
              <div
                key={event.name}
                className="p-5 rounded-xl border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{event.name}</h3>
                  <span className="shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                    {event.type}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2">
                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {event.location}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Invite CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Invite me to speak</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Interested in having me speak at your event or meetup? I&apos;m happy to talk about Azure architecture,
            DevOps transformation, Kubernetes, MLOps, or containerization.
          </p>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
          >
            Get in touch on LinkedIn
          </a>
        </section>

      </div>
    </Layout>
  );
}
