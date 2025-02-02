import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from "./message.repository";
import { MessageService } from './message.service';


@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessageService]
})
export class MessagesModule {}
