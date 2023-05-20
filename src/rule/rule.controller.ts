import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { SessionAccountId } from 'src/auth/auth.decorator';

@Controller('rules')
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  @Post()
  create(
    @SessionAccountId() accountId: string,
    @Body() createRuleDto: CreateRuleDto,
  ) {
    return this.ruleService.create(createRuleDto, accountId);
  }

  @Get()
  findAll(
    @SessionAccountId() accountId: string,
  ) {
    return this.ruleService.findAll(accountId);
  }

  @Get(':id')
  findOne(
    @SessionAccountId() accountId: string,
    @Param('id') id: string,
  ) {
    return this.ruleService.findOne(+id, accountId);
  }

  @Patch(':id')
  update(
    @SessionAccountId() accountId: string,
    @Param('id') id: string,
    @Body() updateRuleDto: UpdateRuleDto,
  ) {
    return this.ruleService.update(+id, updateRuleDto);
  }

  @Delete(':id')
  remove(
    @SessionAccountId() accountId: string,
    @Param('id') id: string,
  ) {
    return this.ruleService.remove(+id);
  }
}
