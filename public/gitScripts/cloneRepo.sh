#!/bin/bash

cd ~

if [ ! -d ./SkyNewsExercise ]

then

    git clone https://github.com/JBH92/SkyNewsExercise.git

    echo "Repository successfully cloned"

else

    echo "SkyNewsExercise folder is already present in home directory"

fi
