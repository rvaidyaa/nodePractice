// getUser(1, user => {
//   getRepo(user.gitname, repos => {
//     getCommits(repo, commits => {});
//   });
// });

// getUser(1, getRepos);

// function displayCommits(commits) {
//   console.log(commits);
// }

// function getCommits(repos) {
//   getCommits(repo, displayCommits);
// }

// function getRepos(user) {
//   getRepo(user.gitname, getCommits);
// }

// const p = new Promise((resolve, reject) => {
//   //kick off async work
//   //...
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);

//   // reject(new Error('message));
// });
// p.then(result => console.log("result", result)).catch(err => {
//   console.log("error", err.message);
// });

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log("reading user from db...");
//     callback(["1", "2", "3"]);
//   }, 2000);
// }
// console.log("Before");
// getUser(1, user => {
//   getRepositories(user.gitHubUsername, repos => {
//     getCommits(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });
// console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting repos from db...");
      resolve(["1", "2", "3"]);
    }, 2000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}

// promises
console.log("Before");
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log("error", err.message));
// console.log(p);
console.log("After");

//async await
// console.log('before');
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("error", err.message);
  }
}
console.log('before');
displayCommits()
console.log("After");