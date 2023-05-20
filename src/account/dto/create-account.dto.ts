import { IsOptional, IsString } from "class-validator";

export class CreateAccountDto {
    @IsString()
    organisationId: string;

    @IsString()
    @IsOptional()
    externalId: string;

    @IsString()
    @IsOptional()
    name: string;
}
