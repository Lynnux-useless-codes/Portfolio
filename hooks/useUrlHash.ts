import { useEffect, useReducer } from 'react';

export function useUrlHash(): string | null {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    function handleHashChange() {
      forceUpdate();
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [forceUpdate]);

  if (typeof window === "undefined") {
    return null; // Return `null` while server-side
  }

  return window.location.hash.split("#")[1] || "about";
}

export function useForceUpdate(): () => void {
  const [, forceUpdate] = useReducer((dummyVar: number) => dummyVar + 1, 0);
  return forceUpdate;
}
