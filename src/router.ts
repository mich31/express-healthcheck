import { Request, Response } from 'express'
import container from './container/inversify.config'
import TYPES from './container/types';
import { Controller } from './controller'

const controller = container.get<Controller>(TYPES.Controller);

export default [
    {
        path: '/health',
        method: 'get',
        handler: (req: Request, res: Response) => controller.health()
    },
    {
        path: 'live',
        method: 'get',
        handler: (req: Request, res: Response) => controller.live()
    },
    {
        path: 'ready',
        method: 'get',
        handler: (req: Request, res: Response) => controller.ready()
    }
]