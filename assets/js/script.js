const optionOne = document.querySelector('.whatOption')
const optionTwo = document.querySelector('.howOption')
const optionThree = document.querySelector('.calculateOption')
const what = document.querySelector('.what')
const reload = document.querySelector('button')

reload.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

optionOne.addEventListener (
  'click', () => {
    optionOne.classList.add('hidden')
    optionTwo.classList.add('hidden')
    optionThree.classList.add('hidden')
    what.classList.remove('what')
    what.classList.add('display')
  }
)