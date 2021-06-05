import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Pandulak from "./Pandulak";

type Props = { bg: string };

const HeaderLink: React.FC<{
  text: string;
  href: string;
}> = ({ text, href }) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link href={href}>
      <a
        className={`inline-block px-2 py-1 ${
          active ? "underline" : "hover:underline"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Header: React.FC<Props> = ({ bg }) => {
  return (
    <div className="text-center">
      <Pandulak bg={bg} transition />
      <div className="mb-8 font-serif font-extrabold text-2xl leading-none sm:text-5xl">
        <Link href="/">
          <a className="hover:underline">
            Jednofázové
            <br />
            kvasenie
          </a>
        </Link>
      </div>

      <div className="mx-auto max-w-md">
        <nav className="text-lg -mx-2 -my-1">
          <HeaderLink href="/o-nas" text="O nás" />
          <HeaderLink href="/hudba" text="Hudba" />
          <HeaderLink href="/texty" text="Texty" />
          <HeaderLink href="/clanky" text="Články" />
          <HeaderLink href="/blog" text="Blog" />
          <HeaderLink href="/foto-video" text="Foto/Video" />
          <HeaderLink href="/obchod" text="Obchod" />
          <HeaderLink href="/kontakt" text="Kontakt" />
        </nav>
      </div>
    </div>
  );
};

export default Header;
