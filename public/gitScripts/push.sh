#!/bin/bash

cd ~/SkyNewsExercise/

echo $1

git add -A

git commit -m $1

git pull --rebase

git push origin master -f
