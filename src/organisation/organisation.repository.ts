import { Organisation } from "./entities/organisation.entity";
import { Repository, In, Not, EntityRepository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrganisationRepository extends Repository<Organisation> {
  async saveNew(o: Organisation) {
    return await this.save(o);
  }

  async getOneById(id: string) {
    return new Organisation({});
  }

  async getAll() {
    return await this.createQueryBuilder('organisation').getMany();
    // return await this.manager
    //   .getRepository(Organisation)
    //   .createQueryBuilder('organisation')
    //   .getMany();
  }
}
