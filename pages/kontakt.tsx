import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";

const Kontakt: React.FC = () => (
  <Layout>
    <PageHeading>Kontakt</PageHeading>
    <PageSubHeading>telefón: 0915 272 585</PageSubHeading>
    <PageSubHeading>
      e-mail:{" "}
      <a
        className="underline hover:no-underline"
        href="mailto:jednofazovka@gmail.com"
      >
        jednofazovka@gmail.com
      </a>
    </PageSubHeading>
    <br />
    <a
      className="underline hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
      href="/Info Jednofazove.pdf"
    >
      info pre usporiadateľa vo formáte PDF
    </a>{" "}
    (informačný materiál 272 kB)
    <br />
    <a
      className="underline hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
      href="/Jednofazove_promofoto.rar"
    >
      fotografie na propagáciu JPG
    </a>{" "}
  </Layout>
);

export default Kontakt;
