#!/bin/bash

cd ~/sky-news-exercise/

echo $1

git add -A

git commit -m $1

git pull

git push origin master -f
