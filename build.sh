#!/bin/bash
echo "Setting execute permissions..."
chmod +x ./node_modules/.bin/vite
echo "Running build..."
export NODE_OPTIONS="--max_old_space_size=4096"
./node_modules/.bin/vite build
