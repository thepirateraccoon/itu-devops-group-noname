# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Released]

## [0.0.0] - 30/01/2020

### Added

- Helges source code untouched released as an example.
- Setup of repository.

### Steps Session 1:
- Patched the file minitwit.py:
  - Download the patch file from github using curl: `curl -O https://raw.githubusercontent.com/itu-devops/2020-spring/master/sessions/session_01/remote_code/minitwit_flagging_support.patch`
  - Run patch command: `patch < minitwit_flagging_support.patch`
- Install python at least 3.7 and SQLite3 database via Anaconda
- Install `sqlite3.h` and its required shared library via `sudo apt-get install libsqlite3-dev`
- Converted `minitwit.py` from Python 2 to Python 3 using `2to3`
  - Change line 41 in `minitwit.py` by adding `.decode('utf-8')` to fix error when running `./control.sh init`
- Ran `make build`;
- Removed `-L/opt/local/lib/` from build command in MakeFile (did not have to though?)
- Ran `ldd flag_tool` to check sqlite dependencies
- Installed shellcheck and adapted `control.sh` according to the recommendations of the shellcheck tool


## Application

### minitwit.py
A microblogging application written with Flask and sqlite3.