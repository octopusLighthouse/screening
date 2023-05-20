import { Injectable } from '@nestjs/common';
import { Payment } from 'src/payment/entities/payment.entity';
import { PaymentService } from 'src/payment/payment.service';
import { OPERAND_ENUM, RULE_TYPE_ENUM } from 'src/rule/dto/create-rule.dto';
import { Rule } from 'src/rule/entities/rule.entity';
import { RuleService } from 'src/rule/rule.service';
import { CreateScreeningDto } from './dto/create-screening.dto';

@Injectable()
export class ScreeningService {
  constructor(
    private readonly ruleService: RuleService,
    private readonly paymentService: PaymentService,
  ) {}

  async paymentScreening(createScreeningDto: CreateScreeningDto, accountId: string) {
    await this.paymentService.save({ ...createScreeningDto, accountId });
    const rules: Rule[] = this.ruleService.findAll(accountId);
    const status = this.checkPaymentParamters(createScreeningDto, rules.filter(r => r.type === RULE_TYPE_ENUM.parameter_check));
    return status;
  }

  checkPaymentParamters(payment: Partial<Payment>, rules: Rule[]) {
    const actionsWasActivated = [];
    
    for (const rule of rules) {
      const passedConditions = [];
      const conditionsWasPassed = [];
      for (const condition of rule.conditions) {        
        const valueShouldBe = condition.value;
        if (condition.operand === OPERAND_ENUM.equal) {
          conditionsWasPassed.push({...condition});
          if (payment[condition.parameter] === valueShouldBe) {
            
            passedConditions.push(true);
            for (const action of rule.actions) {

            }
          } else {
            passedConditions.push(false);
          }
        }

        if (condition.operand === OPERAND_ENUM.exist) {
          
          if (payment[condition.parameter].toString().includes(valueShouldBe)) {
            conditionsWasPassed.push({...condition});  
            passedConditions.push(true);
            for (const action of rule.actions) {

            }
          }else {
            passedConditions.push(false);
          }
        }

        if (condition.operand === OPERAND_ENUM.more) {
          conditionsWasPassed.push({...condition});
          if (Number.parseInt(payment[condition.parameter]) > Number.parseInt(valueShouldBe)) {
            
            passedConditions.push(true);
            for (const action of rule.actions) {

            }
          }else {
            passedConditions.push(false);
          }
        }          
      }

      if (passedConditions.every((value) => value === true)) {
        actionsWasActivated.push({
          rule: { statuses: passedConditions, conditionsWasPassed },
        });
      }
    }
    return { 
      actionsWasActivated,
    }
  }
}
