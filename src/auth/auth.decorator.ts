import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const SessionAccountId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const apiKey = request['account-api-key'];
        return apiKey;
    },
);

export const SessionOrganisationId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const apiKey = request['organisation-api-key'];
        return apiKey;
    },
);