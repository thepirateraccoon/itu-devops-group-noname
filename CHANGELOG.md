# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Released]

## [0.0.1] - 05/02/2020

### Changes
- Patch minitwit.py:
  - Download the patch file from github using curl: `curl -O https://raw.githubusercontent.com/itu-devops/2020-spring/master/sessions/session_01/remote_code/minitwit_flagging_support.patch`.
  - Run: `patch < minitwit_flagging_support.patch`.
- Install python at least 3.7 and SQLite3.
- Install `sqlite3.h` and its required shared library using `sudo apt-get install libsqlite3-dev`.
- Convert `minitwit.py` from Python 2 to Python 3 using `2to3`.
- Modify line 41 in `minitwit.py` by adding `.decode('utf-8')` to fix error when running `./control.sh init`.
- Run `make build`.
- Remove redundant `-L /opt/local/lib/` from build command in MakeFile as sqlite is on the path.
- Run `ldd flag_tool` to verify sqlite dependencies.
- Install shellcheck and adapt `control.sh` according to recommendations.

### Needs attention
- Test suite fail with errors similar to: `TypeError: a bytes-like object is required, not 'str'`.

## [0.0.0] - 30/01/2020

### Added
- Helges source code untouched released as an example.
- Setup of repository.
