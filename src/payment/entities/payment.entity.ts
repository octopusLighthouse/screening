import { v4 as uuidv4 } from 'uuid';

export class Payment {
    id: string;
    accountId: string;
    sender: string;
    receiver: string;
    senderIban: string;
    receiverIban: string;
    amount: number;
    currency: string;
    createdAt: string;

    constructor(p: Partial<Payment>) {
        if (!p?.accountId) throw new Error('accountId error');
        if (!p?.sender) throw new Error('sender error');
        if (!p?.receiver) throw new Error('receiver error');
        if (!p?.senderIban) throw new Error('senderIban error');
        if (!p?.receiverIban) throw new Error('receiverIban error');
        if (!p?.amount) throw new Error('amount error');
        if (!p?.currency) throw new Error('currency error');
        this.id = uuidv4(21);
        this.accountId = p.accountId;
        this.sender = p.sender;
        this.receiver = p.receiver;
        this.senderIban = p.senderIban;
        this.receiverIban = p.receiverIban;
        this.amount = p.amount;
        this.currency = p.currency;
        this.createdAt = new Date().getTime().toString();
    }
}
