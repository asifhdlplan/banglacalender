function updateTime() {
  const now = new Date();

  // 🇧🇩 Time
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);

  document.getElementById("time").innerText = time;

  // English Date
  const engDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);

  document.getElementById("engDate").innerText = engDate;

  // Hijri
  const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);

  document.getElementById("hijriDate").innerText = hijriDate;

  // Bangla
  const banglaDate = getBanglaDate(now);
  document.getElementById("banglaDate").innerText = banglaDate;
}

// 🇧🇩 Bangla Date Function
function getBanglaDate(date) {
  const months = [
    "বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ",
    "ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ণ",
    "পৌষ","মাঘ","ফাল্গুন","চৈত্র"
  ];

  const days = [31,31,31,31,31,30,30,30,30,30,29,30];

  let year = date.getFullYear() - 593;
  let start = new Date(date.getFullYear(), 3, 14);

  let diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));

  if (diff < 0) {
    year -= 1;
    start = new Date(date.getFullYear() - 1, 3, 14);
    diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));
  }

  let month = 0;

  while (diff >= days[month]) {
    diff -= days[month];
    month++;
  }

  let day = diff + 1;

  return `${day} ${months[month]} ${year}`;
}

// ⏱️ Update
setInterval(updateTime, 1000);
updateTime();


// ==========================
// 📅 Expand Calendar Feature
// ==========================

function toggleCalendar() {
  const section = document.getElementById("calendarSection");
  section.classList.toggle("show");

  if (section.classList.contains("show")) {
    generateCalendars();
  }
}

// Generate 3 months
function generateCalendars() {
  const container = document.getElementById("calendarContainer");
  container.innerHTML = "";

  const now = new Date();

  for (let i = -1; i <= 1; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
    container.appendChild(createCalendar(date));
  }
}

// Create calendar
function createCalendar(date) {
  const calendar = document.createElement("div");
  calendar.classList.add("calendar");

  const title = document.createElement("h3");
  title.innerText = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  const grid = document.createElement("div");
  grid.classList.add("grid");

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div></div>`;
  }

  const today = new Date();

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday =
      d === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    grid.innerHTML += `
      <div class="day ${isToday ? "today" : ""}">${d}</div>
    `;
  }

  calendar.appendChild(title);
  calendar.appendChild(grid);

  return calendar;
}
