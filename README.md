# Project Setup Guide (Arxena)

This is a step-by-setp guide for the setup of the project Arxena in local machine


## Cloning

To clone this project run

```bash
//cloning
  git clone https://github.com/ruck-45/arxena.git

// going inside folder
  cd ./arxena
```

## Setting up venv (for isolated env)

To create an isolated environment for the project run following commands in order

```bash
// Install venv
  pip install virtualenv

// creating a venv (by the name env)
  python3 -m venv env

// creating a venv (by the name env)
  python3 -m venv env

// activating the virtual env
  source env/Scripts/activate
```

## Installing dependencies from requirements.txt

To install dependencies from requirements.txt run following commands

```bash
// Install requirements
  pip install -r requirements.txt
```

## Setting up React-Web-App

First install dependencies from package.json using npm

```bash
// go into react folder
  cd ./arxena-react-frontend

// Install dependencies
  npm install
```

Then build the react app to generate build folder

```bash
// Install dependencies
  npm run build
```

go back to base folder

```bash
// return back
  cd ../
```

## Starting Flask server

Go into the flask dir and run the server file

```bash
// go into flask dir
  cd ./test-arxena-site

// Run the flask server
  python3 server.py
```

The server will be Running on http://localhost:5051
