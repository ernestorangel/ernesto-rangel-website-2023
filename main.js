import { AppBar } from './components/appBar.js';
import { Card } from './components/card.js';
import { Showcase } from './components/showcase.js';
import { Carousel } from './components/carousel.js';
import { setupLanguage } from './modules/lang.js';

window.customElements.define('app-bar', AppBar);
window.customElements.define('my-card', Card);
window.customElements.define('my-showcase', Showcase);
window.customElements.define('my-carousel', Carousel);

window.addEventListener('load', () => {
  setupLanguage(navigator.language || navigator.userLanguage);
});
