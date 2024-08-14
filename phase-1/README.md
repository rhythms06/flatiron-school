# Phase 1

Welcome to the first phase of your coding journey! In this series, you'll learn about **the fundamentals of HTML and JavaScript**, **DOM manipulation**, **DOM events**, **GET requests** and **POST requests**.

## Topics
* **Fundamentals**: linking JavaScript to HTML, deferring scripts, variables, types, functions, arrays, objects, conditional statements, and local and global scope.
* **DOM Manipulation**: the `document` interface, selecting existing elements, creating new elements, appending elements to the DOM, modifying elements, and removing elements from the DOM.
* **DOM Events**: event listeners and handlers, preventing default handlers, manipulating the DOM when events occur
* **`GET`**: retrieving data with `fetch(URL)`, parsing JSON with `response.json()`, and handling received objects and arrays.
* **`PATCH`**: creating a local API with `json-server` and sending data to it with `POST` requests.

## Common Hiccups
* JavaScript uses `camelCase` to name variables. Hyphens (`-`) are not allowed, but underscores (`_`) are.
* `function [name]([parameters]) { [code] }` is equivalent to `const [name] = ([parameters]) => { [code] }`.
* To iterate over an array, use `[array].forEach([callback function])`.
* To map an array's values to a new array, use `[array].map([callback function])`.
* To access an object's values, use `object.propertyName` or `object["propertyName"]`. This also works for accessing a form's input elements with `event.target`.
* A function's parameters and body constitute one local scope.
* Variables initialized in a local scope are not accessible in other local scopes, nor in the global scope.
* Variables initialized in the global scope are accessible in all local scopes.
* `querySelector()` takes as input a CSS selector, e.g. `"#[id]"`, `".[class]"`, and `"[tag]"`. 
* Pass `event` into an event handler when you want to overwrite default handling.
* Always follow a `fetch("[URL]")` with one or more `.then([callback function])` statements. The first callback function for a `GET` request should convert `response` to a usable data type or structure.
* If you're ever unsure what data type or structure a `fetch([URL])` will return, try visiting `[URL]` in your browser.

## A Guide to Getting Git

### Creating a repository
A **repository** is a way of managing projects, their histories, and their copies. To create a repository:
1. Visit GitHub.
2. Click **+** > **New repository**. On the following page:
    1. Choose the name, description, and visibility of your repository.
    2. Decide if you’d like to initialize the repository with a README.
    3. Click **Create repository**.
3. To create a copy of your newly created repository on your computer, [clone it](#cloning-a-repository).

### Forking a repository
A **fork** is a copy of an existing repository that lives on your GitHub profile. You might fork a project to propose changes to it, or to use it as a template for your own ideas. To fork a repository:
1. Visit the repository on GitHub.
2. Click **Fork**. On the following page:
    1. Choose your fork’s owner, name, and description.
    2. Decide if you want only the default branch in your fork, or all branches.
    3. Click **Create fork**.
3. [Clone your fork](#cloning-a-repository).

### Cloning a repository
To **clone** a repository is to download a copy of it to your computer:
1. Visit the repository on GitHub.
2. Click **< > Code**.
3. Copy the URL for the repository.
4. [Terminal] `cd` into the directory you’d like to house your clone and run `git clone [URL]`.
5. [Visual Studio Code] Hit _Clone Git Repository_….
6. [GitHub Desktop] Hit _File_ > _Clone Repository_….

### Creating a branch
A **branch** is one version of a project. A repository starts out with one **default** branch, often named `main`, meant to represent the most up-to-date, official version of the project. A repository may have any number of non-default branches, all meant to represent alternative, in-progress, or experimental versions of the project. To create a branch based on another branch, run `git branch [name of new branch] [name of existing branch]`. For example, to create a branch `beta` off of `main`, you’d run `git branch beta main`.

### Switching between branches
To switch from your current branch to another branch in your repository, run `git switch [name of other branch]`. If you have any uncommitted changes, you may be asked to [discard](#discarding-or-stashing-changes), [stash](#discarding-or-stashing-changes), or [commit](#staging-committing-and-pushing-to-a-repository) them before moving forward.

### Synchronizing a fork
When you run `git fetch`, `git pull`, and `git push` in a fork, you’re telling `git` to interact with your fork, and not the original repo. That means, for example, that if you run `git pull`, you’ll receive any changes on your fork that aren’t in your clone, but no changes that may be on the original repo and not on your fork.

To synchronize a fork with its original repository _on the command line_, set the original repository as your fork’s upstream repository, fetch changes from that repository, and merge those fetched changes into your fork:
1. Run `git remote -v` to see your currently configured `fetch` and `push` URLs. If you see the original repository’s URL next to the word `upstream`, then move onto Step 4. Otherwise, you should only see your fork next to the word `origin`.
2. Run `git remote add upstream [ORIGINAL REPO URL]` to add the original repo as additional `fetch` and `push` URLs.
3. Run `git remote -v` again. You should now see the original repository’s URL next to the word `upstream`.
4. Run `git fetch upstream` to fetch any changes in the upstream repository.
5. Switch to your `main` branch. If you have any uncommitted changes, `git` may ask you to [discard](#discarding-or-stashing-changes), [stash](#discarding-or-stashing-changes), or [commit](#staging-committing-and-pushing-to-a-repository) them before doing so.
6. Run `git merge upstream/main` to merge changes made in the original repository’s `main` branch into your fork’s `main` branch. [If there are merge conflicts, you’ll have to resolve them.](#resolving-merge-conflicts)
7. Finally, if you’d like to update your fork’s `main` branch on GitHub, run `git commit -m “Merge upstream/main”` and `git push origin main`.

To synchronize a fork with its original repository on GitHub:
1. Visit your fork on GitHub.
2. Click **Sync fork** > **Update branch** to merge changes made in the original repository’s `main` branch into your fork’s `main` branch. [If there are merge conflicts, you’ll have to resolve them.](#resolving-merge-conflicts)
3. To apply synchronized changes to a clone of your fork, [fetch](#fetching-merging-and-pulling-from-a-repository) and [merge](#fetching-merging-and-pulling-from-a-repository) them.

### Discarding or stashing changes
Sometimes, perhaps before switching to or merging changes into a branch, we’ll want to either permanently or temporarily hide away any local, uncommitted changes in our current branch.

To _permanently_ **restore** a file or directory to its state before those changes occurred, we can run `git restore [path of file or directory]`.

To _temporarily_ **stash** all uncommitted changes in your current branch, run `git stash`. You can re-apply the most recently stashed changes by running `git stash pop`. If popped changes conflict with files in your current branch, you’ll have to [resolve those conflicts](#resolving-merge-conflicts).

### Staging, committing, and pushing to a repository
When you make changes to a clone of a repository, they only live on your computer, initially, at least. To have the changes you’ve made live on GitHub, too:
1. Run `git add [path to file or directory]` to **stage**, or prepare, some or all of your changes for publishing.
2. Run `git commit -m “Make some changes around here”` to publish your staged changes in a new **commit**, identified by the message you add in quotes.
3. Run `git push` to **push**, or upload, your committed changes to GitHub. If you’re pushing to a locally-created branch for the first time, add `-u origin [name of branch]` to the end of the command to set up an upstream connection between between the branch on your computer and the branch on GitHub.

### Fetching, merging, and pulling from a repository
When someone [pushes](#staging-committing-and-pushing-to-a-repository) to a repository on GitHub, anyone who owns a [clone](#cloning-a-repository) of that repository does not immediately receive those pushed changes.

To **fetch**, or inspect, changes made to your repository on GitHub, run `git fetch`. To **merge**, or apply, those changes into your current branch, run `git merge origin [name of branch]`. If those changes conflict with files in your current branch, you’ll need to [resolve those conflicts](#resolving-merge-conflicts).

Note: If you’re working on a fork, this command will only tell you about changes made to your fork on GitHub. To fetch changes made to a fork’s original repository, you’ll need to [synchronize your fork](#synchronizing-a-fork). 

### Resolving merge conflicts
Sometimes, perhaps before you re-apply stashed changes or merge fetched changes, you’ll need to resolve **merge conflicts**. A merge conflict occurs whenever some change you want to incorporate into your branch can’t be automatically applied by `git`. We can run `git status` and see any files pending resolution under the header `Unmerged paths:`.

To resolve a file marked as `modified`:
1. Open the file in a text editor like Visual Studio Code.
2. Scroll through the file to find a conflict. It should look something like:
```
...non-conflicting code...
<<<<<<< HEAD
...conflicting code in your current branch...
=======
...conflicting code in the other branch or stash...
>>>>>>> BRANCH-NAME
...non-conflicting code
```

4. Decide what you want to keep, and replace the conflict (everything beginning from `<<<<<<< HEAD`, up to and including `>>>>>>> BRANCH-NAME`) with what whatever that is. Maybe it’s all of the code in your current branch, all of the code in the other branch or stash, some combination of the two, or something completely new. It’s up to you!
5. [Stage](#staging-committing-and-pushing-to-a-repository) the file to mark the conflict as resolved.

To resolve a file marked as `deleted`:
1. Open the file in a text editor like Visual Studio Code, and decide if you want to keep it.
2. To keep the file and mark the conflict as resolved, [stage it](#staging-committing-and-pushing-to-a-repository).
3. To remove the file and mark the conflict as resolved, run `git rm [path to file]`.

## Readings
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

The readings on Canvas exist to supplement your understanding of the phase's materials. You should in no way feel obliged to complete every reading. Instead, refer to them when you feel lost on a concept that comes up during lecture, or on a lab or quiz.

## Quizzes and Labs
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

Required quizzes and labs are worth a very small percentage of your grade, so view them as checkpoints of understanding, rather than as forms of assessment. You can take quizzes and labs multiple times, so consider making your first attempt as soon as we complete the relevant lecture(s). You might not understand everything on the first go, but you'll get a sense of where your strengths lie, and where you might need to build some understanding. Plan on completing all _required_ quizzes and labs by the end of Week 2 of a phase, and work on _optional_ labs and quizzes as you see fit for additional checkpoints of understanding.

## The Code Challenge
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

You'll be assigned a _code challenge_ during Week 2 of each phase, in which you'll complete a small project that touches on most of the major concepts in a phase. Code challenges are designed to take only a couple of hours to complete, and represent a significant portion of your grade.

## The Blog
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

You'll be asked to write a blog post by the end of each phase. This post should concern something technical (e.g. highlights from a phase, a programming concept, a library, etc.) and be published online. Use it as an opportunity to reflect on what you're learning, and practice putting your experience into words.

## The Project
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

You'll be tasked with creating and presenting a project (by yourself or with a group) by the end of each phase. The project is an opportunity for you to apply a phase's concepts to a problem that interests you. Plan on pitching a project outline by the end of Week 2, and presenting your project by the end of Week 3 of a phase.

### Presentations

Presentations are stellar opportunities to gain recognition for your efforts, practice your communication skills, and receive friendly feedback on your work. In presenting a project, consider completing some or all of the following steps:

1. Introduce yourself, your partner(s), and your affiliation(s).
2. Recount the story and context of your project.
3. Demonstrate a typical user(s) experience.
4. Highlight difficulties, successes, and next steps.
5. Take feedback and questions.

_Tip:_ Steps 2, 3, 4, and 5 are all opportunities to tailor your presentation to your audience.

## The Assessment
*This section serves as a guide to prospective and current students at Flatiron School. Otherwise, it might not make much sense.*

Assessments take place towards the end of Week 2 and the start of Week 3 of a phase. They are one-on-one, 15-minute mock technical interviews that challenge you to understand concepts and complete problems covered in lecture. You'll be graded both conceptually (e.g. your ability to communicate concepts through analogies and use cases) and technically (e.g. your ability to write code and recall terminology) on each topic. Assessments can be repeated once, if needed to pass a phase.

_Tip:_ For the sake of time, keep your answers straightforward and to the point; moreover, if you don't know the answer to a question, just say you don't know. If there's time left over after visiting all of an assessment's topics, we'll revisit areas you didn't do so well in on your first try.

### Topics
* **Variables**: declaration, initialization, assignment, types, etc.
* **Structures**: arrays, objects, usage, access, modification, etc.
* **Functions**: definition, usage, arrow functions, callback functions, etc.
* **Scope**: global and local scope.
* **Fetch**: APIs, CRUD, requests, promises, `.then()`, `.catch()`, etc.

_Note:_ Though the top-level list of topics is exhaustive, the subtopics are not. The assessment will not test your ability to (a) design and build a frontend, (b) manipulate the DOM, (c) handle events, or (d) write asynchronous CRUD requests. The assessment will also not test anything not covered in class.