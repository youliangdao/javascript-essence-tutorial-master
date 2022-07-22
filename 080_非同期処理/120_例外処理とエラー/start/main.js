// fetch("users.json").then(function (response) {
//   return response.json();
// }).then(function (json) {
//   if (!json.length) {
//     throw new Error("no data found")
//   } else {
//     for (const user of json) {
//       console.log(user.name);
//     }
//   }
// }).catch(function (e) {
//   console.error(e);
// })

async function fetchUsers() {
  const response = await fetch("users.json");
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new NoDataError("no data found");
    } else {
      return json;
    }
  }
}

// fetchUsers().catch(function (e) {
//   console.error(e)
// })

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(user.name)
    }
  } catch(e) {
    console.error(e);
  } finally {
    console.log("bye");
  }
  console.log("end")
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}

init();
