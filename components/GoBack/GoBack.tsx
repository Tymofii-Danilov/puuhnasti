"use client";
import { useRouter } from "next/navigation";
import css from "./GoBack.module.css";
export default function GoBack() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button className={css.btn} onClick={handleClick}>
      ← Go Back
    </button>
  );
}
