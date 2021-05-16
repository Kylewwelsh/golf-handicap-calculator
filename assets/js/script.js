const optionOne = document.querySelector('.whatOption')
const optionTwo = document.querySelector('.howOption')
const optionThree = document.querySelector('.calculateOption')
const what = document.querySelector('.what')
const how = document.querySelector('.how')
const calculate = document.querySelector('.calculate')
const reloadOne = document.querySelector('.reloadOne')
const reloadTwo = document.querySelector('.reloadTwo')
const reloadThree = document.querySelector('.reloadThree')

reloadOne.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

reloadTwo.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

reloadThree.addEventListener (
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
    what.classList.add('display', 'content')
  }
)

optionTwo.addEventListener (
  'click', () => {
    optionOne.classList.add('hidden')
    optionTwo.classList.add('hidden')
    optionThree.classList.add('hidden')
    how.classList.remove('how')
    how.classList.add('display', 'content')
  }
)

optionThree.addEventListener (
  'click', () => {
    optionOne.classList.add('hidden')
    optionTwo.classList.add('hidden')
    optionThree.classList.add('hidden')
    calculate.classList.remove('calculate')
    calculate.classList.add('display', 'content')
  }
)