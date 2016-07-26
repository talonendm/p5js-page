# p5js-page
webpage hosting test


## Instructions to host:

Link to page:

https://talonendm.github.io/p5js-page/  + folder


## Attachments GIT: 


### commands:
# -------------------------------------------

cd C:\talonendm

ls

# -------------------------------------------



# -------------------------------------------
# Clone new REPO
# -------------------------------------------
git clone https://github.com/talonendm/p5js-page.git
# -------------------------------------------


# -------------------------------------------
# If changes made at Github: Do this:
# -------------------------------------------
git pull origin master

OR (wwW)

git pull origin gh-pages
# -------------------------------------------



# -------------------------------------------
# If changes made at LOCAL: Do this:
# -------------------------------------------
git commit -a -m "my test commit done from Acer 6bG"

git push origin master

OR (www)

git push origin gh-pages
# -------------------------------------------




### FULL:

mkdir talonendm

cd C:\talonendm

git config --global user.name "talonendm"

git config --global user.email "<MY EMAIL>"


git config --list


git clone https://github.com/talonendm/kinect-experiments.git





git commit -a -m "my test commit done from Acer 6bG"

# -------------------------------------------
# If changes made at Github: Do this:
# -------------------------------------------
git pull origin master

$ git pull origin master
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/talonendm/kinect-experiments
 * branch            master     -> FETCH_HEAD
   becca5f..cfcbb43  master     -> origin/master
Updating becca5f..cfcbb43
Fast-forward
 README.md | 15 ++++++++++++++-
 1 file changed, 14 insertions(+), 1 deletion(-)
# -------------------------------------------


Check the 3 last commints...
git log -3

# -------------------------------------------
Example - clone repository made at Github:
https://github.com/talonendm/p5js-page
# -------------------------------------------
cd C:\talonendm
ls
git clone https://github.com/talonendm/p5js-page.git

EDIT CODE

$ git commit -a -m "my test commit done from Acer 6bG"
[gh-pages 5015b85] my test commit done from Acer 6bG
 1 file changed, 12 insertions(+), 1 deletion(-)


$ git status
On branch gh-pages
Your branch is ahead of 'origin/gh-pages' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working directory clean

$ git remote
origin

$ git remote add origin
usage: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch>
                          master branch
    --mirror[=<push|fetch>]
                          set up remote as a mirror to push to or fetch from

						  
NOTE: use gh-pages instead of master !!! 
$ git push origin gh-pages
Counting objects: 4, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 571 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
To https://github.com/talonendm/p5js-page.git
   60b7cc9..5015b85  gh-pages -> gh-pages

   
   



