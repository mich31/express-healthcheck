import { Request, Response } from 'express';
import container from './container/inversify.config';
import TYPES from './container/types';
import { HealthCheckController } from './healthcheck.controller';

const controller = container.get<HealthCheckController>(TYPES.Controller);

export default [
    {
        path: '/health',
        method: 'get',
        handler: (req: Request, res: Response) => controller.health(res)
    },
    {
        path: 'live',
        method: 'get',
        handler: (req: Request, res: Response) => controller.live(res)
    },
    {
        path: 'ready',
        method: 'get',
        handler: (req: Request, res: Response) => controller.ready(res)
    }
]