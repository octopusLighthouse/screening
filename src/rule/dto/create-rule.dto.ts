import {
    IsString,
    MaxLength,
    MinLength,
    IsEmail,
    IsPhoneNumber,
    IsOptional,
    IsIn,
    IsArray,
    ValidateNested,
    IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum OPERAND_ENUM {
    equal = '=',
    exist = '~',
    lessEqual = '<=',
    more = '>',
}

export enum ACTION_NAME_ENUM {
    hold = 'hold',
    reject = 'reject',
    pass = 'pass',
    hold_request_additional_info = 'hold_request_additional_info',
}

export enum RULE_TYPE_ENUM {
    parameter_check = 'parameter_check',
    amount_per_period_check = 'amount_per_period_check',
    transactions_count_per_period_check = 'transactions_count_per_period_check',
}

export class Action {
    @IsEnum(ACTION_NAME_ENUM)
    name: ACTION_NAME_ENUM;
}

export class Condition {
    @IsString()
    @MaxLength(100)
    @MinLength(2)
    parameter: string;

    @IsString()
    @IsEnum(OPERAND_ENUM)
    operand: OPERAND_ENUM;

    @IsString()
    @MaxLength(100)
    @MinLength(2)
    value: string;
}

export class CreateRuleDto {
    @IsString()
    @MaxLength(254)
    @MinLength(5)
    name: string;

    @IsEnum(RULE_TYPE_ENUM)
    type: RULE_TYPE_ENUM;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Condition)
    conditions: Condition[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Action)
    @ValidateNested()
    actions: Action[];
}
