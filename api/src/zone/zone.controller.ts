import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ZoneCreateDto, ZoneUpdateDto } from './zone.dto';
import { ZoneService } from './zone.service';

@Controller('zones')
export class ZoneController {
  constructor(private readonly service: ZoneService) {}

  @Post()
  create(@Body() dto: ZoneCreateDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ZoneUpdateDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
