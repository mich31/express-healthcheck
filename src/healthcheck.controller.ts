import { Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export class HealthCheckController {

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
    async live(res: Response): Promise<void> {
        res.status(501).send('Not implemented yet');
    }

    /**
     * TODO Implementation
     */
    async ready(res: Response): Promise<void> {
        res.status(501).send('Not implemented yet');
    }
}