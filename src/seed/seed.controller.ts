import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Rule } from 'src/rule/entities/rule.entity';
import { SeedService } from './seed.service';

@Controller('seeds')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  findAll(
    @Body() rules: Rule[],
  ) {
    return this.seedService.findOrganisationAndAccount(rules);
  }
}
