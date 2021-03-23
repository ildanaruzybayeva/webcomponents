const template = document.createElement('template')
template.innerHTML = `
<style>
    button {
        color: coral
    }
</style>
<div class="user-card">
    <img />
    <div>
        <button></button>
    </div>
</div>

`

class UserCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('button').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
        this.shadowRoot.addEventListener('click', ()=> alert(`clicked on ${this.getAttribute('name')}`))
    }
}

window.customElements.define('user-card', UserCard)