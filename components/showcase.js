const template = document.createElement('template');
template.innerHTML = /* html */ `
<style>
  .showcase {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    left: 0;
    right: 0;
    
    padding: 0 5px;
    margin: 20px;

    color: var(--font-color);
  }

  #showcase-title {
    font-size: 18px;
    font-weight: 500;
  }

  #showcase-subtitle {
    font-size: 12px;
    font-weight: 300;
    padding: 0 10px 0 0;
  }
</style>
<div class="showcase">
  <div id="showcase-title">
    "Aqui vai uma frase pica."
  </div>
  <div id="showcase-subtitle">
    - Albert Einsten
  </div>
</div>
`;

export class Showcase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    //this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}

  render() {
    //this.h1;
  }
}
