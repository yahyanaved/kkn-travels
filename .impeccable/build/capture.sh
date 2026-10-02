#!/bin/sh
# usage: capture.sh <url> <out.png> <css-width> <css-height> [scale]
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor="${5:-1}" --window-size="$3,$4" --virtual-time-budget=10000 --screenshot="$2" "$1" >/dev/null 2>&1
file "$2" | sed 's/.*PNG image data, //'
