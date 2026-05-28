"use client";
import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import { IoMenu } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      }
      if (currentScrollY < 10) {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModal = () => {
    if (modalIsOpen) {
      setModalIsOpen(false);
      return;
    }
    setModalIsOpen(true);
  };
  return (
    <>
      <header className={`${css.header} ${showHeader ? css.show : css.hide}`}>
        <Link href="/" className={css.homeLink}>
          <Image
            src="/smallLogo.png"
            alt="puuhnasti logo"
            width={50}
            height={50}
            className={css.circleLogo}
          />
        </Link>
        <nav className={css.nav}>
          <Link className={css.navLink} href="/">
            Home
          </Link>
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
        <button onClick={handleModal} className={css.burger}>
          <IoMenu className={css.burgerIcon} size={36} color="#641639" />
        </button>
      </header>
      {modalIsOpen && (
        <div onClick={() => setModalIsOpen(false)} className={css.backdrop}>
          <div className={css.modal}>
            {/* <button className={css.modalClose}>x</button> */}
            <nav className={css.modalNav}>
              <Link className={css.modalLink} href="/">
                Home
              </Link>
              <Link className={css.modalLink} href="/Shop">
                Shop
              </Link>
              <Link
                className={`${css.modalLink} ${css.smallSpan}`}
                href="/CreateYourDesign"
              >
                Create your design
              </Link>
              {/* <Link className={css.modalLink} href="">
                Contacts
              </Link> */}
              <Link className={css.modalLink} href="/#aboutMe">
                About me
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
