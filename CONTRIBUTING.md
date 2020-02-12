# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
slack, or any other method with the work group of this repository before making a change.
Usually the task will already be on the Github projects `Backlog`, however if not, create an issue and 
assign yourself to it.

We have some simple interaction policies, please follow these in all your interactions with the project.

## Branching Policy
We currently follow a branching policy where each feature or separete part of the code base is developed 
in its own branch before finally pull requested into the `master` branch. 

The master branch should be as stable as possible but it also works as an intermediary branch so that 
developers can get the newest changes as fast as possible. The master branch requires that another developer
approves the pull request before it can be merged.

The `release` branch is used only for the most stable versions of the code base and should only rarely
see pull requests. Two approved reviews are required to merge.

```
release		----->				(only used at milestones or when a stable master needs to be captured)
				/
master	 	----------->		(newest stable changes)
				/     /
features	-------------->		(your work branch)
```

## Pull Request Process

1. Pull request should be made for any change to public branches; `master`, `release` and any
feature based branch on which more people are working.

2. Update the README.md and with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.

3. Update Gihub Projects with the status of the task in question. If you encounter bugs or code that
	it is not immediately possible to fix, then add a task on the Backlog.

4. You may merge a pull request to master once you have the sign-off of another developer, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.
