import React from "react";

function Banner({ icon, label }: { icon: string, label: string }): React.ReactNode {
  return (
    <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 my-1">
      <span className="w-5">{icon}</span>
      <span className="text-banner text-xs">{label}</span>
    </div>
  );
}

function Banners(): React.ReactNode {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
      <Banner icon="💻" label="Coder" />
      <Banner icon="🎮" label="Game" />
      <Banner icon="🎐" label="Anime" />
      <Banner icon="🎵" label="Music" />
      <Banner icon="📸" label="Photography" />
      <Banner icon="👨‍💻" label="Learn" />
    </div>
  );
}

export default Banners;