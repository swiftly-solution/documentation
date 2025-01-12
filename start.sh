#!/bin/bash

git clone https://github.com/swiftly-solution/automation
cd automation
cp ../.env .
git fetch
git pull
yarn install
yarn start
cd ..

yarn start