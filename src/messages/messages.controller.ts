import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-messages.dto';
import { MessageService } from './message.service';

@Controller('messages')
export class MessagesController {
    constructor(public MessageService: MessageService) {}

    @Get()
    listMessages() {
        return this.MessageService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.MessageService.createMessage(body.content)
    }

    @Get('/:id')
    async getMessage(@Param('id') param: any) {
        const message = await this.MessageService.findOne(param)

        console.log(message)

        if(!message) {
            throw new NotFoundException('the message was not found')

        }
        return message
    }
}
