import React from "react";
import Left from "~/components/left";
// import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Home | rian" },
    { name: "description", content: "Hai, namaku rian, saya mempunyai hobi yaitu bermain game dan coding. Saya tertarik dalam dunia teknologi dan IT. Saya tinggal di kota balj, Indonesia, dan masih duduk di bangku SMP." },
  ];
}

export default function Home() {
  return (
    <Left />
  )
}
