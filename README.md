![Logo](https://raw.githubusercontent.com/SethSharp/lumuix/main/public/images/logo.png)
# A Generic Vue Component Library
This is a personal use component library, used across internal projects to:
- Avoid the hassle of duplicating code and setting up new components
- Provides positive downstream updates / improvements to products that use these components
- Adds to the portfolio

This library aims to be a generic vue component library, so it can be used in all sorts of projects that utilise vue (inertia, nuxt etc).
This library also comes packaged with some pre-built components which offer a quick and easy way to add generic components to your application.
The components serve as a way to fully customise UI/UX on your projects.

## Configuration
1. `npm install` to install dependencies
2. `npm run dev` to spin up the vite server

The main app showcases all the components and goes over basic usages + linking to the original documentation in shadcn.

## Submitting Additions
Simply open a PR containing your changes, DO NOT increment the package version or push changes including build files - it is important that you
test the build process works fine (without committing anything). When a new version is released, the version and any build scripts will be run directly on main by myself.

## Releasing version
Releasing is pretty straight forward:
1. On the main branch:
   2. Adjust `package.json` version to desired value
   3. `npm run build` to build all the new additions
   4. `npm update` to update the `package-lock`
   3. Push your changes
2. On the main branch draft a new release, tagging a version matching the `package.json` and ensuring the target branch is main 
3. Once adding the tag you can hit the "generate release notes" button, which will list all the PRs added since the last release.

Once you publish the release a workflow will start which publishes that version on the npm repository. You can save as a draft which will not trigger any workflows.