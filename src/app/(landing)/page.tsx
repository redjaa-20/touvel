import type { Metadata } from "next";

import { LandingView } from "src/sections/landing/view";

// ------------------------------------------------------------
// Metadata
// ------------------------------------------------------------

export const metadata: Metadata = {
  title: "Touvel",
  description: "",
};

// ------------------------------------------------------------
// Page
// ------------------------------------------------------------

export default function Page() {
  return <LandingView />;
}
