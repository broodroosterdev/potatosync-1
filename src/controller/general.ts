import { BaseContext } from 'koa';
import { description, request, summary, tagsAll } from 'koa-swagger-decorator';

@tagsAll(['General'])
export default class GeneralController {
    @request('get', '/health')
    @summary('Health page')
    @description('A simple message to verify the service is up and running.')
    public static async helloWorld(ctx: BaseContext) {
        ctx.body = '200 OK';
    }
}