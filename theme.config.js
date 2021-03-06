export default {
  repository: 'https://github.com/cordobadigitalmedia/homeschooling-docs',
  titleSuffix: ' – Homeschooling Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Homeschooling Docs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Technical Resources for Homeschooling Parents
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Homeschooling Docs: Technical Resources for Homeschooling Parents" />
      <meta name="og:description" content="Homeschooling Docs: Technical Resources for Homeschooling Parents" />
      <meta name="og:title" content="Homeschooling Docs: Technical Resources for Homeschooling Parents" />
      <meta name="apple-mobile-web-app-title" content="Homeschooling Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © Cordoba Digital Media | Powered by <a href="https://github.com/shuding/nextra">Nextra</a> and <a href="https://vercel.com">Vercel</a></>,
}
