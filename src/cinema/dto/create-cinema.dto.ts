import { IsString } from "class-validator";
export class CreateCinemaDto {
    @IsString()
    maHeThongRap: string;

    @IsString()
    tenHeThongRap: string;

    @IsString()
    biDanh: string;

    @IsString()
    logo: string;
}
