import { RULE_TYPE_ENUM, Condition, Action } from "../dto/create-rule.dto";
import { v4 as uuidv4 } from 'uuid';
export class Rule {
    id: string;
    accountId: string;
    name: string;
    type: RULE_TYPE_ENUM;
    conditions: Condition[];
    actions: Action[];
    createdAt: Date;

    constructor(rule: Partial<Rule>) {
        this.id = uuidv4(21);
        this.accountId = rule.accountId;
        this.name = rule.name;
        this.type = rule.type;
        this.conditions = rule.conditions;
        this.actions = rule.actions;
        this.createdAt = new Date();
    }
}

