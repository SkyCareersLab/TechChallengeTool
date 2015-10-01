#!/bin/bash

set -e

cd ~

if [ ! -d ./sky-news-exercise ]

then

    git clone https://github.com/JBH92/sky-news-exercise.git

fi

open -a "Safari" ~/sky-news-exercise/warm-up-exercise/webpages/taskPage.html || echo "Unable to open task page in safari"

atom ~/sky-news-exercise/ || echo "Unable to open project in atom (is atom installed?)"
