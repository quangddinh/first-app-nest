// controller use service to access data instead repository
import { MessagesRepository } from './messages.repository';

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // connect service to controller
        // bước này sẽ bỏ.
        // Service is creating its own dependencies
        // DONT DO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}
