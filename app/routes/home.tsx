import React from "react";
import Left from "~/components/left";
// import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Home | Fahmi XD" },
    { name: "description", content: "Hai, namaku Fahmi, saya mempunyai hobi yaitu bermain game dan coding. Saya tertarik dalam dunia teknologi dan IT. Saya tinggal di kota Bandung, Indonesia, dan masih duduk di bangku SMK." },
  ];
}

export default function Home() {
  return (
    <Left />
  )
}
