import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendMessage(body: {
        message: string;
    }): {
        message: string;
    };
}
