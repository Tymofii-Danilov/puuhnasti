import css from "./page.module.css";
import HeroImage from "@/components/HeroImage/HeroImage";
import { FaRegLightbulb } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineDoneAll } from "react-icons/md";
import Gallery from "@/components/Swiper/Swiper";
import Image from "next/image";
import Instagram from "@/components/Instagram/Instagram";

export default function Home() {
  return (
    <main>
      <section className={css.hero}>
        <h1 className={css.firstHeading}>
          Handmade tufted rugs <br /> designed exactly the way you imagine them
        </h1>
        <HeroImage />
        <p className={css.heroText}>Make Your Space Softer with Custom Rugs</p>
        <a type="button" href="#collection" className={css.heroBtn}>
          CHOOSE YOURS
        </a>
      </section>
      <section id="aboutMe" className={css.aboutMe}>
        <h2
          className={`${css.secondHeading} ${css.aboutMeHeading} ${css.aboutMeHeadingMob}`}
        >
          About Me
        </h2>
        <Image
          src="/aboutMe.png"
          className={css.aboutMeImg}
          width={701}
          height={561}
          alt="me"
          loading="lazy"
        />
        <div className={css.aboutMeInfo}>
          <h2
            className={`${css.secondHeading} ${css.aboutMeHeading} ${css.aboutMeHeadingPc}`}
          >
            About Me
          </h2>
          <p className={css.aboutMeText}>
            &quot;Hi! I&apos;m Anastasiia. <br /> <br /> I create rugs that
            bring warmth and personality to your space. Every piece is made with
            love and careful attention to detail.
            <br />
            <br /> You can order a custom handmade rug with your own design,
            idea, or favorite character. I also create unique 3D rugs with a
            special textured look and feel. <br />
            <br /> I&apos;m originally from Ukraine and currently based in
            Wrocław, Poland, where I continue creating cozy and creative
            handmade rugs for people all around the world.&quot;
          </p>
        </div>
      </section>
      <section id="collection" className={css.collection}>
        <h2 className={css.secondHeading}>Collection</h2>
        <Gallery />
      </section>
      <section className={css.how}>
        <h2 className={css.secondHeading}>How it&apos;s done?</h2>
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="iconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#86224f" />
              <stop offset="100%" stopColor="#f15b97" />
            </linearGradient>
          </defs>
        </svg>
        <ul className={css.howList}>
          <li className={css.howItem}>
            <FaRegLightbulb
              className={css.howIcon}
              size={100}
              style={{ fill: "url(#iconGrad)" }}
            />
            <h3 className={css.howHeading}>1. The Vision</h3>
            <p className={css.howText}>
              Share your idea, colors, or sketch. We collaborate on a final
              digital proof to ensure every curve is perfect before we begin.
            </p>
          </li>
          <li className={css.howItem}>
            <GiSandsOfTime
              className={css.howIcon}
              size={100}
              style={{ fill: "url(#iconGrad)" }}
            />
            <h3 className={css.howHeading}>2. The Tufting</h3>
            <p className={css.howText}>
              Using professional pneumatic guns, we translate the design onto
              monk`s cloth, layering different pile heights for a 3D tactile
              effect.
            </p>
          </li>
          <li className={css.howItem}>
            <MdOutlineDoneAll
              className={css.howIcon}
              size={100}
              style={{ fill: "url(#iconGrad)" }}
            />
            <h3 className={css.howHeading}>3. Finishing</h3>
            <p className={css.howText}>
              The rug is glued, backed with premium felt, and meticulously
              sheared by hand to reveal crisp lines and soft textures.
            </p>
          </li>
        </ul>
      </section>
      <section className={css.instagram}>
        <h2 className={css.secondHeading}>Instagram</h2>
        <Instagram />
      </section>
    </main>
  );
}
