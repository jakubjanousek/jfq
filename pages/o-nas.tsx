import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PageSubHeading from "../components/PageSubHeading";
import getPageTitle from "../utils/getPageTitle";

const ONas: React.FC = () => {
  return (
    <Layout>
    <Head>
      <title>{getPageTitle("O nás")}</title>
    </Head>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-2/3">
          <PageHeading>Stručná história v 7. bodoch</PageHeading>
          <div className="mb-4">(doplnená niekoľkými poznámkami na okraj)</div>
          <PageSubHeading>1.</PageSubHeading>
          <p>
            Skupina <strong>Jednofázové kvasenie </strong>(tiež známa aj ako JFQ
            alebo 1FQ) vznikla ako akási podskupina{" "}
            <span className="italic">
              (<u>poznámka na okraj:</u> pridružená výroba)
            </span>{" "}
            v rámci folkového pesničkárskeho združenia <strong>Slnovrat</strong>
            . Spočiatku, to znamená od roku 1982, ju tvorila dvojica{" "}
            <strong>Dušan Valúch</strong> a <strong>Karol Svozil</strong>,
            neskôr - približne v roku 1985 - sa k nim natrvalo pripojil tretí
            člen Slnovratu, <strong>Miloš Janoušek</strong>.
          </p>
          <p className="italic">
            (<u>poznámka na okraj:</u> samozrejme, že vždy je všetko trochu
            inak, pretože dávno predtým (už v roku 1975), než začali Valúch a
            Svozil spoluprácu ako dvojica, dokonca ešte dávno predtým, než
            vzniklo združenie Slnovrat, hrali spolu Valúch a Janoušek ako tandem
            sólistov - teda každý zvlášť, ale napriek tomu spolu. Na takéto
            paradoxy je história Jednofázového kvasenia, Slnovratu i ľudstva
            vôbec neobyčajne bohatá.)
          </p>
          <PageSubHeading>2.</PageSubHeading>
          <p>
            Letmým výpočtom sa dá zistiť, že Dušan Valúch a Miloš Janoušek hrajú
            spolu už viac ako 40 rokov{" "}
            <i>
              (<u>poznámka na okraj:</u> dlhšie spolu hrajú už len ich kolegovia
              z Rolling Stones a Pink Floyd).
            </i>
          </p>
        </div>
        <div className="p-4 w-full md:w-1/3 md:order-first">
          <img className="block w-full" src="/historia1.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-2/3">
          <PageSubHeading>3.</PageSubHeading>
          <p>
            V tomto zložení pôsobila trojica aj po zániku Slnovratu a dnes sú
            Dušan Valúch, Miloš Janoušek a Karol Svozil prakticky jedinými
            členmi niekdajšieho združenia, ktorí sa ešte aktívne venujú hudbe a
            pravidelne hrávajú
          </p>
          <p className="italic">
            (<u>poznámka na okraj:</u> všetko je relatívne - pod pojmami
            "aktívnosť" a "pravidelnosť" sa dá chápať aj interval 1 koncert za 2
            mesiace).
          </p>
          <PageSubHeading>4.</PageSubHeading>
          <p>
            Názov <strong>Jednofázové kvasenie</strong> pochádza z výskumnej
            úlohy <strong>Ing. Svozila</strong>, ktorá pojednávala o novej,
            prevratnej pivovarskej technológii. Prevratnosť technológie i názvu
            skupiny časom preveril čas.{" "}
          </p>
          <p className="italic">
            (<u>poznámka na okraj:</u> výhoda takéhoto názvu spočívala v tom, že
            skupina bola zaraďované medzi <strong>punkové</strong>,{" "}
            <strong>metalové</strong> alebo <strong>skinheadské</strong> skupiny
            a bola pozývaná na prehliadky takejto hudby. Nevýhoda názvu zas bola
            v tom, že skupina bola považovaná <strong>punkovú</strong>,{" "}
            <strong>metalovú</strong> alebo <strong>skinheadskú</strong> kapelu
            a aj z tohto dôvodu bola pravideľne zakazovaná).
          </p>
        </div>
        <div className="p-4 w-full md:w-1/3 md:order-first">
          <img className="block w-full" src="/historia2.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-2/3">
          <PageSubHeading>5.</PageSubHeading>
          <p>
            I keď skupinu Jednofázové kvasenie tvorí predovšetkým spomínaná
            trojica otcov-zakladateľov D. Valúch, K. Svozil a M. Janoušek, na
            koncertoch a nahrávkach pravidelne spolupracujú s ďalšími
            hudobníkmi, predovšetkým s <strong>Tomášom Kuklišom</strong>,{" "}
            <strong>Milanom Tedlom</strong>, <strong>Fedorom Frešom</strong> a{" "}
            <strong>Jakubom Janouškom.</strong>
          </p>
          <span className="italic">
            (<u>poznámka na okraj:</u> je možné predpokladať, že títo hudobníci
            hrajú so skupinou Jednofázové kvasenie predovšetkým z dôvodov
            získavania popularity - honoráre v prípade koncertov 1FQ naozaj
            nehrajú až takú veľkú rolu).
          </span>
          <PageSubHeading>6.</PageSubHeading>
          <p>
            Skupina Jednofázové kvasenie doteraz vydala 6 vlastných albumov -{" "}
            <strong>Jednofázové kvasenie</strong>,{" "}
            <strong>Ein Stein Blues</strong>,{" "}
            <strong>Jednofázové kvasenie Live</strong>,{" "}
            <strong>Bezfázový stav</strong>,{" "}
            <strong>Druhý pes, tretia fáza</strong> a{" "}
            <strong>Rybí menuet</strong>.{" "}
          </p>
          <p>
            Okrem toho sa zúčastnila nahrávania jediného (poznámka na okraj:
            výrazne nereprezentatívneho) sampleru slovenského folku{" "}
            <strong>Folkový kolotoč</strong> a skladby Jednofázového kvasenia sa
            objavili aj na ďalších sampleroch{" "}
            <span className="italic">
              (<u>poznámka na okraj:</u> že je toho naozaj dosť, dá sa zistiť
              letmým pohľadom podstránku{" "}
              <strong>
                <a href="/hudba">hudba</a>
              </strong>
              ).
            </span>
          </p>
          <p>
            Pre cyklus Slovenskej televízie Pesničkári slovenskí nahrala skupina
            svoj profil so štyrmi piesňami (Ako je ti Yeti, Blues pomalého
            vlaku, Keď sme sa vybrali na prechádzku mestom, Nočný motýľ), okrem
            toho Dušan Valúch a Miloš Janoušek natočili v rámci tohto cyklu aj
            vlastné sólové recitály
          </p>
          <p className="italic">
            (<u>poznámka na okraj:</u> tie však s Jednofázovým kvasením nemali
            nič spoločného. Bola to len zhmotnená predstava, ako by to vyzeralo,
            keby Janoušek a Valúch nemuseli živiť Jednofázové kvasenie a boli by
            volní ako ftáci.).
          </p>
        </div>
        <div className="p-4 w-full md:w-1/3 md:order-first">
          <img className="block w-full" src="/historia4.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-2/3">
          <p>
            V rámci niektorých relácií (Zóna D a pod.) skupina natočila 7
            klipov. Pre Českú televíziu bolo zaznamenané spoločné vystúpenie
            skupín Jednofázové kvasenie, Hradišťan a Jablkoň. Texty piesní
            Dušana Valúcha a Miloša Janouška vyšli v antológii textov{" "}
            <strong>Združenie pesničkárov Slnovrat</strong> (Meritum 1995,
            Archpress 2004), v knihách{" "}
            <strong>Miloš Janoušek: Vianoce v Beatleheme</strong> (Dilema 2000)
            a <strong>Dušan Valúch: Vražedný dixieland</strong> (Vydavateľstvo
            spolku slovenských spisovateľov 2000).{" "}
          </p>
          <PageSubHeading>7.</PageSubHeading>
          <p>
            V posledných rokoch sa Jednofázové kvasenie výrazne omladzuje vďaka
            účasti viac či menej pravidelných spoluhráčov. Čas nezastavíš a je
            fajn, ak sa vekový priemer skupiny posúva smerom dolu...{" "}
            <span className="italic">
              (<u>poznámka na okraj:</u> aj týmto neobvyklým časovým vývojom sa
              Jednofázové kvasenie odlišuje od zvyšku sveta...)
            </span>
          </p>
          <p>Ďalšie súvisiace stránky:</p>
          <p>
            Miloš Janoušek (
            <a href="http://janousek.szm.com">http://janousek.szm.com</a>)
          </p>
          <p>
            Združenie pesničkárov Slnovrat (
            <a href="http://www.slnovrat.eu">www.slnovrat.eu</a>)
          </p>
        </div>
        <div className="p-4 w-full md:w-1/3 md:order-first">
          <img className="block w-full" src="/historia3.jpg" />
        </div>
      </div>
    </Layout>
  );
};

export default ONas;
