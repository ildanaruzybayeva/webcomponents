class UserCard extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `hello blin`
    }
}

window.customElements.define('user-card', UserCard)