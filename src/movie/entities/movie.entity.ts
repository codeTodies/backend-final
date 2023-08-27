import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    ma_phim:number;

    @Column()
    ten_phim:string;

    @Column()
    trailer:string;

    @Column()
    hinh_anh:string;

    @Column()
    mo_ta:string;

    @ApiProperty({ type: String, example: '2023-06-15', description: 'Ngày khởi chiếu' })
    @Column()
    ngay_khoi_chieu: Date;


    @Column()
    danh_gia:number;

    @Column()
    hot:boolean;

    @Column()
    dang_chieu:boolean;

    @Column()
    sap_chieu:boolean;
}
