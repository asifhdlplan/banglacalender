function updateTime() {
  const now = new Date();

  // 🇧🇩 Bangladesh Time
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);

  document.getElementById("time").innerText = time;

  // 📅 English Date
  const engDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);

  document.getElementById("engDate").innerText = engDate;

  // 🕌 Hijri Date
  const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);

  document.getElementById("hijriDate").innerText = hijriDate;

  // 🇧🇩 Bangla Date
  const banglaDate = getBanglaDate(now);
  document.getElementById("banglaDate").innerText = banglaDate;
}

// ✅ Bangla Calendar Function (REAL)
function getBanglaDate(date) {
  const months = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ",
    "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ",
    "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
  ];

  const monthDays = [31,31,31,31,31,30,30,30,30,30,29,30];

  let year = date.getFullYear() - 593;
  let start = new Date(date.getFullYear(), 3, 14); // April 14

  let diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));

  if (diff < 0) {
    year -= 1;
    start = new Date(date.getFullYear() - 1, 3, 14);
    diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));
  }

  let month = 0;

  while (diff >= monthDays[month]) {
    diff -= monthDays[month];
    month++;
  }

  let day = diff + 1;

  return `${day} ${months[month]} ${year}`;
}

// ⏱️ Live update
setInterval(updateTime, 1000);
updateTime();
