import { Injectable } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './entities/organisation.entity';
import { OrganisationRepository } from './organisation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organisation)
    private readonly organisationRepository: Repository<Organisation>,
  ) {}

  async create(partialOrganisation: CreateOrganisationDto): Promise<Organisation> {
    const organisation = new Organisation({});
    return await this.organisationRepository.save(organisation);
  }

  async findAll(): Promise<Organisation[]> {
    return await this.organisationRepository.find();
  }

  async findOne(id: string): Promise<Organisation> {
    return await this.organisationRepository.manager
      .getRepository(Organisation)
      .createQueryBuilder('orgi')
      .getOne();
  }
}
