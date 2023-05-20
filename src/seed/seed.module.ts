import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AccountModule } from 'src/account/account.module';
import { OrganisationModule } from 'src/organisation/organisation.module';
import { RuleModule } from 'src/rule/rule.module';

@Module({
  imports: [OrganisationModule, AccountModule, RuleModule],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
