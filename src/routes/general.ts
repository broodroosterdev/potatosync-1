import { SwaggerRouter } from 'koa-swagger-decorator';
import { general } from '../controller';

const router = new SwaggerRouter();

export { router as general };
