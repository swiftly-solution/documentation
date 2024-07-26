#!/bin/bash

if [ -f ./buildstate.sh ]; then
    exit 0
else
    touch ./buildstate.sh
fi

bash gen_docs.sh;
bash build.sh;
bash sync.sh;

rm -rf ./buildstate.sh