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
    tags:
    - text: Technical Thinker
      color: "#33A8AE"
    - text: Shopify Expert
      color: "#E5A67E"
    - text: Shaka Thrower
      color: "#8AB73E"
    images:
      imageSource_1: /src/assets/images/castle.jpg
      imageAlt_1: Hero image
      imageSource_2: /src/assets/images/component-docs/dunedin-cliff.jpg
      imageAlt_2: Hero image
      imageSource_3: /src/assets/images/sheep.jpg
      imageAlt_3: Hero image
    backgroundColor: highlight
  - _component: page-sections/features/feature-grid
    eyebrow: Services
    heading: Fixed-scope projects delivered fast. No agency bloat. No surprises.
    subtext: 
    features:
      - title: Design & Build
        description: >-
          Your last agency took months, went over budget, and left you with a store held together like Frankenstein. I deliver premium Shopify storefronts to a fixed scope — they look great, perform on mobile, and don't break when you touch them.
        iconName: cube
        iconColor: default
      - title: Speed & Optimization
        description: >-
          You've paid for speed apps and audits. Your score is still 32. You're losing sales every day your store crawls.
        iconName: bolt
        iconColor: default
      - title: Ongoing Support
        description: >-
          You're stuck chasing developers who ghost when things break. Every issue costs you time and revenue.
        iconName: puzzle-piece
        iconColor: default
    colorScheme: inherit
    backgroundColor: accent
    gap: xl
    minItemWidth: 280
    maxItemWidth: 360
    align: center
  - _component: page-sections/features/full-content-card
    heading: Inside the SunBum Shopify Build
    subtext: >-
      End-to-end Shopify implementation delivering a fast, reliable, and
      conversion-optimized ecommerce experience at scale.
    link: '/about'
    imageSource: /src/assets/images/dunedin-cliff.jpg
    imageAlt: Project image
    tags:
      - label: Shopify
      - label: Front-End Development
      - label: Plug-in management
    reverse: false
    colorScheme: inherit
    backgroundColor: surface
  - _component: page-sections/features/feature-article
    post: /src/content/blog/2025-12-24-content-first-design.mdx
    colorScheme: inherit
    backgroundColor: base
---
