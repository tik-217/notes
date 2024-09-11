// react
import { Suspense } from "react";

// components
import { DefaultLoader } from "@components/DefaultLoader";

export function SuspenseWrap({ children }: { children: JSX.Element }) {
  return <Suspense fallback={DefaultLoader()}>{children}</Suspense>;
}
