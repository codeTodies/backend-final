import { CumRap } from 'src/cum-rap/entities/cum-rap.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class RapPhim {
    @PrimaryGeneratedColumn()
    rap_id:number;

    @ManyToOne(()=>CumRap,rap=>rap.id)
    ma_cum_rap:CumRap;

    @Column('json')
    rap_info:{
        ma_rap:number;
        ten_rap:string;
    }
}
