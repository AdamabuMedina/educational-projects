const btn = document.querySelector(".btn")

const getDayInfo = (user) => {

  let date = new Date(user)
  let weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",]
  let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря",]

  let month = date.getMonth() // номер месяца
  let weekDay = date.getDay() // номер дня недели
  let day = date.getDate() // число

  let weekNumber = Math.ceil((day - 1 - weekDay) / 7) + 1 // номер недели месяца

  return `${weekDays[weekDay]}, ${weekNumber} неделя ${months[month]}, ${date.getFullYear()} года.`
}

btn.addEventListener("click", () => {
  userDate = prompt("Введите дату в формате (день.месяц.год): ")

  alert(getDayInfo(userDate))
})
