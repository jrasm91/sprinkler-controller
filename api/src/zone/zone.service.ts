import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZoneEntity } from '../entities/zone.entity';
import { ZoneCreateDto, ZoneUpdateDto } from './zone.dto';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(ZoneEntity) private repository: Repository<ZoneEntity>,
  ) {}

  create(dto: ZoneCreateDto) {
    return this.repository.save({
      enabled: dto.enabled ?? true,
      running: false,
      name: dto.name,
      pin: dto.pin,
      color: dto.color ?? null,
      relay: dto.relay ?? null,
    });
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.get(id);
  }

  async update(id: number, dto: ZoneUpdateDto) {
    const zone = await this.get(id);

    return this.repository.save({
      id: zone.id,
      enabled: dto.enabled,
      name: dto.name,
      pin: dto.pin,
      color: dto.color,
      relay: dto.relay,
    });
  }

  async remove(id: number) {
    const zone = await this.get(id);
    await this.repository.remove(zone);
  }

  private async get(id: number) {
    const zone = await this.repository.findOne({ where: { id } });
    if (!zone) {
      throw new BadRequestException('Zone not found');
    }

    return zone;
  }
}
