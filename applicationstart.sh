#!/bin/bash
cd /home/ubuntu
echo this is application-2 start
sudo pm2 restart index.js
sudo pm2 save