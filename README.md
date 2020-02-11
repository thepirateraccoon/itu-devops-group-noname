# current: sesion2

Course git page: https://github.com/itu-devops/2020-spring

Session page: https://github.com/itu-devops/2020-spring/blob/master/sessions/session_02/Session%202_pre.ipynb

## Node.js

### Functional Requirements
- Be able to log in
- See all tweets
- Put up tweets
- Be able to follow/unfollow another user
- See only tweets from followed users
- See tweets from a particular user (?)

### Thoughts on architecture
- Sqlite db works locally right now.
- EFS is a template framework that resembles what was used in the Python app to wire up the UI. The EFS stuff which is sort of javascript written directly in the DOM I find a little bit annoying and we will probably have to read som documentation. 
In the end I used bootstrap to quickly simulate a UI. (see views/partial/head.efs)
- Setting up end points is happening in `server.js` where there are already examples.
- See readme for how to run the server etc.

### Todo suggestions
1. The UI is the primary concern right now:
2. Figure out what functionality is needed from the Python app and make it visible in the UI.
3. Map UI to endpoints. (these are easy enough to setup -- see example in code)


## Todo
0) Send your github.com accounts on Slack to get invited to the new repo.
1) Choose a programming language and framework to investigate in depth, and try to translate the code.
2) Make the old tests pass.
3) Refactor language/framework decision: Log and provide good arguments for the choice of programming language and framework. Likely, a feature mapping/comparison or a mini-benchmark is a good choice.
4) Start on API for testing (50% done)
5) Describe Distributed Workflow
6) Install Docker, VirtualBox, and Vagrant on your computer.
  
  
## Questions

- Q: Which repository setup will we use?
  - Using one repo, https://github.com/mortenskoett/itu-devops-group-noname
- Q: Which branching model will we use?
  - Master (stable, used for releases)
  - Feature branch (checking out a new branch based new/changed features, pull request for merge/rebase back into master)
  - Arguments for decisions, simple branching model, small project and multiple developers. Pull request to ensure quality and knowledge sharing.

- Q: Which distributed development workflow will we use?
  - We will be working with a main backlog and communicating async w. Slack.
  - We will be using a centralized workflow. This makes sense because of current smaller size of the project.
  - We will try to modularize the code base as much as possible to minimize conflicts when merging/rebasing.
  - We will require code review for all Pull Request to the master branch.
  
- Q: How do we expect contributions to look like?
  - Commits to feature branches do not have to pass tests
  - The code on the master branch should always work (i.e. pull requests to the master branch)
  
- Q: Who is responsible for integrating/reviewing contributions?
  - Two persons have to review and accept pull requests to the master branch.

```
Info relating to how to contribute to the repo should be put in CONTRIBUTION.md.
Info relating to todo should be put into 'Github projects' used as backlog.
```
