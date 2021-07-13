import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";
import getPageTitle from "../utils/getPageTitle";
import ryba from "../public/sidebg2.png";

const Item: React.FC<{ img: string }> = ({ img, children }) => (
  <div className="p-3 w-1/2 sm:w-1/3 md:w-1/5">
    <img src={img} className="block" />
    <small>{children}</small>
  </div>
);

const Kontakt: React.FC = () => (
  <Layout sideImg={ryba}>
    <Head>
      <title>{getPageTitle("Obchod")}</title>
    </Head>
    <PageHeading>Obchod</PageHeading>
    <p>
      Objednať si môžete telefonicky na čísle <strong>0915 272 585</strong>{" "}
      alebo prostredníctvom mailu{" "}
      <a
        href="mailto:jednofazovka@gmail.com"
        className="underline hover:no-underline"
      >
        jednofazovka@gmail.com
      </a>
    </p>
    <p>
      Pre Bratislavčanov – na tomto telefónnom čísle je možné sa dohodnúť aj o
      osobnom odbere, teda bez poštovného.
    </p>
    <p>
      CD (a občas aj knihy) sa dajú kúpiť aj v rámci neopakovateľných koncertov
      Jednofázového kvasenia kdekoľvek na svete...
    </p>
    <PageSubHeading>MP3:</PageSubHeading>
    <p>
      MP3 Bezfázový stav, Rybí menuet a Mapy labyrintu je možné zakúpiť na
      stránke www.indiesrec.eu
    </p>
    <PageSubHeading>CD:</PageSubHeading>
    <p>
      MP3 Bezfázový stav, Rybí menuet a Mapy labyrintu je možné zakúpiť na
      stránke www.indiesrec.eu
    </p>
    <div className="-m-3 flex flex-wrap">
      <Item img="obchod/bezfazovy130-2.jpg">
        Bezfázový stav (2CD)
        <br />
        10,00 EUR
      </Item>
      <Item img="obchod/druhypes130-2.jpg">
        Druhý pes, tretia fáza
        <br />
        6,00 EUR
      </Item>
      <Item img="obchod/Ein Stein Blues300_2.jpg">
        Ein-stein blues
        <br />
        6,00 EUR
      </Item>
      <Item img="obchod/triquetra130-2.jpg">
        Slnovrat: Triquetra
        <br />
        6,00 EUR
      </Item>
      <Item img="obchod/Rybi_menuet130_RAM.jpg">
        Jednofázové kvasenie: Rybí menuet
        <br />
        10,0 EUR
      </Item>
      <Item img="obchod/Mapy130.jpg">
        Miloš Janoušek: Mapy labyrintu
        <br />
        6,00 EUR
      </Item>
      <Item img="obchod/Duopak_maly2.jpg">
        25% zľava na ľubovolnú dvojkombináciu CD
      </Item>
    </div>

    <PageSubHeading>Knihy:</PageSubHeading>
    <div className="-m-3 flex flex-wrap">
      <Item img="obchod/dixieland.jpg">
        Dušan Valúch: Vražedný dixieland
        <br />
        5,0 EUR
      </Item>
      <Item img="obchod/rafineria.jpg">
        Dušan Valúch: O rafinérii a iné polobásne
        <br />
        2,00 EUR
      </Item>
      <Item img="obchod/beatlehem.jpg">
        Miloš Janoušek: Vianoce v Beatleheme
        <br />
        5,00 EUR
      </Item>
      <Item img="obchod/folk_slov.jpg">
        Miloš Janoušek a kol.: Folk na Slovensku (+CD)
        <br />
        13,00 EUR
      </Item>
      <Item img="obchod/slnovr-texty.jpg">
        Združenie pesničkárov Slnovrat: Texty 1979-1987
        <br />
        5,00 EUR
      </Item>
      <Item img="obchod/testament.jpg">
        Miloš Janoušek: Testament
        <br />
        7,00 EUR
      </Item>
      <Item img="obchod/Dvojpack3.jpg">
        Dvojpack CD Mapy labyrintu a knihy Testament za zvýhodnenú cenu 11,00
        EUR
      </Item>
    </div>
  </Layout>
);

export default Kontakt;
