![Logo](https://raw.githubusercontent.com/SethSharp/lumuix/main/public/images/logo.png)
# A Generic Vue Component Library
This is a personal use component library, used across internal projects to:
- Avoid the hassle of duplicating code and setting up new components
- Provides positive downstream updates / improvements to products that use these components
- Adds to the portfolio

This library aims to be a generic vue library, so it can be used in all sorts of projects that utilise vue (inertia, nuxt etc).
This library also comes packaged with some pre-built components which offer a quick and easy way to add generic components to your application.
The components serve as a way to fully customise UI/UX on your projects.

## Configuration
1. `npm ci` to install dependencies
2. `npm run dev` to spin up the dev server

The main app showcases all the components and goes over basic usages + linking to the original documentation in shadcn.

## Submitting Additions
Simply open a PR containing your changes, DO NOT increment the package version or push changes including build files - it is important that you
test the build process works fine. When a new version is released, the version and any build scripts will be run directly on main by myself.

## Releasing version
On main:
1. `npm run build`
2. increment `package.json`
3. Push

Then tag a release matching that in the `package.json`, auto-generate notes and add anything extra.
Then release!