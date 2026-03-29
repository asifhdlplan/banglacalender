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
  const banglaDate = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);

  document.getElementById("banglaDate").innerText = banglaDate;
}

// ⏱️ Update every second
setInterval(updateTime, 1000);
updateTime();
