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

document.querySelectorAll(".publications ol.bibliography > li").forEach((item) => {
  const entry = item.querySelector(".col-sm-8[id]");
  const title = entry?.querySelector(".title")?.textContent.trim();

  if (!entry?.id || item.querySelector(".publication-index-link")) return;

  const link = document.createElement("a");
  link.className = "publication-index-link";
  link.href = `/publications/${encodeURIComponent(entry.id)}/`;
  link.setAttribute("aria-label", `View publication details: ${title || entry.id}`);
  item.append(link);
});
