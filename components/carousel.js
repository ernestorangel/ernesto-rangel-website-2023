const template = document.createElement('template');
let size = '80px';
template.innerHTML = /* html */ `
<style>
  .carousel {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: ${size};

    padding: 2px 2px 2px 20px;
    margin: 0 0 20px 0;

    overflow-x: scroll;
  }

  my-card {
    height: 100%;
  }
</style>
<div class="carousel">
  <my-card width=${size} img="linkedin.png"></my-card>
  <my-card width=${size} img="github.png"></my-card>
  <my-card width=${size} img="twitter.png"></my-card>
  <my-card width=${size} img="instagram.png"></my-card>
  <my-card width=${size} img="youtube.png"></my-card>
  <my-card width=${size} img="facebook.png"></my-card>
</div>
`;

export class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}

  render() {}
}
