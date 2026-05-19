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
        <a className={css.navLink} href="">
          Shop
        </a>
        <a className={css.navLink} href="">
          Contacts
        </a>
        <a className={css.navLink} href="#aboutMe">
          About me
        </a>
        <a className={css.navLink} href="">
          Create your design
        </a>
      </nav>
      <p className={css.developer}>Developer: Tymofii Danilov</p>
    </section>
  );
}
