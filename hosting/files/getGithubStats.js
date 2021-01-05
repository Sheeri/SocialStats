function requestUserRepos(org){
    const xhr = new XMLHttpRequest();
    const urlForRepos = `https://api.github.com/orgs/${org}/repos`;
   // const urlForRepos = `https://api.github.com/users/${org}/repos`;
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', urlForRepos, true);
    xhr.onload = function() {
        // Parse API data into JSON
        const data = JSON.parse(this.response);

        for(let record of data){
            repo=record.name;
            const urlForClones = `https://api.github.com/repos/${org}/${repo}/traffic/clones`;
            console.log(urlForClones);
            console.log(record.stargazers_count);
            break;
         }
    }
/*
    xhr.open('GET', urlForRepos, true);
    xhr.onload = function() {
        // Parse API data into JSON
        const data = JSON.parse(this.response);

        for(let record of data){
            console.log(record.name);
            console.log(record.stargazers_count);
         }
    }
*/
    // Send the request to the server
    xhr.send();
}

// Call function passing in 'facebook' as GitHub username
requestUserRepos('mongodb-developer');
// requestUserRepos('sheeri');

/* 
// Call function passing in 'facebook' as GitHub username
requestUserRepos('mongodb-developer');


archive_url: "https://api.github.com/repos/mongodb-developer/get-started-go/{archive_format}{/ref}"
​
archived: false
​
assignees_url: "https://api.github.com/repos/mongodb-developer/get-started-go/assignees{/user}"
​
blobs_url: "https://api.github.com/repos/mongodb-developer/get-started-go/git/blobs{/sha}"
​
branches_url: "https://api.github.com/repos/mongodb-developer/get-started-go/branches{/branch}"
​
clone_url: "https://github.com/mongodb-developer/get-started-go.git"
​
collaborators_url: "https://api.github.com/repos/mongodb-developer/get-started-go/collaborators{/collaborator}"
​
comments_url: "https://api.github.com/repos/mongodb-developer/get-started-go/comments{/number}"
​
commits_url: "https://api.github.com/repos/mongodb-developer/get-started-go/commits{/sha}"
​
compare_url: "https://api.github.com/repos/mongodb-developer/get-started-go/compare/{base}...{head}"
​
contents_url: "https://api.github.com/repos/mongodb-developer/get-started-go/contents/{+path}"
​
contributors_url: "https://api.github.com/repos/mongodb-developer/get-started-go/contributors"
​
created_at: "2019-10-21T22:34:21Z"
​
default_branch: "master"
​
deployments_url: "https://api.github.com/repos/mongodb-developer/get-started-go/deployments"
​
description: "Repository to help getting started with MongoDB Go driver connecting to MongoDB Atlas"
​
disabled: false
​
downloads_url: "https://api.github.com/repos/mongodb-developer/get-started-go/downloads"
​
events_url: "https://api.github.com/repos/mongodb-developer/get-started-go/events"
​
fork: false
​
forks: 1
​
forks_count: 1
​
forks_url: "https://api.github.com/repos/mongodb-developer/get-started-go/forks"
​
full_name: "mongodb-developer/get-started-go"
​
git_commits_url: "https://api.github.com/repos/mongodb-developer/get-started-go/git/commits{/sha}"
​
git_refs_url: "https://api.github.com/repos/mongodb-developer/get-started-go/git/refs{/sha}"
​
git_tags_url: "https://api.github.com/repos/mongodb-developer/get-started-go/git/tags{/sha}"
​
git_url: "git://github.com/mongodb-developer/get-started-go.git"
​
has_downloads: true
​
has_issues: true
​
has_pages: false
​
has_projects: true
​
has_wiki: true
​
homepage: null
​
hooks_url: "https://api.github.com/repos/mongodb-developer/get-started-go/hooks"
​
html_url: "https://github.com/mongodb-developer/get-started-go"
​
id: 216677322
​
issue_comment_url: "https://api.github.com/repos/mongodb-developer/get-started-go/issues/comments{/number}"
​
issue_events_url: "https://api.github.com/repos/mongodb-developer/get-started-go/issues/events{/number}"
​
issues_url: "https://api.github.com/repos/mongodb-developer/get-started-go/issues{/number}"
​
keys_url: "https://api.github.com/repos/mongodb-developer/get-started-go/keys{/key_id}"
​
labels_url: "https://api.github.com/repos/mongodb-developer/get-started-go/labels{/name}"
​
language: "Go"
​
languages_url: "https://api.github.com/repos/mongodb-developer/get-started-go/languages"
​
license: Object { key: "apache-2.0", name: "Apache License 2.0", spdx_id: "Apache-2.0", … }
​
merges_url: "https://api.github.com/repos/mongodb-developer/get-started-go/merges"
​
milestones_url: "https://api.github.com/repos/mongodb-developer/get-started-go/milestones{/number}"
​
mirror_url: null
​
name: "get-started-go"
​
node_id: "MDEwOlJlcG9zaXRvcnkyMTY2NzczMjI="
​
notifications_url: "https://api.github.com/repos/mongodb-developer/get-started-go/notifications{?since,all,participating}"
​
open_issues: 0
​
open_issues_count: 0
​
owner: Object { login: "mongodb-developer", id: 45798453, node_id: "MDEyOk9yZ2FuaXphdGlvbjQ1Nzk4NDUz", … }
​
permissions: Object { admin: false, push: false, pull: true }
​
private: false
​
pulls_url: "https://api.github.com/repos/mongodb-developer/get-started-go/pulls{/number}"
​
pushed_at: "2020-12-16T23:24:50Z"
​
releases_url: "https://api.github.com/repos/mongodb-developer/get-started-go/releases{/id}"
​
size: 34
​
ssh_url: "git@github.com:mongodb-developer/get-started-go.git"
​
stargazers_count: 0
​
stargazers_url: "https://api.github.com/repos/mongodb-developer/get-started-go/stargazers"
​
statuses_url: "https://api.github.com/repos/mongodb-developer/get-started-go/statuses/{sha}"
​
subscribers_url: "https://api.github.com/repos/mongodb-developer/get-started-go/subscribers"
​
subscription_url: "https://api.github.com/repos/mongodb-developer/get-started-go/subscription"
​
svn_url: "https://github.com/mongodb-developer/get-started-go"
​
tags_url: "https://api.github.com/repos/mongodb-developer/get-started-go/tags"
​
teams_url: "https://api.github.com/repos/mongodb-developer/get-started-go/teams"
​
trees_url: "https://api.github.com/repos/mongodb-developer/get-started-go/git/trees{/sha}"
​
updated_at: "2020-12-08T05:36:30Z"
​
url: "https://api.github.com/repos/mongodb-developer/get-started-go"
​
watchers: 0
​
watchers_count: 0


*/





