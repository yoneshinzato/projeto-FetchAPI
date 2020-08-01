const cep = document.querySelector("#cep"); //1
const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

//2
cep.addEventListener("blur", (event) => {
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((oi) => {
      oi.json().then((alo) => {
        showData(alo);
      });
    })
    .catch((event) => console.log("Deu erro " + event.message));
});
