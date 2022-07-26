const button = document.querySelector(".button")
const container = document.querySelector(".links-container")
const list = document.querySelector(".list")

button.addEventListener("click", () => {
    const height = container.getBoundingClientRect().height
    const linksHeight = list.getBoundingClientRect().height

    if (height === 0) {
        container.style.height = `${linksHeight}px`
    } else {
        container.style.height = 0
    }
})

export { button }