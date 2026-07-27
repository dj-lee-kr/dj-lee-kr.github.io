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
