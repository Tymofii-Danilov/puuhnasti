import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import css from "../Editor/Editor.module.css";
import Image from "next/image";
import { Item } from "../ImageItem/ImageItem";

type Props = {
  item: Item;
  onDelete: (item: Item) => void;
};
export default function SortableItem({ item, onDelete }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li className={css.listItem} ref={setNodeRef} style={style} {...attributes}>
      <div {...listeners} style={{ cursor: "grab" }}>
        ☰
      </div>
      <Image
        className={css.img}
        src={item.src}
        alt="upload"
        width={75}
        height={75}
      />

      <button
        className={css.delete}
        onClick={(e) => {
          e.stopPropagation();
          onDelete?.(item);
        }}
      >
        x
      </button>
    </li>
  );
}
