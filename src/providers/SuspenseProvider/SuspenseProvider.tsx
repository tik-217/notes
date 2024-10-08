// react
import { Suspense } from "react";

// components
import { DefaultLoader } from "@components/DefaultLoader";

export function SuspenseProvider({ children }: { children: JSX.Element }) {
  return <Suspense fallback={DefaultLoader()}>{children}</Suspense>;
}
