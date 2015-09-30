#!/bin/bash

cd ~

if [ ! -d ./sky-news-exercise ]

then

    git clone https://github.com/JBH92/sky-news-exercise.git

fi

open -a "Safari" ~/sky-news-exercise/web/webpages/index.html

atom ~/sky-news-exercise/web/
