export const publicOrCustomToggle = () => {
  const buttons = document.querySelectorAll('.pill-picker-toggle')

  buttons.forEach(button => {
    button.addEventListener("click", e => {

      document.querySelector(`#space_public_or_custom_${e.target.dataset.inputId}`).checked = "true"
      console.log(document.querySelector(`#space_public_or_custom_${e.target.dataset.inputId}`))
    })
  })
}
