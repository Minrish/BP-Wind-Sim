# GitHub Operation
git config core.autocrlf true

git add --all
git commit -m "UPDATE_CHANGES_HERE"
git push

# PyWake Setup
pip install py_wake

# React Setup
npm -v
node -v
npx create-react-app bp-wind-simluatior-application

update react to v5.0.1
npm audit fix --force

# Dependencies
npm install node-sass
npm install react-router-dom
npm install --save styled-components
npm install --save react-icons

npm install --global yarn
yarn --version

npm install react-icons --save

# How to fix "running scripts is disabled on this system"?
First, Open PowerShell with Run as Administrator.
Then, run this command in PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
After that type Y and press Enter.

yarn install
yarn start

# To clean yarn build cache
yarn cache clean --all

# React Operation
cd bp-wind-simluator-application
npm start
Ctrl-C -> Y/N to Terminate/Continue

# To get it working, run following commands in terminal
git clone https://github.com/Minrish/BP-Wind-Sim.git
cd BP-Wind-Sim\bp-wind-simulator
npx clear-npx-cache
npm install
npm audit fix --force
npm start