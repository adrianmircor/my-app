import { LitElement, html, css } from "lit-element";
import { openWcLogo } from "./open-wc-logo.js";
import 'component-filter/component-filter.js'; //Esto se ve en node_modules

export class MyAplicacion extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--my-aplicacion-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = "My app :D";
  }

  render() {

    const title = "My app ☺";
    const titulo = "Envio a component-filter";
    console.log("v:")

    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/MyAplicacion.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <section>
        <component-filter title=${this.title}>
        </component-filter>
      </section>

      <section>
        <component-filter title=${title}>
        </component-filter>
      </section>

      <section>
        <component-filter title=${titulo}>
        </component-filter>
      </section>
    `;
  }
}
