"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import { useRouter } from "next/navigation";
import { MOCK_IMAGE_LIST } from "./MOCK_IMAGE_LIST";
import Image from "next/image";

export default function ViewTransitionGallery() {
  const router = useRouter();

  const handleClickItem = (id: string) => {
    router.push(`/react-example/view-transition-gallery/${id}`);
  };

  return (
    <ViewTransition>
      <div className="main-container">
        <h1 className="title">View Transition Gallery</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Click on any item to see the smooth view transition animation
        </p>

        <div className="flex max-w-2xl flex-col gap-6">
          {MOCK_IMAGE_LIST.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClickItem(item.id)}
              className="group flex cursor-pointer gap-4"
            >
              <div
                className="relative aspect-[4/3] w-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
                style={{
                  viewTransitionName: `image-container-${item.id}`,
                }}
              >
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="192px"
                />
              </div>
              <div className="flex-1">
                <h2
                  className="mb-1 text-lg font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  style={{
                    viewTransitionName: `image-title-${item.id}`,
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-sm text-gray-600 dark:text-gray-400"
                  style={{
                    viewTransitionName: `image-description-${item.id}`,
                  }}
                >
                  {item.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ViewTransition>
  );
}
