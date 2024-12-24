const template = document.createElement('div')
template.innerHTML = `
<link rel="stylesheet" href="courses.css">
<slot name="container-image-course">
    <slot name="image-course"></slot>
</slot>
<slot name="title-course"></slot> 
<hr> 
<slot name="description-course"> 
</slot>`
class Courses extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.append(template.cloneNode(true))
    }
}

export {Courses}