/* FILE: lang-menu.js */
window.renderLangMenu = function () {
  const holder = document.querySelector(".lang[data-current]");
  const langs = window.LANGS || [];
  if (!holder || !langs.length) return;

  const current = holder.getAttribute("data-current") || "de";
  const curObj = langs.find(l => l.code === current) || langs[0];

  const items = langs.map(l => {
    const active = (l.code === current);
    return `<a href="${l.start}" role="menuitem"${active ? ' aria-current="page"' : ""}>${l.name} <span>${l.label}</span></a>`;
  }).join("");

  holder.innerHTML = `
    <details>
      <summary>${(curObj.label || current).toUpperCase()} ▾</summary>
      <div class="lang-menu" role="menu" aria-label="Sprachen">
        ${items}
      </div>
    </details>
  `;
};
