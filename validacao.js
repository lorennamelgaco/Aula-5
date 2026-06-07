const formulario = document.querySelector("ContinuaçãoAula6");

formulario.addEventListener("submit", function(event) {

  const nome  = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = Number(document.getElementById("idade").value);

  const erroEl = document.getElementById("erro");
  erroEl.textContent = "";

  if (nome === "") {
    event.preventDefault();
    erroEl.textContent = " O campo Nome não pode estar vazio.";
    return;
  }

  if (!email.includes("@")) {
    event.preventDefault();
    erroEl.textContent = " O e-mail precisa conter @.";
    return;
  }

  if (isNaN(idade) || idade <= 0) {
    event.preventDefault();
    erroEl.textContent = " A idade deve ser maior que 0.";
    return;
  }

});