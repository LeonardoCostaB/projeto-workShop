    const modal = document.querySelector('.modal-wrapper')
    const body = document.querySelector('body')
    const buttonPush = document.querySelectorAll('.push-idea')

    buttonPush.forEach(button => {
        button.addEventListener('click', () => {
            body.classList.toggle('hiddenScroll')
            modal.classList.toggle('active')
            modal.classList.toggle('scroll')
        })
    })

