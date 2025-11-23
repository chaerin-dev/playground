"use client";

import { use } from "react";
import Link from "next/link";
import { MOCK_IMAGE_LIST } from "../MOCK_IMAGE_LIST";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const item = MOCK_IMAGE_LIST.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="main-container">
        <h1 className="title">Image not found</h1>
        <Link
          href="/react-example/view-transition-gallery"
          className="text-blue-600 dark:text-blue-400"
        >
          ← Back to gallery
        </Link>
      </div>
    );
  }

  const handleClickBack = () => {
    router.push("/react-example/view-transition-gallery");
  };

  return (
    <div className="main-container mx-auto max-w-4xl">
      <button
        onClick={handleClickBack}
        className="mb-6 text-blue-600 hover:underline dark:text-blue-400"
      >
        <span>← Back to gallery</span>
      </button>

      <div
        className="relative mb-6 aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
        style={{
          viewTransitionName: `image-container-${item.id}`,
        }}
      >
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
      </div>

      <h1
        className="title mb-4"
        style={{
          viewTransitionName: `image-title-${item.id}`,
        }}
      >
        {item.title}
      </h1>
      <p
        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        style={{
          viewTransitionName: `image-description-${item.id}`,
        }}
      >
        {item.longDescription}
      </p>
    </div>
  );
}
