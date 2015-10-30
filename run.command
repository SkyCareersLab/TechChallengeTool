#!/bin/bash

set -e

cd ~

rm -rf sky-news-exercise || echo "no need to delete"

cd ~/TechChallengeTool/

open http://localhost:3001/ & node app.js
