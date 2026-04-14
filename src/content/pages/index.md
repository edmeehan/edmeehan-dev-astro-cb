---
_schema: default
title: Astro Component Starter
description: >-
  Build fast, customizable Astro sites with a modern component starter that is
  easy to edit and maintain.
pageSections:
  - _component: page-sections/heroes/hero-story
    eyebrow: Shopify Expert
    heading: >-
      Reliable execution without the agency complexity or freelancer
      uncertainty.
    subtext: >-
      I help brands migrate off fragile stacks into stable, scalable platforms.
      Technical precision with strategic thinking and no agency bloat.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: View my services
        hideText: false
        link: ''
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
    images:
      imageSource_1: /src/assets/images/castle.jpg
      imageAlt_1: Hero image
      imageSource_2: /src/assets/images/component-docs/dunedin-cliff.jpg
      imageAlt_2: Hero image
      imageSource_3: /src/assets/images/sheep.jpg
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
  - _component: page-sections/features/full-content-card
    heading: Inside the SunBum Shopify Build
    subtext: >-
      End-to-end Shopify implementation delivering a fast, reliable, and
      conversion-optimized ecommerce experience at scale.
    imageSource: /src/assets/images/dunedin-cliff.jpg
    imageAlt: Project image
    tags:
      - label: Shopify
      - label: Front-End Development
      - label: Plug-in management
    reverse: false
    colorScheme: inherit
    backgroundColor: accent
    paddingVertical: 3xl
  - _component: page-sections/features/feature-article
    post: /src/content/blog/2025-12-24-content-first-design.mdx
    colorScheme: inherit
    backgroundColor: base
---
