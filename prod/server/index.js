const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");
const express = require("express");
const path = require('path')

const app = express();

const config = {
  dev: false,
  buildDir: path.join(__dirname, "nuxt"),
  build: {
    publicPath: "/assets/"
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  console.log("IN New Nuxt Trial: ");
  const isProduction = process.env.NODE_ENV === "development" ? false : true;
  if (isProduction) {
   // res.set("Cache-Control", "public, max-age=600, s-maxage=600");
  }
  try {
    nuxt.render(req, res);
  } catch (err) {
    console.error(err);
  }
}

app.use(handleRequest);
exports.nuxtssr = functions.https.onRequest(app);

exports.func = functions.https.onRequest((req, res) =>
  res.status(200).json({
    foo: 'bar'
  })
);
