#!/bin/bash

set -e

cd ~/sky-news-exercise/

git stash || echo "No changes to stash"

git pull || echo "Already up to date"

git stash pop || echo "No changes were stashed"

git merge -s recursive -Xours || echo "No conflicts to merge"

git commit -m "Auto merged" || echo "Nothing to commit"
