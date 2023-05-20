import { IsNumber, IsString } from "class-validator";

export class CreateScreeningDto {
    @IsString()
    sender: string;

    @IsString()
    receiver: string;

    @IsString()
    senderIban: string;

    @IsString()
    receiverIban: string;

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;
}
