import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ScreeningService } from './screening.service';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';
import { SessionAccountId, SessionOrganisationId } from 'src/auth/auth.decorator';

@Controller('screening')
export class ScreeningController {
  constructor(private readonly screeningService: ScreeningService) {}

  @Post('demo')
  create(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }

  @Post('sepa')
  sepa(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }

  @Post('sepa-extended')
  sepaExtended(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }

  @Post('currency-exchange')
  currencyExchange(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }

  @Post('boa')
  boa(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }

  @Post('swift')
  swift(
    @SessionAccountId() accountId: string,
    @Body() payment: CreateScreeningDto,
  ) {
    return this.screeningService.paymentScreening(payment, accountId);
  }
}
