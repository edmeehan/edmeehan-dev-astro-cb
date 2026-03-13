---
_schema: default
title: Astro Component Starter
description: >-
  Build fast, customizable Astro sites with a modern component starter that is
  easy to edit and maintain.
pageSections:
  - _component: page-sections/heroes/hero-story
    eyebrow: Eyebrow text
    heading: Heading text
    subtext: Subtext placeholder text that will be replaced with actual content.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: My Button
        hideText: false
        link: ''
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
    images:
      imageSource_1: /src/assets/images/component-docs/dunedin-cliff.jpg
      imageAlt_1: Hero image
      imageSource_2: /src/assets/images/component-docs/dunedin-cliff.jpg
      imageAlt_2: Hero image
      imageSource_3: /src/assets/images/component-docs/dunedin-cliff.jpg
      imageAlt_3: Hero image
    backgroundColor: default
  - _component: page-sections/features/feature-grid
    eyebrow: Principles
    heading: Built for real-world web projects
    subtext: No trends. No noise. Just reliability.
    features:
      - title: Web fundamentals
        description: >-
          Semantic HTML. Lean CSS. JavaScript only when it's needed. The stack
          is boring by design, and that’s exactly why it works.
        iconName: cube
        iconColor: blue
      - title: Built for speed
        description: >-
          Static-rendered, minimal payloads, zero waste. Built to be extremely
          fast from the first byte.
        iconName: bolt
        iconColor: yellow
      - title: Everything just fits
        description: >-
          Simple, predictable components that play nice together. Build bigger
          pieces without creating a maintenance mess.
        iconName: puzzle-piece
        iconColor: green
    colorScheme: inherit
    backgroundColor: surface
    gap: xl
    minItemWidth: 280
    maxItemWidth: 360
    align: center
---
