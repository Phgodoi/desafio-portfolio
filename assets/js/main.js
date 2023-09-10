function updateProfileInfo(profileData) {
  const userImg = document.getElementById("profile.img");
  userImg.src = profileData.avatar_url;
  userImg.alt = profileData.name;

  const userName = document.getElementById("profile.name");
  userName.innerText = profileData.name;

  const userLocation = document.getElementById("profile.location");
  userLocation.innerText = profileData.location;
}

function updatePortfolio(profileData) {
  const userPortfolio = document.querySelector("h3.title.github");
  userPortfolio.innerText = profileData[2].name;
  const desc = document.querySelector('.desc')
  desc.href = profileData[2].html_url;
}

(async () => {
  const profileData = await fetchProfileData();
  if (profileData) {
    const profile = profileData[0].owner.url;
    fetch(profile)
      .then((response) => response.json())
      .then((ownerData) => {
        updateProfileInfo(ownerData);
      });
    updatePortfolio(profileData);
  }
})();
