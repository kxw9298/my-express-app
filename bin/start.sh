#!/bin/bash
​
#[ -s "/.nvm/nvm.sh" ] && \. "/.nvm/nvm.sh"
cd /web
nohup npm start > /dev/null 2>&1 &