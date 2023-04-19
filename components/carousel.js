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
  <my-card width=${size} img="icons/linkedin.png" link="https://www.linkedin.com/in/ernestojrangel/"></my-card>
  <my-card width=${size} img="icons/github.png" link="https://github.com/ernestorangel"></my-card>
  <my-card width=${size} img="icons/twitter.png" link="https://twitter.com/ernestojrangel"></my-card>
  <my-card width=${size} img="icons/instagram.png" link="https://www.instagram.com/ernestojrangel/"></my-card>
  <my-card width=${size} img="icons/youtube.png" link="https://www.youtube.com/@ernestorangel"></my-card>
  <my-card width=${size} img="icons/facebook.png" link="https://www.facebook.com/ernestojrangeldecastro"></my-card>
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
