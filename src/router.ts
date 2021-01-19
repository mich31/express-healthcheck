import { Request, Response } from 'express'
import { Controller } from './controller'

export default [
    {
        path: '/health',
        method: 'get',
        handler: (req: Request, res: Response) => {}
    },
    {
        path: 'live',
        method: 'get',
        handler: (req: Request, res: Response) => {}
    },
    {
        path: 'ready',
        method: 'get',
        handler: (req: Request, res: Response) => {}
    }
]