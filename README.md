![Logo](https://raw.githubusercontent.com/SethSharp/lumuix/main/public/images/logo.png)
# A Generic Vue Component Library
This library aims to be a generic vue component library, so it can be used in all sorts of projects that utilise vue (inertia, nuxt etc).
The components serve as a way to fully customise UI/UX on your projects.

## Development
This repository is a "mono-repo", it contains the ui library and the documentation code in one repo. Which does affect
the development. There are 3 core locations to be aware of:
1. Root
2. UI
3. Documentation

The `root` directory handles app level concerns, at the moment prettier and eslint, to ensure code standards across the app are met.

The `ui` directory contains all the components and files for the `lumuix` component library

The `documentation` directory, contains the documentation code - which is hosted on Vercel.


Getting the basics setup:
1. Installing npm dependencies across all directories listed above via `npm ci`
2. When running the documentation, cd into `documentation` and run `npm run dev`

Now to make changes in the ui is straight forward, but due to the nature of the mono-repo, there is an additional step.
You must run `npm run build` in `ui/` to build the new changes as `documentation` creates a link to the directory via
the `dist/` directory.

## Making a PR
You are already halfway there if you have read the whole document so far. As a final check, run `npm run build` in `ui/`
which will build all your changes. At the moment you just need to make a PR and request a review. Do not increment the
`package.json` version, that will be done on main by myself.

## Releasing
1. On the main branch:
   2. Adjust `package.json` version to desired value
   3. `npm run build` to ensure any stray files which weren't properly built during development
   4. `npm update` to update the `package-lock`
   3. Push your changes
2. On the main branch draft a new release, tagging a version matching the `package.json`
3. Once adding the tag you can hit the "generate release notes" button, which will list all the PRs added since the last release.

Once you publish the release a workflow will start which publishes that version on the npm repository. You can save as a draft which will not trigger this workflow.