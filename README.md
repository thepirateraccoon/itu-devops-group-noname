# current: sesion2

Course git page: https://github.com/itu-devops/2020-spring

Session page: https://github.com/itu-devops/2020-spring/blob/master/sessions/session_02/Session%202_pre.ipynb

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
