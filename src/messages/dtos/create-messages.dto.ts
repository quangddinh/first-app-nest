import { IsString } from "class-validator";
// validate request/response, apply cái type vào controller
export class CreateMessageDTO {
    @IsString()
    content: string;
}
