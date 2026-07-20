(function () {
  function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const greeting = h >= 6 && h < 12 ? 'Good morning'
      : h >= 12 && h < 18 ? 'Good afternoon'
      : h >= 18 ? 'Good evening'
      : 'Good night';

    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    const date = now.getFullYear() + '-'
      + String(now.getMonth() + 1).padStart(2, '0') + '-'
      + String(now.getDate()).padStart(2, '0');
    const time = now.toLocaleTimeString('en-GB', { hour12: false });

    const g = document.getElementById('clock-greeting');
    const t = document.getElementById('clock-time');
    if (g) g.textContent = greeting;
    if (t) t.textContent = date + '  W' + week + '  ' + time;
  }
  updateClock();
  setInterval(updateClock, 1000);
}());
