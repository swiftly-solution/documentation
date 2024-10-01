#!/bin/bash

rsync -arvz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress --delete src/.vuepress/dist/* docs-telro@core01-ffm-de.swiftlycs2.net:/home/docs-telro/htdocs/swiftlycs2.net