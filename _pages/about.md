---
layout: about
title: About
permalink: /
subtitle: M.S. Student, Electrical and Information Engineering, Seoul National University of Science and Technology (SeoulTech)

profile:
  align: right
  image: dongjun_profile_nobg.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <div class="profile-links" aria-label="Profile links">
      <a href="/assets/rendercv/rendercv_output/Dongjun_Lee_CV.pdf" title="CV" aria-label="CV"><i class="ai ai-cv"></i></a>
      <a href="https://github.com/dj-lee-kr" title="GitHub" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/dongjun-lee-217bb1361/" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
    </div>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # profile links are displayed directly below the profile image

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="about-intro" markdown="1">

Hi! I am an M.S. student at the [Intelligent Digital Systems Design Laboratory (IDSL)](https://idsl.seoultech.ac.kr/) at [SeoulTech](https://www.seoultech.ac.kr/), advised by [Prof. Hyun Kim](https://scholar.google.com/citations?user=mCuJP1UAAAAJ&hl=ko). I received my B.S. degree in Electrical and Information Engineering from [SeoulTech](https://eie.seoultech.ac.kr/) in February 2025.

My research interests include **efficient AI systems**, **AI accelerators**, and **digital system design**. In particular, I am interested in algorithm–hardware co-design for reducing the computational and memory costs of AI models and enabling their efficient deployment on resource-constrained hardware platforms.

To learn more about my research, please visit the [Publication page](https://dj-lee-kr.github.io/publications/) or my [Google Scholar profile](https://scholar.google.com/citations?user=fOEy_d0AAAAJ&hl=ko).

For research inquiries or collaboration opportunities, please feel free to contact me at [dj.lee@seoultech.ac.kr](mailto:dj.lee@seoultech.ac.kr).

</div>

<div class="about-preview-sections">
  <section class="about-preview-section" aria-labelledby="about-news-heading">
    <div class="about-preview-header">
      <h2 id="about-news-heading">News</h2>
      <a class="about-more-link" href="{{ '/news/' | relative_url }}">
        <span>More</span>
      </a>
    </div>

    {% assign recent_news = site.news | sort: "date" | reverse %}

    <ul class="news-index news-index--compact">
      {% for item in recent_news limit: 3 %}
        <li>
          <a class="news-index-item" href="{{ item.url | relative_url }}">
            <span class="news-index-tag">{{ item.tag }}</span>

            <div class="news-index-content">
              <p class="news-index-summary">{{ item.summary | default: item.excerpt | strip_html | strip_newlines }}</p>
              <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %d, %Y" }}</time>
            </div>

            <svg
              class="news-index-arrow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      {% endfor %}
    </ul>

  </section>

  <section class="about-preview-section" aria-labelledby="about-publication-heading">
    <div class="about-preview-header">
      <h2 id="about-publication-heading">Publication</h2>
      <a class="about-more-link" href="{{ '/publications/' | relative_url }}">
        <span>More</span>
      </a>
    </div>

    <div class="publications about-recent-publications">
      {% bibliography --group_by none --max 3 %}
    </div>

  </section>
</div>

<script src="{{ '/assets/js/publication-formatting.js' | relative_url }}?v=1"></script>
