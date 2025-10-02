import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>PropertyDeals | Off-Market Real Estate Marketplace</title>
        <meta
          name="description"
          content="PropertyDeals connects real estate wholesalers, investors, and professionals with transparent off-market property opportunities."
        />
      </Head>
      <main className="min-h-screen bg-[#F5F5F5] text-[#1C1C1C]">
        <header className="relative overflow-hidden bg-gradient-to-br from-[#09261E] via-[#135341] to-[#803344]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 text-white sm:px-10 lg:px-16 lg:flex-row lg:items-center">
            <div className="z-10 max-w-2xl space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide uppercase">
                Off-Market Real Estate, Simplified
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Discover and close exclusive property deals with confidence.
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                PropertyDeals brings wholesalers, investors, and real estate pros together in a single, transparent marketplace. Evaluate opportunities faster with curated insights and vetted connections.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#get-started"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#09261E] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Join the Marketplace
                </a>
                <a
                  href="#features"
                  className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-[4/3] w-full rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl ring-1 ring-white/20" />
              <div className="absolute inset-x-12 -bottom-10 rounded-3xl bg-white/20 p-6 backdrop-blur-lg shadow-xl ring-1 ring-white/30">
                <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Data-rich deal snapshots • Secure messaging • Verified closings
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="value" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#D8D8D8] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#09261E]">Transparent Off-Market Deals</h3>
              <p className="mt-4 text-base text-[#1C1C1C]/70">
                Gain instant access to vetted properties with clear comps, repair estimates, and projected returns so you can move quickly and confidently.
              </p>
            </div>
            <div className="rounded-3xl border border-[#D8D8D8] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#09261E]">Centralized Listings</h3>
              <p className="mt-4 text-base text-[#1C1C1C]/70">
                Keep every off-market opportunity organized in one place with real-time updates, deal timelines, and integrated due diligence tools.
              </p>
            </div>
            <div className="rounded-3xl border border-[#D8D8D8] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#09261E]">Reliable Buyers & Sellers</h3>
              <p className="mt-4 text-base text-[#1C1C1C]/70">
                Build trust with verified wholesalers, investors, and professionals backed by platform insights and transparent communication.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-[#09261E] sm:text-4xl">How PropertyDeals Works for You</h2>
              <p className="mt-4 text-lg text-[#1C1C1C]/70">
                Tailored tools and workflows designed for every member of the real estate deal lifecycle.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-3xl border border-[#D8D8D8] bg-[#F5F5F5] p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#135341]">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#135341]">
                  For Buyers
                </span>
                <h3 className="text-2xl font-semibold text-[#09261E]">Evaluate & Secure Deals Faster</h3>
                <p className="text-base text-[#1C1C1C]/70">
                  Browse verified off-market listings, analyze returns with built-in calculators, and negotiate confidently with transparent deal data.
                </p>
                <ul className="mt-2 space-y-2 text-sm text-[#1C1C1C]/60">
                  <li>• Advanced filters for location, returns, and property type</li>
                  <li>• Saved deal boards and investor collaboration</li>
                  <li>• Instant alerts for new opportunities</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-[#D8D8D8] bg-[#F5F5F5] p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#135341]">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#135341]">
                  For Sellers
                </span>
                <h3 className="text-2xl font-semibold text-[#09261E]">Showcase & Close with Confidence</h3>
                <p className="text-base text-[#1C1C1C]/70">
                  List properties to a network of qualified investors, track engagement, and manage negotiations with built-in messaging.
                </p>
                <ul className="mt-2 space-y-2 text-sm text-[#1C1C1C]/60">
                  <li>• Dynamic property profiles with media & documents</li>
                  <li>• Performance insights on buyer interest</li>
                  <li>• Streamlined contract and closing workflows</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-[#D8D8D8] bg-[#F5F5F5] p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#135341]">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#135341]">
                  For REPs
                </span>
                <h3 className="text-2xl font-semibold text-[#09261E]">Power Trusted Partnerships</h3>
                <p className="text-base text-[#1C1C1C]/70">
                  Connect clients with qualified deals, source inventory, and collaborate with investors and wholesalers in a single platform.
                </p>
                <ul className="mt-2 space-y-2 text-sm text-[#1C1C1C]/60">
                  <li>• Verified network of investors and sellers</li>
                  <li>• Deal tracking dashboards and client sharing</li>
                  <li>• Professional profile and referral management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#135341] py-20 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">Trusted by dealmakers across the country</h2>
                <p className="text-base text-white/80">
                  From boutique wholesalers to large-scale investment teams, PropertyDeals streamlines collaboration and builds confidence in every transaction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-[#09261E]">
                <div className="rounded-2xl bg-white px-6 py-8 text-center shadow">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#135341]">Wholesaler</p>
                  <p className="mt-2 text-lg font-medium">“PropertyDeals cut our time-to-close in half.”</p>
                </div>
                <div className="rounded-2xl bg-white px-6 py-8 text-center shadow">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#135341]">Investor</p>
                  <p className="mt-2 text-lg font-medium">“We source better deals with transparent data.”</p>
                </div>
                <div className="rounded-2xl bg-white px-6 py-8 text-center shadow">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#135341]">Broker</p>
                  <p className="mt-2 text-lg font-medium">“Our clients trust the verified network.”</p>
                </div>
                <div className="rounded-2xl bg-white px-6 py-8 text-center shadow">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#135341]">Attorney</p>
                  <p className="mt-2 text-lg font-medium">“Closing workflows are built for professionals.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="get-started" className="bg-[#09261E] py-16 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold sm:text-4xl">Ready to unlock your next deal?</h2>
            <p className="max-w-2xl text-base text-white/80">
              Join PropertyDeals to streamline off-market transactions, connect with trusted partners, and close with confidence.
            </p>
            <a
              href="#"
              className="rounded-full bg-white px-10 py-3 text-sm font-semibold text-[#09261E] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request Early Access
            </a>
            <p className="text-xs text-white/50">© {new Date().getFullYear()} PropertyDeals. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
