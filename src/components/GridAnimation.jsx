import React, { useEffect, useState } from "react";

const GridAnimation = () => {
  const rows = 10;
  const cols = 20;
  const totalCells = rows * cols;
  const purpleBlockCount = 15; // Number of purple boxes

  const [activeBlocks, setActiveBlocks] = useState([]);

  const generateRandomBlocks = () => {
    const indices = new Set();
    while (indices.size < purpleBlockCount) {
      indices.add(Math.floor(Math.random() * totalCells));
    }
    return Array.from(indices);
  };

  useEffect(() => {
    setActiveBlocks(generateRandomBlocks());
    const interval = setInterval(() => {
      setActiveBlocks(generateRandomBlocks());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div
        className="grid gap-0 border border-gray-300"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-700 border border-gray-200 ${
              activeBlocks.includes(i)
                ? "bg-purple-600"
                : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridAnimation;
