import { startTransition, useEffect, useState, type CSSProperties } from 'react'
import { resumeContent, type Locale } from './content'

const externalLinks = {
  email: 'mailto:miguelangelmartinezib2611@gmail.com',
  linkedin: 'https://www.linkedin.com/in/miguel-angel-martinez-ibarra-b1318b281/',
  github: 'https://github.com/miixkyy2611',
  pdf: `${import.meta.env.BASE_URL}Miguel_Martinez_CV.pdf`,
  phone: 'tel:+526181571304',
}

const barStyle = (value: number) =>
  ({
    '--value': `${value}%`,
  }) as CSSProperties

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const params = new URLSearchParams(window.location.search)
    const lang = params.get('lang')

    return lang === 'en' ? 'en' : 'es'
  })
  const content = resumeContent[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.metaTitle

    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', url)
  }, [content.metaTitle, locale])

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node, index) => {
      node.style.setProperty('--delay', `${index * 80}ms`)
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [locale])

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    startTransition(() => {
      setLocale(nextLocale)
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header
          className="panel reveal sticky top-4 z-30 flex flex-col gap-4 rounded-[28px] px-5 py-4 md:flex-row md:items-center md:justify-between"
          data-reveal
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#1f67db,#7dbbff)] text-sm font-bold tracking-[0.28em] text-white shadow-[0_20px_45px_-18px_rgba(47,113,223,0.75)]">
              MM
            </div>
            <div>
              <p className="eyebrow !mb-1">{content.nav.kicker}</p>
              <p className="text-base font-semibold text-slate-900">
                {content.identity.name}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm text-slate-600">{content.nav.note}</p>
            <div
              aria-label="Language switch"
              className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 p-1 shadow-[0_16px_40px_-25px_rgba(42,98,193,0.55)]"
              role="group"
            >
              {(['es', 'en'] as Locale[]).map((option) => (
                <button
                  key={option}
                  aria-pressed={locale === option}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    locale === option
                      ? 'bg-slate-900 text-white shadow-[0_14px_32px_-18px_rgba(15,23,42,0.75)]'
                      : 'text-slate-600 hover:bg-sky-50 hover:text-slate-900'
                  }`}
                  onClick={() => handleLocaleChange(option)}
                  type="button"
                >
                  {content.toggle[option]}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div
            className="panel interactive-panel hero-panel reveal rounded-[40px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            data-reveal
          >
            <span className="soft-pill">{content.hero.badge}</span>
            <p className="eyebrow mt-6">{content.hero.kicker}</p>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[5.4rem]">
              <span className="block">{content.hero.titleLines[0]}</span>
              <span className="gradient-text block text-balance">
                {content.hero.titleLines[1]}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              {content.identity.role}. {content.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="action-primary" href={externalLinks.email}>
                {content.hero.primaryAction}
              </a>
              <a
                className="action-secondary"
                href={externalLinks.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                {content.hero.secondaryAction}
              </a>
              <a
                className="action-ghost"
                href={externalLinks.pdf}
                rel="noreferrer"
                target="_blank"
              >
                {content.hero.tertiaryAction}
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {content.hero.quickFacts.map((fact) => (
                <article
                  className="interactive-panel rounded-[24px] border border-white/75 bg-white/72 p-4 shadow-[0_18px_42px_-28px_rgba(48,110,206,0.58)] backdrop-blur-md"
                  key={fact.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/80">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {fact.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            className="panel interactive-panel reveal rounded-[40px] px-6 py-8 sm:px-8 sm:py-10"
            data-reveal
          >
            <SectionHeading
              description={content.impact.description}
              eyebrow={content.impact.eyebrow}
              title={content.impact.title}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.impact.stats.map((stat) => (
                <article className="metric-card" key={stat.label}>
                  <p className="text-3xl font-semibold tracking-[-0.06em] text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="chart-surface mt-6">
              <p className="text-sm font-semibold text-slate-900">
                {content.impact.chartTitle}
              </p>
              <div className="mt-5 grid gap-4">
                {content.impact.chartBars.map((bar) => (
                  <div className="space-y-2" key={bar.label}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-700">
                        {bar.label}
                      </span>
                      <span className="text-sm font-semibold text-sky-700">
                        {bar.display}
                      </span>
                    </div>
                    <div className="chart-track">
                      <div className="chart-progress" style={barStyle(bar.value)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[30px] bg-[linear-gradient(145deg,#1e5fd1,#7ec1ff)] p-6 text-white shadow-[0_26px_60px_-28px_rgba(41,101,193,0.72)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                {content.impact.spotlight.eyebrow}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {content.impact.spotlight.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/85">
                {content.impact.spotlight.description}
              </p>
            </div>
          </aside>
        </section>

        <section className="reveal space-y-6" data-reveal>
          <SectionHeading
            description={content.skills.description}
            eyebrow={content.skills.eyebrow}
            title={content.skills.title}
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {content.skills.groups.map((group) => (
              <article
                className="panel interactive-panel rounded-[32px] p-6"
                key={group.title}
              >
                <p className="text-lg font-semibold text-slate-900">
                  {group.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {group.caption}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal space-y-6" data-reveal>
          <SectionHeading
            description={content.experience.description}
            eyebrow={content.experience.eyebrow}
            title={content.experience.title}
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {content.experience.items.map((item) => (
              <article
                className="panel interactive-panel rounded-[34px] p-7 sm:p-8"
                key={`${item.role}-${item.company}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                      {item.role}
                    </p>
                    <p className="mt-2 text-base font-medium text-sky-700">
                      {item.company}
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-sky-100 bg-sky-50/80 px-4 py-3 text-sm leading-6 text-slate-600">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {item.bullets.map((bullet) => (
                    <p
                      className="border-l border-sky-200/90 pl-4 text-sm leading-7 text-slate-700 sm:text-[0.98rem]"
                      key={bullet}
                    >
                      {bullet}
                    </p>
                  ))}
                </div>

                {item.links?.length ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        className="action-secondary"
                        href={link.href}
                        key={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="reveal" data-reveal>
          <div className="panel interactive-panel grid gap-6 rounded-[40px] p-7 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
            <div>
              <SectionHeading
                description={content.project.description}
                eyebrow={content.project.eyebrow}
                title={content.project.title}
              />

              <p className="mt-8 text-[1.02rem] leading-8 text-slate-700">
                {content.project.summary}
              </p>

              <div className="mt-7 space-y-4">
                {content.project.bullets.map((bullet) => (
                  <p
                    className="interactive-panel rounded-[24px] border border-white/70 bg-white/72 px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_18px_40px_-28px_rgba(47,108,198,0.48)]"
                    key={bullet}
                  >
                    {bullet}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-[linear-gradient(180deg,rgba(236,245,255,0.9),rgba(221,237,255,0.9))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/80">
                {content.project.name}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {content.project.stack.map((item) => (
                  <span className="chip chip-accent" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {content.project.metrics.map((metric) => (
                  <article className="metric-card metric-card-compact" key={metric}>
                    <p className="text-lg font-semibold tracking-[-0.05em] text-slate-900">
                      {metric}
                    </p>
                  </article>
                ))}
              </div>

              <div className="chart-surface mt-8">
                <p className="text-sm font-semibold text-slate-900">
                  {content.project.performanceTitle}
                </p>
                <div className="mt-5 grid gap-4">
                  {content.project.performanceBars.map((bar) => (
                    <div className="space-y-2" key={bar.label}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-700">
                          {bar.label}
                        </span>
                        <span className="text-sm font-semibold text-sky-700">
                          {bar.display}
                        </span>
                      </div>
                      <div className="chart-track">
                        <div
                          className="chart-progress chart-progress-strong"
                          style={barStyle(bar.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                className="action-primary mt-8 inline-flex"
                href={content.project.sourceHref}
                rel="noreferrer"
                target="_blank"
              >
                {content.project.sourceLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="reveal space-y-6" data-reveal>
          <SectionHeading
            description={content.details.description}
            eyebrow={content.details.eyebrow}
            title={content.details.title}
          />

          <div className="grid gap-4 lg:grid-cols-[0.9fr_0.9fr_1.1fr]">
            <article className="panel interactive-panel rounded-[34px] p-7">
              <p className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                {content.details.extra.title}
              </p>
              <p className="mt-2 text-sm font-medium text-sky-700">
                {content.details.extra.subtitle}
              </p>
              <div className="mt-6 space-y-4">
                {content.details.extra.bullets.map((bullet) => (
                  <p className="text-sm leading-7 text-slate-700" key={bullet}>
                    {bullet}
                  </p>
                ))}
              </div>
            </article>

            <article className="panel interactive-panel rounded-[34px] p-7">
              <p className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                {content.details.education.title}
              </p>
              <p className="mt-2 text-sm font-medium text-sky-700">
                {content.details.education.subtitle}
              </p>
              <div className="mt-6 space-y-4">
                {content.details.education.bullets.map((bullet) => (
                  <p className="text-sm leading-7 text-slate-700" key={bullet}>
                    {bullet}
                  </p>
                ))}
              </div>
            </article>

            <article className="panel interactive-panel rounded-[34px] p-7 sm:p-8">
              <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {content.details.contact.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                {content.details.contact.description}
              </p>
              <p className="mt-4 text-sm font-medium text-sky-700 sm:text-base">
                {content.details.contact.availability}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="action-primary" href={externalLinks.email}>
                  {content.details.contact.actions.email}
                </a>
                <a
                  className="action-secondary"
                  href={externalLinks.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.details.contact.actions.linkedin}
                </a>
                <a
                  className="action-secondary"
                  href={externalLinks.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.details.contact.actions.github}
                </a>
                <a
                  className="action-ghost"
                  href={externalLinks.pdf}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.details.contact.actions.pdf}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a className="contact-tile" href={externalLinks.phone}>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{content.identity.phone}</span>
                </a>
                <a className="contact-tile" href={externalLinks.email}>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{content.identity.email}</span>
                </a>
                <a
                  className="contact-tile"
                  href={externalLinks.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">{content.identity.github}</span>
                </a>
                <a
                  className="contact-tile"
                  href={externalLinks.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">{content.identity.linkedin}</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <footer
          className="reveal flex flex-col gap-3 px-1 pb-2 pt-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <p>{content.footerNote}</p>
          <p>{content.identity.location}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
