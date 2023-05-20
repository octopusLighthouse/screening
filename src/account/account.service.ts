import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { OrganisationService } from 'src/organisation/organisation.service';
import { AccountRepository } from './account.repositories';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';


@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}

  async create(organisationId: string, dtoContent: CreateAccountDto) {
    const account = new Account({ ...dtoContent, organisationId });
    await this.accountRepository.save(account);
    return account;
  }

  async findAll(organisationId: string): Promise<Account[]> {
    return await this.accountRepository.getAccounts(organisationId);
  }

  async findOne(organisationId: string, id: string): Promise<Account> {
    return await this.accountRepository.getAccount(organisationId, id);
  }

  async remove(organisationId: string, id: string) {
    return await this.accountRepository.deleteAccount(organisationId, id);
  }
}
