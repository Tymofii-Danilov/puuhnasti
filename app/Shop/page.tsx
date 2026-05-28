import ProductsList from "@/components/ProductsList/ProductsList";
import css from "./page.module.css";

export default function Shop() {
  return (
    <section className={`container`}>
      <h1 className={`secondHeading`}>Shop</h1>
      <ul className={css.shopList}>
        <ProductsList />
      </ul>
    </section>
  );
}
