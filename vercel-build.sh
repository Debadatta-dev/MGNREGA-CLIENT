#!/bin/bash
echo "Installing global dependencies..."
npm install -g vite @vitejs/plugin-react
echo "Running build..."
vite build