# Nuxt.js Universal App with SSR via Firebase Functions and Firebase Hosting - **_Nuxt 2 Version_**

Based on https://github.com/davidroyer/nuxt2-ssr-firebase

Host a Nuxt Universal app or site by combining Nuxt.js with Firebase Cloud Functions and Hosting.

[Live Preview](https://nuxt2ssrfire.firebaseapp.com)

---

## Pre-Setup: Before Installing Any Dependencies

1.  Obtain a Firebase Project ID to use for this project. [See Overiew Here](#firebase-project-setup)

2.  Inside this directory, locate the file `.firebaserc.sample`, and do the following:

- Rename this file to `.firebaserc`
- Inside this file, replace `your-project-id` with your Firebase Project ID.

---

## Setup

Use `nvm` to install Node 8

```bash
nvm install 8
```

```bash
npm install -g firebase-tools
```

```bash
yarn setup
yarn build
```

To test client side only locally:

```bash
yarn dev
```

### Firebase functions - local emulation

```bash
yarn serve
```

### Firebase functions - deploy

```bash
yarn deploy
```

---

### Firebase Project Setup

1.  Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).

2.  Obtain the Firebase Project ID

### Features

- Server-side rendering with Firebase Hosting combined with Firebase Functions
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...

- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- If you have errors, make sure `firebase-tools` is up to date. I've experienced many problems that were resolved once I updated.

* The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

* ALL commands are ran from the root directory