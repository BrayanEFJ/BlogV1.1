// src/components/Bloque.tsx

import MarkdownRendererText from "@/lib/MarkdownRendererText";

export function Block({ block }: { block: any }) {
  return (
    <div className=" mb-2">
      <div className="py-1 rounded-lg  ">
        {block.type === "text" && (
          <MarkdownRendererText content={block.content} />
        )}

        {block.type === "image" && (
          <div className="mt-2">
            <img
              src={block.content}
              alt={block.alt}
              className="rounded max-w-full"
            />
            {block.alt && (
              <p className="text-sm text-gray-500 dark:text-white/80 mt-1 italic">{block.alt}</p>
            )}
          </div>
        )}
      </div>

     
    </div>
  );
}
