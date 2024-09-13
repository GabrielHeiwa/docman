import { Injectable } from '@nestjs/common';
import * as Minio from "minio";

@Injectable()
export class MinioService {
    private client: Minio.Client | undefined = undefined;

    connect() {
        this.client = new Minio.Client({
            endPoint: "127.0.0.1",
            port: 4000,
            useSSL: false,
            accessKey: process.env.MINIO_ACCESS_KEY,
            secretKey: process.env.MINIO_SECRET_KEY,
            region: "gru1"
        });
    }

    async getUploadLink(bucketName: string, filename: string, expire = 60 * 60 * 1000) { 
        this.checkIfAlreadyConnect();

        const presingedUrl = await this.client.presignedPutObject(bucketName, filename, expire);

        return presingedUrl;
    }

    async getDownloadLink(bucketName: string, filename: string, expire = 60 * 60 * 1000) { 
        this.checkIfAlreadyConnect();

        const presingedUrl = await this.client.presignedGetObject(bucketName, filename, expire);

        return presingedUrl;
    }

    private checkIfAlreadyConnect() {
        if (!this.client) this.connect()
    }

}
