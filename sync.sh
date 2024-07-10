#!/bin/bash

rm -rf /home/swiftlycs2/web/rewrite.swiftlycs2.net/public_html/*
cp -r src/.vuepress/dist/* /home/swiftlycs2/web/rewrite.swiftlycs2.net/public_html
chown -R swiftlycs2:swiftlycs2 /home/swiftlycs2/web/rewrite.swiftlycs2.net/public_html