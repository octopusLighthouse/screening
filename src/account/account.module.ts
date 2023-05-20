import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { OrganisationModule } from 'src/organisation/organisation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from './account.repositories';
import { Account } from './entities/account.entity';

@Module({
  imports: [
    OrganisationModule,
    TypeOrmModule.forFeature([
      Account,
    ]),
  ],
  controllers: [AccountController],
  providers: [
    AccountService, 
    AccountRepository,
  ],
  exports: [AccountService],
})
export class AccountModule {}
