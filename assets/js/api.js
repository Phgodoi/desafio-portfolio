async function fetchProfileData() {
  const url = "https://api.github.com/users/Phgodoi/repos";
  const fetching = await fetch(url);
  try{
    if(fetching){
      return await fetching.json();
    }
  } catch{
    alert("Ocorreu um erro ao buscar as informações do repositório, Verifique!");
  }
}

