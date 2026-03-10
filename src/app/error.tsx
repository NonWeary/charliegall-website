"use client";

import { DnfScreen } from "@/components/DnfScreen";

export default function Error({ reset }: { reset: () => void }) {
  return <DnfScreen onReset={reset} />;
}
