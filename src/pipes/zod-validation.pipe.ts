import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodObject } from "zod";


export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodObject<any>) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            this.schema.parse(value);
        } catch (error) {
            throw new BadRequestException('Validación Fallida');
        }

        return value;
    }
    
}