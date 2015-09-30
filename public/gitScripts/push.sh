#!/bin/bash

cd ~/sky-news-exercise/

git add web/*

git commit -m "$1"

git pull

git push origin master -f
