import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./message.repository";

@Injectable()
export class MessageService {

    constructor(public MessagesRepository: MessagesRepository) {    }

    findOne(id: string) {
        return this.MessagesRepository.findOne(id)
    }

    findAll() {
        return this.MessagesRepository.findAll()
    }

    createMessage(text: string) {
        return this.MessagesRepository.createMessage(text)
    }
}