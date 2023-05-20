import { Controller, Get, Post, Body, Headers, Param, Delete } from '@nestjs/common';
import { SessionOrganisationId } from 'src/auth/auth.decorator';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(
    @SessionOrganisationId() organisationId: string,
    @Body() createAccountDto: CreateAccountDto,
  ) {
    return this.accountService.create(organisationId, createAccountDto);
  }

  @Get()
  async findAll(
    @SessionOrganisationId() organisationId: string,
  ) {
    return await this.accountService.findAll(organisationId);
  }

  @Get(':id')
  findOne(
    @SessionOrganisationId() organisationId: string,
    @Param('id') id: string,
  ) {
    return this.accountService.findOne(organisationId, id);
  }

  @Delete(':id')
  remove(
    @SessionOrganisationId() organisationId: string,
    @Param('id') id: string,
  ) {
    return this.accountService.remove(organisationId, id);
  }
}
