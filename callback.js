// ASYNCHRONOUS
console.log("Before");
// getUser(1, (user) => {
//   //   console.log("User", user);

//   //   get the reposeteries
//   getReposeteries(user.gitHub, (repos) => {
//     getCommits(repos, (commits) => {
//       //   callback HELL
//     });
//     // console.log("Repos", repos);
//   });
// });

getUser(1, getReposeteries);
console.log("after");
// replacing with annonomous function
function displaycommits(commits) {
  console.log(commits);
}
function showRepos(repos) {
  getCommits(repos, displaycommits);
}
function getReposeteries(user) {
  getReposeteries(user.gitHub, (repos) => {});
}
// // SYNCHRONOUS
// console.log("before");
// const user = getUser(1);
// const repos = getReposeteries(user.gitHub);
// const commits = getCommits(repos[0]);
// console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("user is loading ...");
    callback({ id: id, gitHub: "om" });
  }, 3000);
}

function getReposeteries(userName, callback) {
  setTimeout(() => {
    console.log("calling gitHub repo...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
