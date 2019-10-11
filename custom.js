// disable/re-enable image filter by Alt+Click
window.addEventListener('click', (event) => {
    if (!event.altKey) {
        return
    }
    let target = event.target
    if (!(target instanceof HTMLImageElement)) {
        return
    }
    if (!target.parentNode.classList.contains('output_subarea')) {
        return
    }
    target.style.filter = target.style.filter ? '' : 'none'
    event.preventDefault()
    event.stopPropagation()
})
