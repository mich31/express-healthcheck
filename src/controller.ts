import { Response } from 'express'

export class Controller {

    /**
     * TODO
     * 1/ Implementation
     * 2/ Body response customization
     */
    async health(res: Response): Promise<void> {
        res.status(200).send({status: 'UP'});
    }

    /**
     * TODO Implementation
     */
    async live(res: Response): Promise<void> {}

    /**
     * TODO Implementation
     */
    async ready(res: Response): Promise<void> {}
}