#!/bin/bash
cd /home/demo-backend
echo this is application-2 start
sudo pm2 start index.js
sudo pm2 save