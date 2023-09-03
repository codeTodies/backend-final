import { Cinema } from "src/cinema/entities/cinema.entity";

export class CreateCumRapInfoDto {
  ma_cum_rap: string;
  ten_cum_rap: string;
  dia_chi: string;
}

export class CreateCumRapDto {
  ma_he_thong_rap: Cinema;
  cum_rap_info: CreateCumRapInfoDto;
}
