import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {configAmo} from "./config-amo";
import axios from "axios";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 5000, async ()=>{

    try {
      const response = await axios.get('http://localhost:3000/token');
      configAmo.accessToken = response.data.token
    } catch (error) {
      console.error('Error while sending GET to localhost getter:', error);
    } finally {
      console.log('start server with config amoCrm', configAmo)
    }

  });
}
bootstrap().catch(console.error);

