# A Generic Vue UI Component Library
This is a personal use UI component library, used across internal projects to:
- Avoid the hassle of duplicating code and setting up new components
- Provides a single place for components so when changes are made there a series of downstream - positive effects on the products that use
- Adds to the portfolio

This library aims to be a generic vue library, so it can be used in all sorts of projects that utilise vue (inertia, nuxt etc).

# Configuration & Releases

## Configuration
1. `npm ci` to install dependencies
2. `npm run dev` to view examples

## Release
Simply increment the package version in the package.json, run `npm run build` to build assets. Then push to GitHub where it will automatically publish the `/dist` contents.
