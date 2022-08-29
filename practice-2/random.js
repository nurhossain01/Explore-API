const loadUsers = () =>{
  fetch('https://randomuser.me/api/?results=50')
  .then(res => res.json())
  .then(data => displayUsers(data.results))
}

const displayUsers = users =>{
  const userContainer = document.getElementById('user-container');
  for(const user of users){
    console.log(user)

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-box');
    userDiv.innerHTML = `
    <h4>User name: ${user.name.first} ${user.name.last}</h4>
    <p>User mail: ${user.email}</p>
    <p>Location: ${user.location.city} ${user.location.country}</p>`;

    userContainer.appendChild(userDiv);
  }

}
loadUsers()