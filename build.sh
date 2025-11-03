#!/bin/bash
echo "Installing dependencies..."
npm ci
echo "Running build with npx..."
npx --no-install vite build --config vite.config.build.js
