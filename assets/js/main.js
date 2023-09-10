(async () => {
  try {
    const profileData = await fetchProfileData();
    if (profileData) {
      const profile = profileData[0].owner.url;
      console.log(profile)
    }
  } catch (error) {
    alert(
      "Ocorreu um erro ao buscar as informações do repositório, Verifique!"
    );
  }
})();
