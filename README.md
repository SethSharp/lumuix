![Logo](https://raw.githubusercontent.com/SethSharp/lumuix/main/public/images/logo.png)
# Lumuix: Vue Component Library
This is a personal use component library, used across internal projects to:
- Avoid the hassle of duplicating code and setting up new components
- Provides positive downstream updates / improvements to products that use these components
- Adds to the portfolio

This library aims to be a generic vue library, so it can be used in all sorts of projects that utilise vue (inertia, nuxt etc).
This library also comes packaged with some pre-built components which offer a quick and easy way to add generic components to your application.
The components serve as a way to fully customise UI/UX on your projects.

## Configuration
1. `npm ci` to install dependencies
2. `npm run dev` to spin up the dev server and start playing around with the components

## Releasing version
Simply increment the package version in the package.json, run `npm run build` to build assets & push to main. Then tag a release in the repository with a summary of what has been changed and publish.

## Submitting
Make your adjustments and create a PR. It will be reviewed and potentially merged to main. Where I (the owner) will publish a release. Note: You do not need to increment the package version when submitting a PR.