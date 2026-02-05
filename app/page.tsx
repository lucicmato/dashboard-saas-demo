import { ArrowRight, CheckSquare, FolderKanban, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      name: 'Task Management',
      description: 'Create, organize, and prioritize tasks with our intuitive interface. Never miss a deadline again.',
      icon: CheckSquare,
    },
    {
      name: 'Progress Tracking',
      description: 'Monitor your productivity with detailed analytics and visual progress reports.',
      icon: TrendingUp,
    },
    {
      name: 'Smart Organization',
      description: 'Keep everything structured with custom tags, folders, and smart filters.',
      icon: FolderKanban,
    },
  ];
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Manage tasks with ease and precision
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dashboard helps you organize, prioritize, and get things done. Simple, powerful, and designed for modern
            teams who want to move fast without breaking things.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#signup"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2"
            >
              Get started
              <ArrowRight size={16} />
            </a>
            <a href="#features" className="text-sm font-semibold leading-6 text-slate-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      <section id="features" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Productivity First</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to stay productive
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Powerful features designed to help you focus on what matters most—getting work done.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className={`grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-${features.length}`}>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow"
                >
                  <div className="rounded-lg bg-blue-600/10 p-2 ring-1 ring-blue-600/20 mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-slate-900">{feature.name}</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
