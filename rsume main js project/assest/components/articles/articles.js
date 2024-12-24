const template = document.createElement('div')
template.innerHTML = `
<link rel="stylesheet" href="articles.css">
<slot name="image-articles"></slot>
<slot name="title-articles"></slot>
<slot name="description-articles"></slot> 
<slot name="content-articles">
    <slot name="time-articles"></slot>
    <slot name="name-articles"></slot>
</slot>
<slot name="container-button-articles">
</slot>`
class Articles extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.append(template.cloneNode(true))
    }
}

export {Articles}
