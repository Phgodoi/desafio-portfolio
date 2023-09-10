const btnOpen = document.querySelectorAll(".container .btn");
btnOpen.forEach((btn) => {
  btn.addEventListener("click", (iten) => {
    const languages = btn.parentElement;
    const isOpen = languages.classList.contains("open");
    if (isOpen) {
      languages.classList.remove("open");
    } else {
      languages.classList.add("open");
    }
  });
});

function adicionarIconesNaLista(seletor, classeIcone) {
  const itens = document.querySelectorAll(seletor);

  itens.forEach((iten) => {
    const icon = document.createElement("i");
    icon.className = classeIcone;
    iten.insertBefore(icon, iten.firstChild);
  });
}
adicionarIconesNaLista(".itens li", "fa-solid fa-check");
adicionarIconesNaLista(".experience p.period", "fa-regular fa-calendar");
adicionarIconesNaLista(".skills .soft_skills li","fa-regular fa-chess-bishop fa-sm");
