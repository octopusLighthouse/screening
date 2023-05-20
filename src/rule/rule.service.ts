import { Injectable } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { Rule } from './entities/rule.entity';

@Injectable()
export class RuleService {
  private rules: Rule[] = [];

  create(createRuleDto: CreateRuleDto, accountId: string) {
    if (!accountId) throw new Error('accountId');
    const newRule = new Rule({ ...createRuleDto, accountId });
    this.rules.push(newRule);
    return newRule;
  }

  findAll(accountId: string) {
    return this.rules.filter((p: Rule) => p.accountId === accountId);
  }

  findOne(id: number, accountId: string) {
    return `This action returns a #${id} rule`;
  }

  update(id: number, updateRuleDto: UpdateRuleDto) {
    return `This action updates a #${id} rule`;
  }

  remove(id: number) {
    return `This action removes a #${id} rule`;
  }
}
