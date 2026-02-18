"use client";

import { useTransition } from "react";
import { disableDraftMode } from "@/app/lib/actions";
import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition();
  const isPresentationTool = useIsPresentationTool();

  const disable = () => startTransition(() => disableDraftMode());

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button
          type="button"
          onClick={disable}
          className="bg-black text-white px-4 py-2 rounded shadow-lg hover:bg-gray-800"
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
