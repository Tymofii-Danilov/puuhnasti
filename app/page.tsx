import css from "./page.module.css";
import HeroImage from "@/components/HeroImage/HeroImage";
import { FaRegLightbulb } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineDoneAll } from "react-icons/md";
import Gallery from "@/components/Swiper/Swiper";

export default function Home() {
  return (
    <main>
      <section className={css.hero}>
        <h1 className={css.firstHeading}>
          Handmade tufted rugs designed exactly the way you imagine them
        </h1>
        <HeroImage />
        <p className={css.heroText}>Make Your Space Softer with Custom Rugs</p>
        <a type="button" href="#collection" className={css.heroBtn}>
          CHOOSE YOURS
        </a>
      </section>
      <section id="collection" className={css.collection}>
        <h2 className={css.secondHeading}>Collection</h2>
        <Gallery />
      </section>
      <section>
        <h2 className={css.secondHeading}>How it&apos;s done?</h2>
        <ul className={css.howList}>
          <li className={css.howItem}>
            <FaRegLightbulb
              className={css.howIcon}
              size={100}
              color="#641639"
            />
            <h3 className={css.howHeading}>1. The Vision</h3>
            <p className={css.howText}>
              Share your idea, colors, or sketch. We collaborate on a final
              digital proof to ensure every curve is perfect before we begin.
            </p>
          </li>
          <li className={css.howItem}>
            <GiSandsOfTime className={css.howIcon} size={100} color="#641639" />
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
              color="#641639"
            />
            <h3 className={css.howHeading}>3. Finishing</h3>
            <p className={css.howText}>
              The rug is glued, backed with premium felt, and meticulously
              sheared by hand to reveal crisp lines and soft textures.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
