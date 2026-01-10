/* FILE: lang-menu.js */
(() => {
  const langs = window.LANGS || [];
  const holder = document.querySelector(".lang[data-current]");
  if (!holder || !langs.length) return;

  const current = holder.getAttribute("data-current") || "de";
  const curObj = langs.find(l => l.code === current) || langs[0];

  // Set document direction for RTL languages (ar/ur/fa)
  if (curObj?.dir) document.documentElement.setAttribute("dir", curObj.dir);

  const items = langs.map(l => {
    const active = l.code === current;
    return `<a href="${l.start}" role="menuitem"${active ? ' aria-current="page"' : ""}>${l.name} <span>${l.label}</span></a>`;
  }).join("");

  holder.innerHTML = `
    <details>
      <summary>${(curObj.label || current).toUpperCase()} ▾</summary>
      <div class="lang-menu" role="menu" aria-label="Languages">
        ${items}
      </div>
    </details>
  `;
})();
