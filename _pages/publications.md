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
</script>
