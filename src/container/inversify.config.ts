import { Container } from 'inversify'
import { Controller } from '../controller';
import TYPES from './types';

const container = new Container();

container.bind<Controller>(TYPES.Controller).to(Controller);

Object.seal(container);

export default container;