"use client";
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Transformer } from "react-konva";
import type { Transformer as TransformerType } from "konva/lib/shapes/Transformer";
import type { Image as KonvaImage } from "konva/lib/shapes/Image";
import type { KonvaEventObject } from "konva/lib/Node";
import ImageItem, { Item } from "../ImageItem/ImageItem";
import css from "./Editor.module.css";
import type { Stage as KonvaStage } from "konva/lib/Stage";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../sort/SortableItem";

export default function Editor() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);

      const img = new window.Image();

      img.onload = () => {
        const max = 300;
        const scale = Math.min(max / img.width, max / img.height);

        setItems((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            src: url,
            x: 100,
            y: 100,
            width: (img.width / 2) * scale,
            height: (img.height / 2) * scale,
          },
        ]);
      };

      img.src = url;
      setPhotosUploaded(true);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    handleFiles(files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (!files.length) return;

    handleFiles(files);
  };

  const imageRefs = useRef<Record<string, KonvaImage | null>>({});
  const trRef = useRef<TransformerType | null>(null);

  useEffect(() => {
    if (!selectedId) return;

    const node = imageRefs.current[selectedId];

    if (!node) return;

    trRef.current?.nodes([node]);
    trRef.current?.getLayer()?.batchDraw();
  }, [selectedId]);

  const handleStageClick = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const deleteSelected = (item: Item) => {
    setItems((prev) => prev.filter((el) => el.id !== item.id));
    delete imageRefs.current[item.id];
    setSelectedId(null);
    if (items.length === 1) {
      setPhotosUploaded(false);
    }
    trRef.current?.nodes([]);
    trRef.current?.getLayer()?.batchDraw();
  };
  const [isOver, setIsOver] = useState(false);

  const stageRef = useRef<KonvaStage | null>(null);
  const exportImage = () => {
    if (!stageRef.current) return;

    const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });

    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = dataURL;
    link.click();
  };

  const [aspectRatio, setAspectRatio] = useState<"1:1" | "4:3" | "16:9">(
    "16:9",
  );
  const ratioMap = {
    "1:1": 1,
    "4:3": 3 / 4,
    "16:9": 9 / 16,
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const height = width * ratioMap[aspectRatio];

  const [photosUploaded, setPhotosUploaded] = useState(false);
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const update = () => {
      setWidth(element.getBoundingClientRect().width);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(containerRef.current!);

    return () => observer.disconnect();
  }, [photosUploaded, items]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);

      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 8,
      },
    }),
  );

  return (
    <section className={`container ${css.section}`}>
      <h1 className={`secondHeading ${css.createHeading}`}>
        Create your own design
      </h1>
      <div className={css.workArea}>
        <div
          className={`${css.dragSizeWrap} ${items.length > 0 ? css.uploaded : ""}`}
        >
          <div
            className={`${css.inputWrap} ${photosUploaded ? css.uploadedInput : ""} ${isOver ? css.active : ""}`}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsOver(true);
            }}
            onDragLeave={() => setIsOver(false)}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleChange}
            />
            {!items.length && (
              <div className={css.empty}>
                Drop images here
                <br />
                or click to upload
              </div>
            )}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={items.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
              >
                <ul className={css.list}>
                  {items.map((item) => (
                    <SortableItem
                      key={item.id}
                      item={item}
                      onDelete={deleteSelected}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </div>
          {items.length > 0 && photosUploaded && (
            <>
              <div className={css.sizeSection}>
                <p>Choose the aspect ratio of your rug</p>
                <div className={css.btns}>
                  <button
                    onClick={() => {
                      setAspectRatio("1:1");
                    }}
                  >
                    1:1
                  </button>
                  <button
                    onClick={() => {
                      setAspectRatio("4:3");
                    }}
                  >
                    4:3
                  </button>
                  <button
                    onClick={() => {
                      setAspectRatio("16:9");
                    }}
                  >
                    16:9
                  </button>
                </div>
              </div>
              <button
                className={`${css.pcExport} ${css.exportBtn}`}
                onClick={exportImage}
              >
                Click here to export stage as image
              </button>
            </>
          )}
        </div>
        {items.length > 0 && photosUploaded && (
          <>
            <div ref={containerRef} className={css.canvasContainer}>
              <Stage
                ref={stageRef}
                width={width}
                height={height}
                onMouseDown={handleStageClick}
                onTouchStart={handleStageClick}
                className={css.stage}
              >
                <Layer>
                  {items.map((item) => (
                    <ImageItem
                      key={item.id}
                      item={item}
                      isSelected={selectedId === item.id}
                      onSelect={() => setSelectedId(item.id)}
                      onChange={(data) => {
                        setItems((prev) =>
                          prev.map((el) =>
                            el.id === item.id ? { ...el, ...data } : el,
                          ),
                        );
                      }}
                      registerRef={(node) => {
                        if (node) imageRefs.current[item.id] = node;
                      }}
                    />
                  ))}
                  {selectedId && <Transformer ref={trRef} keepRatio />}
                </Layer>
              </Stage>
            </div>
            <button
              className={`${css.mobExport} ${css.exportBtn}`}
              onClick={exportImage}
            >
              Click here to export stage as image
            </button>
          </>
        )}
      </div>
    </section>
  );
}
