/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  LitElement, html, customElement, property, css
} from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-element')
export class MyElement extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        user-select: none;
      }

      * {
        padding: 8px;
      }

      div {
        background-color: green;
      }

      button {
        border: none;
        outline: none;
        background-color: red;
      }
    `;
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <div>${this.date}</div>
      <button @click="${() => this.fireMyEvent()}">Fire My Event</button>
    `;
  }

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  date = Date.now();

  constructor() {
    super()
    this.addEventListener('click', () => this.date = Date.now());
  }

  fireMyEvent() {
    const  event = new CustomEvent('my-event', {
      detail: {
        message: 'Boom! This is my event :)'
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}