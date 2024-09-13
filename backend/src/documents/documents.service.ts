import { Injectable } from '@nestjs/common';
import Handlebars from 'handlebars';

const documents = [
    {
        template: Handlebars.compile("Name: {{name}}"),
        data: {
            name: "Gabriel Paz Dos Santos"
        }
    }
]

@Injectable()
export class DocumentsService {

    async generate() {
        return documents[0].template(documents[0].data);
    }

    async uploadTemplate(file: Express.Multer.File) {
        
    }
}
