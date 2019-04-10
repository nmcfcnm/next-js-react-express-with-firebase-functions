const functions = require('firebase-functions');
const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, conf: { distDir: 'next' } });
const handle = nextApp.getRequestHandler();
const server = express();

server.get('/ok', (req, res) => {
  console.log("\n\n\n\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OKOKOKOKOKOKOOKOKOKOKOOKOK2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n\n\n");

  return res.send("HO GYA HOAN HI THA");
});

server.get('/', (req, res) => {
  console.log("\n\n\n\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OKOKOKOKOKOKOOKOKOKOKOOKOK>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n\n\n");
  return nextApp.render(req, res, '/index', {});
});

server.get('/about', (req, res) => {
  return nextApp.render(req, res, '/about', {});
});

server.get('*', (req, res) => handle(req, res))

const app = functions.https.onRequest((req, res) => {
  nextApp.prepare().then(() => server(req, res))
});
exports.app = app;