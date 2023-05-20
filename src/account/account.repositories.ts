import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

export class AccountRepository extends Repository<Account> {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>
    ) {
        super(accountRepository.target, accountRepository.manager, accountRepository.queryRunner);
    }

    async getAccounts(organisationId: string): Promise<Account[]> {
        return this.manager
            .getRepository(Account)
            .createQueryBuilder('account')
            .where(`account.organisationId = :organisationId`, { 
                organisationId 
            })
            .getMany();
    }

    async getAccount(organisationId: string, id: string): Promise<Account> {
        return this.manager
            .getRepository(Account)
            .createQueryBuilder('account')
            .where(`id = :id`, { id })
            .andWhere(`account.organisationId = :organisationId`, { 
                organisationId 
            })
            .getOne();
    }

    async deleteAccount(organisationId: string, id: string) {
        return await this.delete({ id, organisationId });
    }
}