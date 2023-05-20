import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  private database = [];

  save(payment: Partial<Payment>) {
    const newPayment = new Payment(payment);
    this.database.push(newPayment);
    return newPayment;
  }

  findAll() {
    return this.database;
  }

  findOne(id: string) {
    return this.database.filter(x => x.id === id);
  }
}
