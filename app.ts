import 'reflect-metadata';
import express from 'express';
import container from './src/container/inversify.config';
import { HealthCheckController } from './src/healthcheck.controller';
import TYPES from './src/container/types';

const app = express();
const controller = container.get<HealthCheckController>(TYPES.Controller);

app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
})

app.get('/health', (req, res) => {
    controller.health(res);
})

app.get('/live', (req, res, next) => {
    controller.live(res);
})

app.get('/ready', (req, res) => {
    controller.ready(res);
})

// start Express server.
/*
app.listen(3000, () => {
    console.log(`App is running...`);
}); */


export default app;