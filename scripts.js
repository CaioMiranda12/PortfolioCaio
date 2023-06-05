const contactClick = document.querySelector('.link-contact')
const contacts = document.querySelector('.contatos')

function cliqueiNoContactMe() {
    contacts.classList.toggle('ativo')
}

contactClick.addEventListener('click', cliqueiNoContactMe)