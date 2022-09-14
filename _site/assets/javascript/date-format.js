let dates = document.querySelectorAll(".date")

dates.forEach(date => {
  date.textContent = format(date.textContent)
})

// DD-MM-YY
function format(date) {
  const monthNames = ["جانفي", "فيفري", "مارس", "أفريل", "ماس", "جوان",
  "جويلية", "أوت", "سبتمبر", "أوكتوبر", "نوفمبر", "ديسمبر"
];
  let thisYear = new Date().getFullYear()
  let dateObj = new Date(Date.parse(date))
  let fMonth = monthNames[dateObj.getMonth()]
  let fDay = dateObj.getDate()
  let fYear = new Date().getFullYear() !== dateObj.getFullYear() ? "، " + dateObj.getFullYear() : ""
  return `${fDay} ${fMonth}${fYear} `
}