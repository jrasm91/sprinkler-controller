import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class ZoneCreateDto {
  @IsBoolean()
  @IsOptional()
  enabled?: boolean | null;

  @IsString()
  name!: string;

  @IsInt()
  @IsPositive()
  pin!: number;

  @IsString()
  @IsOptional()
  color?: string | null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  relay?: number | null;
}

export class ZoneUpdateDto {
  @IsBoolean()
  @IsOptional()
  enabled?: boolean | null;

  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  pin?: number;

  @IsString()
  @IsOptional()
  color?: string | null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  relay?: number | null;
}
