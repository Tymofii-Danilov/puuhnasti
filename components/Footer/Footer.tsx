import Image from "next/image";
import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={`container ${css.footer}`}>
      <Link href="/" className={css.imgWrap}>
        <Image
          className={css.homeLink}
          src="/logo.webp"
          alt="puuhnasti logo"
          width={320}
          height={70}
        />
      </Link>
      <nav className={css.nav}>
        <Link className={css.navLink} href="/Shop">
          Shop
        </Link>
        {/* <a className={css.navLink} href="">
          Contacts
        </a> */}
        <Link className={css.navLink} href="/#aboutMe">
          About me
        </Link>
        <Link
          className={`${css.navLink} ${css.bigSpan}`}
          href="/CreateYourDesign"
        >
          Create your design
        </Link>
      </nav>
      <p className={css.developer}>Developer: Tymofii Danilov</p>
    </section>
  );
}
