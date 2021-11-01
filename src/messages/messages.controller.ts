// nest generate controller messages/messages --flat
import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;
    constructor() {
        // DONT DO THIS ON REAL APPS
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        // if not exist
        if (!message){
            // built-in of Nest
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
