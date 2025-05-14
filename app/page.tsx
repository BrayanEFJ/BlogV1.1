// src/app/page.tsx
"use client";
import { Block } from "@/components/block/Block";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [blocks, setBlocks] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/bloques.json");
      const data = await res.json();
      setBlocks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Renderizado de bloques estilo Notion
      </h1>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Home;
