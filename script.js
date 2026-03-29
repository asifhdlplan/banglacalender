function updateTime() {
  const now = new Date();

  // 🇧🇩 Bangladesh Time
  const options = {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  const time = new Intl.DateTimeFormat("en-US", options).format(now);
  document.getElementById("time").innerText = time;

  // 📅 English Date
  const engDate = now.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Dhaka"
  });
  document.getElementById("engDate").innerText = engDate;

  // 🕌 Hijri Date
  const hijri = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
  document.getElementById("hijriDate").innerText = hijri;

  // 🇧🇩 Bangla Date
  const bangla = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
  document.getElementById("banglaDate").innerText = bangla;
}

setInterval(updateTime, 1000);
updateTime();
