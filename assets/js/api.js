async function fetchProfileData() {
  const url = "https://api.github.com/users/Phgodoi/repos";
  const fetching = await fetch(url);
  return await fetching.json();
}
