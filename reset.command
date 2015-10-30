#!/bin/bash

set -e

cd ~/TechChallengeTool/

mkdir reset/

cd ~/TechChallengeTool/reset/

git clone git@github.com:SkyCareersLab/sky-news-exercise1.git ex1

git clone git@github.com:SkyCareersLab/sky-news-exercise2.git ex2

git clone git@github.com:SkyCareersLab/sky-news-exercise3.git ex3

git clone git@github.com:SkyCareersLab/sky-news-exercise4.git ex4

cd ~/TechChallengeTool/reset/ex1/

git reset --hard 1fdcfe3

git push -f

cd ~/TechChallengeTool/reset/ex2/

git reset --hard 1fdcfe3

git push -f

cd ~/TechChallengeTool/reset/ex3/

git reset --hard 1fdcfe3

git push -f

cd ~/TechChallengeTool/reset/ex4/

git reset --hard 1fdcfe3

git push -f

cd ~/TechChallengeTool/

rm -rf reset/
