import { Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneEntity } from '../entities/zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ZoneEntity])],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
