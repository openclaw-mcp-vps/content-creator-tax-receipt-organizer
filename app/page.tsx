export default function Home() {
  const faqs = [
    {
      q: 'What types of files can I upload?',
      a: 'PDF receipts, PNG/JPG images, and CSV bank statements are all supported. Our AI extracts and categorizes every line item automatically.'
    },
    {
      q: 'Which expense categories are covered?',
      a: 'Equipment, software subscriptions, travel, home office, marketing, and more — all mapped to IRS Schedule C categories used by self-employed creators.'
    },
    {
      q: 'Can I export reports for my accountant?',
      a: 'Yes. Export a clean CSV or PDF summary grouped by category, ready to hand off to your CPA or import into TurboTax.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 rounded-full px-4 py-1 self-center">
          Built for YouTubers &amp; Streamers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Auto-categorize your creator expenses for tax season
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Upload receipts and bank statements. Our AI instantly sorts every expense into IRS-ready categories — equipment, software, travel, and more.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="self-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $15/mo
        </a>
        <p className="text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: '📄', title: 'Receipt Scanning', desc: 'Upload PDFs, images, or CSVs and let AI do the reading.' },
          { icon: '🏷️', title: 'Smart Categories', desc: 'Expenses mapped to Schedule C categories automatically.' },
          { icon: '📊', title: 'Tax-Ready Reports', desc: 'Export clean summaries for your CPA or TurboTax.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
            <span className="text-3xl">{f.icon}</span>
            <h3 className="font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Simple pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-white">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></span>
            <span className="text-sm text-[#8b949e]">Everything you need to stay tax-ready year-round</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              'Unlimited receipt uploads',
              'AI expense categorization',
              'Bank statement parsing',
              'CSV &amp; PDF export',
              'IRS Schedule C mapping',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} TaxReceipt AI. Built for content creators.
      </footer>
    </main>
  )
}
