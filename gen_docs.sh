#!/bin/bash

cd docgen

node src/index.cjs

rm -rf ../src/docs/scripting
cp -r output ../src/docs/scripting