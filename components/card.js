const template = document.createElement('template');
template.innerHTML = /* html */ `
<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: var(--shadow);

    background-color: var(--bg-comp-color);
    color: var(--font-color);

    border-radius: 5px;
  }

  #card-title {
    width: 100%;
    border-bottom: 1px solid lightgray;
  }

  #card-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #card-actions {
    width: 100%;
    border-top: 1px solid lightgray;
  }
</style>
<div class="card">
  <div id="card-title"></div>
  <div id="card-content"></div>
  <div id="card-actions"></div>
</div>
`;

export class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setupComponent(
      this.getAttribute('width'),
      this.getAttribute('height'),
      this.getAttribute('img'),
      this.getAttribute('link')
    );
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}

  render() {}

  setupComponent(width, height, img, link) {
    if (width) {
      this.shadowRoot.querySelector('.card').style.width = width;
      this.shadowRoot.querySelector('.card').style.height = '100%';
      this.shadowRoot.querySelector('.card').style.margin = '0 20px 0 0';

      this.shadowRoot.querySelector('#card-title').style.display = 'none';

      this.shadowRoot.querySelector('#card-content').style.height = '100%';

      this.shadowRoot.querySelector('#card-actions').style.display = 'none';

      this.shadowRoot.querySelector('#card-content').innerHTML = /* html */ `
        <a href=${link} target="_blank">
          <img src=./assets/${img} width="60%"/>
          </a>
      `;
    }
    if (height) {
      this.shadowRoot.querySelector('.card').style.height = height;
      this.shadowRoot.querySelector('.card').style.left = '0';
      this.shadowRoot.querySelector('.card').style.right = '0';
      this.shadowRoot.querySelector('.card').style.margin = '0 20px 20px 20px';

      this.shadowRoot.querySelector('#card-title').style.height = '10%';

      this.shadowRoot.querySelector('#card-content').style.height = '80%';

      this.shadowRoot.querySelector('#card-actions').style.height = '10%';

      this.shadowRoot.querySelector('#card-content').innerHTML = /* html */ `
        <img src=./assets/${img} height="60%"/>
      `;

      this.shadowRoot.querySelector('#card-title').innerHTML = `
        Lorem Ipsum
      `;

      this.shadowRoot.querySelector('#card-actions').innerHTML = `
        Lorem Ipsum
      `;
    }
  }
}
