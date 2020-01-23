#!/bin/bash

set -e

(cd .. && npm install && npm run build)
touch .built
