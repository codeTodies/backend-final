import { CumRap } from "src/cum-rap/entities/cum-rap.entity";

export class CreateRapInfoDto{
    ma_rap: number;
    ten_rap: string;
}

export class CreateRapPhimDto {
    ma_cum_rap:CumRap
    rap_info:CreateRapInfoDto
}
