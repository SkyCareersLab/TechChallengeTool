#!/bin/bash

cd ~

if [ ! -d ./sky-news-exercise ]

then

    git clone https://github.com/JBH92/sky-news-exercise.git

    echo "Repository successfully cloned"

else

    echo "sky-news-exercise folder is already present in home directory"

fi
