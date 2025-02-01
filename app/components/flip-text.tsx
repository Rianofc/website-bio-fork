import React from "react";
import { useState } from "react"

export default function FlipText({ text, delay }: { text: string, delay: number }): React.ReactNode {
  const [kata, setKata] = useState<string>("");
  setKata("Fahmi XD tesing")

  const def = {
    kata,
    text,
    delay
  }
  return <h1>{JSON.stringify(def)}</h1>
}