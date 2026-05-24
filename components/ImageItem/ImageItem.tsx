"use client";

export type Item = {
  alt?: string;
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
};

import { Image } from "react-konva";
import useImage from "use-image";
import type { Image as KonvaImage } from "konva/lib/shapes/Image";
import type { KonvaEventObject } from "konva/lib/Node";

type Props = {
  item: Item;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (data: Partial<Item>) => void;
  registerRef: (node: KonvaImage | null) => void;
};

export default function ImageItem({
  item,
  onSelect,
  onChange,
  registerRef,
}: Props) {
  const [image] = useImage(item.src);

  return (
    <Image
      alt="picture"
      ref={registerRef}
      onMouseEnter={(e) => {
        const stage = e.target.getStage();

        if (stage) {
          stage.container().style.cursor = "move";
        }
      }}
      onMouseLeave={(e) => {
        const stage = e.target.getStage();

        if (stage) {
          stage.container().style.cursor = "default";
        }
      }}
      image={image}
      x={item.x}
      y={item.y}
      width={item.width}
      height={item.height}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e: KonvaEventObject<DragEvent>) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = e.target;

        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        node.scaleX(1);
        node.scaleY(1);

        onChange({
          x: node.x(),
          y: node.y(),
          width: node.width() * scaleX,
          height: node.height() * scaleY,
        });
      }}
    />
  );
}
