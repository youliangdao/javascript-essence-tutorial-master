// fetch('users.json').then(function (response) {
//   return response.json();
// }).then(function (json) {
//   console.log(json)
//   for (const user of json) {
//     console.log(`I am ${user.name}, ${user.age} years old.`)
//   }
// })

async function fetchUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  for (const user of json) {
    console.log(`名前：${user.name} 年齢：${user.age}`);
  }
}

fetchUsers();
