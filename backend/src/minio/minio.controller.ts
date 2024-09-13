import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('minio')
export class MinioController {

    @Get('download/:fileId')
    async getDownloadPresnigedUrl(@Param('fileId') fileId: string) {

    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async getUploadPresnigedUrl(@Body() body: any, @UploadedFile() file: Express.Multer.File) {

        return { };
    }
}
