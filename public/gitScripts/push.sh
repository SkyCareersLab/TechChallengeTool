#!/bin/bash

set -e

cd ~/sky-news-exercise/

git add web/*

git commit -m "$1"

git pull || echo "Already up to date"

git push origin master -f
