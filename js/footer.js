const footerTemplate = document.createElement('template');
const footerTemplateStyle = `
<style>
    footer {
        height: 30px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.5);
    }
    .socialLinks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .socialLinks > a {
        height: 20px;
        margin-right: 0.5em;
    }
    .socialLinks > a img {
        width: 16px;
    }
    @media (max-width: 768px) {
        footer {
            font-size: 0.5em;
        }
    }
    </style>
`
footerTemplateContent = `
    <footer>
        <div class="socialLinks">
            <a><img src="./images/facebook.svg" alt="facebook" /></a>
            <a><img src="./images/linkedin.svg" alt="linkedIn" /></a>
        </div>
        <div>Contact email: agathayin.sh@gmail.com</div>
    </footer>
`
footerTemplate.innerHTML = footerTemplateStyle + footerTemplateContent;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);