import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TrackModule],
})
export class AppModule {}
