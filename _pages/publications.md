---
layout: page
permalink: /publications/
title: Publication
description: Journal and conference publications. * indicates equal contribution.
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<div class="publications">

{% bibliography %}

</div>

<script>
  document.querySelectorAll(".publications .periodical em").forEach((element) => {
    const firstNode = element.firstChild;

    if (firstNode?.nodeType === Node.TEXT_NODE) {
      firstNode.textContent = firstNode.textContent.replace(/^In\s+/, "");
    }
  });

  document.querySelectorAll(".publications .author").forEach((element) => {
    if (!/[가-힣]/.test(element.textContent)) return;

    const textNodes = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

    while (textNodes.nextNode()) {
      textNodes.currentNode.textContent = textNodes.currentNode.textContent.replace(/,?\s+and\s+/g, ", ");
    }
  });
</script>
