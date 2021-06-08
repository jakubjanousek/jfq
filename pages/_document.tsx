import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,800&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="V hudbe skupiny Jednofázové kvasenie sa mieša folk s rockom, džez s vážnou hudbou, country s ľudovkou a naopak – ľudovka s country, vážna hudba s džezom, rock s folkom a naopak... "
          />
          <meta
            name="keywords"
            content="Jednofázové kvasenie, Miloš Janoušek, Dušan Valúch, Karol Svozil, Folk, Blues"
          />
        </Head>
        <body className="bg-lightGreen font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
