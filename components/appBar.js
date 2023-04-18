const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
  .app-bar {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    height: 60px;
    
    padding: 0 20px;

    box-shadow: var(--shadow);

    background-color: var(--bg-comp-color);
    color: var(--font-color);

    font-size: 24px;
    font-weight: 700;
  }

  .app-bar-sand-menu-open {
    height: 30px;
    width: 30px;

    position: absolute;
    right: 0;

    margin-right: 20px;

    background-color: var(--bg-comp-color);

    border: 0;
  }

  .app-bar-sand-menu-open:clicked {
    background-color: red;
  }

  .app-bar-sand-menu-close {
    height: 30px;
    width: 30px;

    position: absolute;
    right: 0;

    margin-top: 20px;
    margin-right: 20px;

    background-color: var(--bg-comp-color);

    border: 0;
  }

  .app-bar-drawer {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;

    min-width: 80vw;

    background-color: var(--bg-comp-color);

    box-shadow: var(--shadow);

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    transform: translateX(100vw);
    transition: transform 0.5s;

    z-index: 999;
  }
</style>
<div class="app-bar">
  <p></p>
  <button class="app-bar-sand-menu-open">
    <img src="../assets/icons/menu-hamburguer.svg" width="100%" class="ui-icon">
  </button>
  <div class="app-bar-drawer">
    <button name="menu" type="button" class="app-bar-sand-menu-close">
      <img src="../assets/icons/seta-para-a-direita.svg" width="100%" class="ui-icon"/>
    </button>
  </div>
</div>
`;

export class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('title');
    this.shadowRoot
      .querySelector('.app-bar-sand-menu-open')
      .addEventListener('click', () => {
        this.openDrawer(this.shadowRoot);
      });
    this.shadowRoot
      .querySelector('.app-bar-sand-menu-close')
      .addEventListener('click', () => {
        this.closeDrawer(this.shadowRoot);
      });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}

  render() {
    this.p;
  }

  openDrawer(shadowRoot) {
    shadowRoot.querySelector('.app-bar-drawer').style.transform =
      'translateX(0)';
  }

  closeDrawer(shadowRoot) {
    shadowRoot.querySelector('.app-bar-drawer').style.transform =
      'translateX(100vw)';
  }
}
