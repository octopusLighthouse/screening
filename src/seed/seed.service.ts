import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { OrganisationService } from 'src/organisation/organisation.service';
import { RuleService } from 'src/rule/rule.service';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';

@Injectable()
export class SeedService {
  constructor(
    private readonly organisationService: OrganisationService,
    private readonly accountService: AccountService,
    private readonly ruleService: RuleService,
  ) {}



  findOrganisationAndAccount(rules) {
    // const organisation = this.organisationService.create({
    //   legalCodeByGoverment: 'L',
    // });
    // const account = this.accountService.create({
    //   organisationId: organisation.id,
    //   externalId: 'demo id',
    //   name: 'demo name',
    // });

    // for (const rule of rules) {
    //   this.ruleService.create(rule, account.id)      
    // }

    return {
      ...rules,
    };
  }
}
