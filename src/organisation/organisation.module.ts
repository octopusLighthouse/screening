import { Module } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { Organisation } from './entities/organisation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationRepository } from './organisation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Organisation,
      OrganisationRepository,
    ]),
  ],
  controllers: [OrganisationController],
  providers: [
    OrganisationService,
    OrganisationRepository,
  ],
  exports: [OrganisationService],
})
export class OrganisationModule {}
