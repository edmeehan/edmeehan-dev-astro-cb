class GradientOrbs extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot.children.length) this._render();
  }

  _getColors() {
    const computed = getComputedStyle(this);
    return [
      computed.getPropertyValue('--orb-color-1').trim() || '#ff3cac',
      computed.getPropertyValue('--orb-color-2').trim() || '#784ba0',
      computed.getPropertyValue('--orb-color-2').trim() || '#2b86c5',
    ];
  }

  _orbConfigs(colors) {
    // Each orb gets a color, a size, and a unique keyframe path + duration
    return [
      {
        color: colors[0],
        size: 600,
        duration: 18,
        kf: [
          { transform: 'translate(0vw, 0%)' },
          { transform: 'translate(40vw, -50%)' },
          { transform: 'translate(20vw, -20%)' },
          { transform: 'translate(0vw, 0%)' },
        ],
      },
      {
        color: colors[1],
        size: 520,
        duration: 18,
        kf: [
          { transform: 'translate(70vw, 20%)' },
          { transform: 'translate(20vw, 55%)' },
          { transform: 'translate(5vw, 65%)' },
          { transform: 'translate(70vw, 20%)' },
        ],
      },
      {
        color: colors[2],
        size: 480,
        duration: 18,
        kf: [
          { transform: 'translate(40vw, 20%)' },
          { transform: 'translate(80vw, 50%)' },
          { transform: 'translate(-10vw, 90%)' },
          { transform: 'translate(40vw, 20%)' },
        ],
      }
    ];
  }

  _render() {
    const colors = this._getColors();
    const orbs   = this._orbConfigs(colors);

    // Build shadow DOM
    this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              inset: 0;
              pointer-events: none;
              overflow: hidden;
              position: relative;
            }
            .orb {
              position: absolute;
              transform-origin: center;
              filter: blur(30px);
              top: 0;
              left: 0;
            }
            slot {
              display: block;
              position: relative;
              z-index: 10;
              pointer-events: auto;
            }
          </style>
          <slot></slot>
        `;

    orbs.forEach((cfg) => {
      const el = document.createElement('div');
      el.className = 'orb';

      Object.assign(el.style, {
        width:      `${cfg.size}px`,
        height:     `${cfg.size}px`,
        background: `radial-gradient(circle, ${cfg.color}, transparent 70%)`,
        // opacity:    cfg.opacity ?? 0.75,
      });

      this.shadowRoot.appendChild(el);

      // Animate with WAAPI
      el.animate(cfg.kf, {
        duration:   cfg.duration * 1000,
        iterations: Infinity,
        easing:     'ease-in-out',
      });
    });
  }
}

customElements.define('gradient-orbs', GradientOrbs);