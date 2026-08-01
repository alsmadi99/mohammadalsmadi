import { useEffect, useRef } from "react";

const LOADER = "https://meetmizan.com/embed/mizan-embed.js";

// One loader per page, however many embeds mount.
function loadMizan() {
  if (window.__mizanEmbedLoader) return window.__mizanEmbedLoader;
  window.__mizanEmbedLoader = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = LOADER;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return window.__mizanEmbedLoader;
}

export default function ZakatCalculator() {
  const host = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadMizan()
      .then(() => {
        if (cancelled || !host.current) return;
        host.current.innerHTML = ""; // StrictMode mounts twice in dev
        window.MizanEmbed.render(host.current, {
          partner: "mohammadalsmadi",
          lang: "en",
          currency: "USD",
          primary: "#123456",
          ctaLabel: "Give your Zakat",
          ctaUrl: "https://mohammadalsmadi.com/donate",
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={host} style={{ maxWidth: 800, margin: "0 auto" }} />;
}
