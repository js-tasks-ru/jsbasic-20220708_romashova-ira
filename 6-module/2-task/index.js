import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #elem = '';
  #product = null;

  constructor(product) {
    this.#product = product;
    this.#elem = this.render();
  }

  #html() {
    return `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.#product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.#product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.#product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
  </div>`
  }

  render() {
    let productCard = createElement(this.#html());

    //кнопка + событие 
    const addButton = productCard.querySelector('.card__button');
    addButton.addEventListener('click', this.#onAddEventButtonClick);
    return productCard;
  }
  // обработчик события
  #onAddEventButtonClick = () => {
    const productId = this.#product.id;
    const productCardEvent = new CustomEvent("product-add",
      {
        detail: productId,
        bubbles: true
      });
    this.#elem.dispatchEvent(productCardEvent);
  }

  get elem() {
    return this.#elem;
  }
}