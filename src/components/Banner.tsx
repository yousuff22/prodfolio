// The wide image at the top of the page, like a social media header.
import Image from "next/image";
import { content } from "@/content";

export function Banner() {
  // Nothing to show if no banner is set in content.ts
  if (!content.banner) return null;

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border">
      <Image
        src={content.banner}
        alt="" // purely decorative, so screen readers skip it
        width={1500} // the image's real size, so the page saves space for it while it loads
        height={500}
        loading="eager" // it's at the top of the page, so load it right away
        sizes="(max-width: 672px) 100vw, 640px" // tells the browser which size to download
        className="h-auto w-full"
      />
    </div>
  );
}
