# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Released]

## [0.0.0] - 30/01/2020

### Added

- Helges source code untouched released as an example.
- Setup of repository.

### Steps
- Patched the file minitwit.py:
  - Download the patch file from github using curl: `curl -O https://raw.githubusercontent.com/itu-devops/2020-spring/master/sessions/session_01/remote_code/minitwit_flagging_support.patch`
  - Run patch command: `patch < minitwit_flagging_support.patch`

## Application

### minitwit.py
A microblogging application written with Flask and sqlite3.