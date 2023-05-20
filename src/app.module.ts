import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';
import { ScreeningModule } from './screening/screening.module';
import { RuleModule } from './rule/rule.module';
import { OrganisationModule } from './organisation/organisation.module';
import { SeedModule } from './seed/seed.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organisation } from './organisation/entities/organisation.entity';
import { Account } from './account/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [Organisation, Account],
        synchronize: true,
      }
    ),
    AccountModule, 
    PaymentModule, 
    ScreeningModule, 
    RuleModule, 
    OrganisationModule, 
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}