---
layout: "layouts/blog.njk"
title: "Automation & Process Optimization"
des: "Discover how luxury home builders are streamlining operations, reducing costs, and improving efficiency through strategic automation and process optimization."
pagination:
  data: collections.automationPosts
  size: 3
  alias: posts
permalink: "/blog/automation/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
---