import { Module } from '@nestjs/common';
import { ScreeningService } from './screening.service';
import { ScreeningController } from './screening.controller';
import { PaymentModule } from 'src/payment/payment.module';
import { RuleModule } from 'src/rule/rule.module';

@Module({
  imports: [PaymentModule, RuleModule],
  controllers: [ScreeningController],
  providers: [ScreeningService]
})
export class ScreeningModule {}
