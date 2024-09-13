import { Module } from '@nestjs/common';
import { DocumentsModule } from './documents/documents.module';
import { MinioModule } from './minio/minio.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DocumentsModule, 
    MinioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
