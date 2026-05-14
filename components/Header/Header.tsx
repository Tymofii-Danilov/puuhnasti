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

      // scrolling up
      if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }
      // scrolling down
      else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      }

      // always visible at top
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

  const openModal = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <header className={`${css.header} ${showHeader ? css.show : css.hide}`}>
        <Link href="/">
          <Image
            className={css.homeLink}
            src="/logo.webp"
            alt="puuhnasti logo"
            width={160}
            height={35}
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
        <button onClick={openModal} className={css.burger}>
          <IoMenu className={css.burgerIcon} size={36} color="#641639" />
        </button>
      </header>
      {modalIsOpen && (
        <div onClick={() => setModalIsOpen(false)} className={css.backdrop}>
          <div className={css.modal}>
            <button className={css.modalClose}>x</button>
            <nav className={css.modalNav}>
              <a className={css.modalLink} href="">
                Home page
              </a>
              <a className={css.modalLink} href="">
                Shop
              </a>
              <a className={css.modalLink} href="">
                Create your design
              </a>
              <a className={css.modalLink} href="">
                Contacts
              </a>
              <a className={css.modalLink} href="#aboutMe">
                About me
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
