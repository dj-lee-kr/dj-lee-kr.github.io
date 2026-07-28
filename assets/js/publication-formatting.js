document.querySelectorAll(".publications .periodical em").forEach((element) => {
  const firstNode = element.firstChild;

  if (firstNode?.nodeType === Node.TEXT_NODE) {
    firstNode.textContent = firstNode.textContent.replace(/^In\s+/, "");
  }
});

document.querySelectorAll(".publications .author").forEach((element) => {
  if (!/[\u3131-\uD79D]/.test(element.textContent)) return;

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((textNode) => {
    const text = textNode.textContent.replace(/,?\s+and\s+/g, ", ");

    if (textNode.parentElement?.closest("em") || !text.includes("이동준")) {
      textNode.textContent = text;
      return;
    }

    const fragment = document.createDocumentFragment();

    text.split(/(이동준)/).forEach((part) => {
      if (part === "이동준") {
        const selfName = document.createElement("em");
        selfName.textContent = part;
        fragment.append(selfName);
      } else {
        fragment.append(document.createTextNode(part));
      }
    });

    textNode.replaceWith(fragment);
  });
});

const publicationResources = {
  ko2024iqr: [
    { label: "Poster", href: "/assets/pdf/publications/ko2024iqr-slides.pdf" },
    { label: "PDF", href: "/assets/pdf/publications/ko2024iqr-paper.pdf" },
    { label: "Paper", href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11891036" },
  ],
  ko2026autoaccel: [
    { label: "PDF", href: "/assets/pdf/publications/ko2026autoaccel-paper.pdf" },
    { label: "Paper", href: "https://link.springer.com/article/10.1007/s11554-025-01796-7" },
  ],
  lee2025mobilenet: [
    { label: "Poster", href: "/assets/pdf/publications/lee2025mobilenet-slides.pdf" },
    { label: "PDF", href: "/assets/pdf/publications/lee2025mobilenet-paper.pdf" },
  ],
  lee2025poweroftwo: [
    { label: "Poster", href: "/assets/pdf/publications/lee2025poweroftwo-slides.pdf" },
    { label: "PDF", href: "/assets/pdf/publications/lee2025poweroftwo-paper.pdf" },
    { label: "Paper", href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12332106" },
  ],
  lee2026gatingweighted: [
    { label: "Poster", href: "/assets/pdf/publications/lee2026gatingweighted-slides.pdf" },
    { label: "PDF", href: "/assets/pdf/publications/lee2026gatingweighted-paper.pdf" },
  ],
  lee2026languagegiants: [
    { label: "PDF", href: "/assets/pdf/publications/lee2026languagegiants-paper.pdf" },
    { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0893608026003618" },
  ],
  lee2026moedeployment: [
    { label: "Slide", href: "/assets/pdf/publications/lee2026moedeployment-slides.pdf" },
    { label: "PDF", href: "/assets/pdf/publications/lee2026moedeployment-paper.pdf" },
    { label: "Paper", href: "https://ieeexplore.ieee.org/abstract/document/11386441" },
  ],
};

document.querySelectorAll(".publications ol.bibliography > li").forEach((item) => {
  const entry = item.querySelector(".col-sm-8[id]");
  const title = entry?.querySelector(".title")?.textContent.trim();

  if (!entry?.id || item.querySelector(".publication-index-link")) return;

  const link = document.createElement("a");
  link.className = "publication-index-link";
  link.href = `/publications/${encodeURIComponent(entry.id)}/`;
  link.setAttribute("aria-label", `View publication details: ${title || entry.id}`);
  item.append(link);

  const resources = (publicationResources[entry.id] || []).slice(0, 2);

  if (resources.length > 0) {
    const resourceList = document.createElement("div");
    const tagColumn = item.querySelector(".abbr");
    resourceList.className = "publication-index-resources";
    resourceList.setAttribute("aria-label", "Publication resources");

    resources.forEach((resource) => {
      const resourceLink = document.createElement("a");
      resourceLink.className = "publication-index-resource";
      resourceLink.href = resource.href;
      resourceLink.textContent = resource.label;

      if (/^https?:\/\//.test(resource.href)) {
        resourceLink.target = "_blank";
        resourceLink.rel = "noopener noreferrer";
      }

      resourceList.append(resourceLink);
    });

    (tagColumn || entry).append(resourceList);
  }
});
