import { Container } from 'inversify'
import { HealthCheckController } from '../healthcheck.controller';
import TYPES from './types';

const container = new Container();

container.bind<HealthCheckController>(TYPES.Controller).to(HealthCheckController);

Object.seal(container);

export default container;