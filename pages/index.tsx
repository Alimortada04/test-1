import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PropertyDeals</title>
        <meta name="description" content="Discover off-market property opportunities with PropertyDeals." />
      </Head>
      <main className="min-h-screen bg-offwhite text-charcoal flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Hello PropertyDeals</h1>
          <p className="max-w-xl text-lg text-charcoal/80">
            Your new hub for transparent, off-market real estate opportunities.
          </p>
        </div>
      </main>
    </>
  );
}
