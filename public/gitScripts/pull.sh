#!/bin/bash

set -e

cd ~/sky-news-exercise/

git stash || echo "No changes to stash"

git pull || echo "Already up to date"

git stash apply || echo "No changes were stashed"
