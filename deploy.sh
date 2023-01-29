#!/bin/bash

# check if a commit message is provided
if [ $# -eq 0 ]; then
  echo "Please provide a commit message"
  exit 1
fi

# run the git commands
git add .
git commit -m "$1"
git push
npm run deploy