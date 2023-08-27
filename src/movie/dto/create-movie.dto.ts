import { IsBoolean, IsNumber, IsString} from "class-validator";
export class CreateMovieDto {
    
    @IsString()
    ten_phim:string;

    
    @IsString()
    trailer:string;

    
    @IsString()
    hinh_anh:string;

    
    @IsString()
    mo_ta:string;

    
    @IsString()
    ngay_khoi_chieu:Date;

    
    @IsNumber()
    danh_gia:number;

    
    @IsBoolean()
    hot:boolean;

    
    @IsBoolean()
    dang_chieu:boolean;

    
    @IsBoolean()
    sap_chieu:boolean;
}
