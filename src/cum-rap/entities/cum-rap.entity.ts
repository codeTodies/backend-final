import { Entity, PrimaryGeneratedColumn, JoinColumn ,Column, ManyToOne,OneToMany } from 'typeorm';
import { Cinema } from 'src/cinema/entities/cinema.entity';
import { RapPhim } from 'src/rap-phim/entities/rap-phim.entity';

@Entity()
export class CumRap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cinema, cinema => cinema.maHeThongRap)
  ma_he_thong_rap: Cinema;

  @OneToMany(()=>RapPhim,rap=>rap.rap_id)
  @JoinColumn({name:'ma_rap'})
  ma_rap:RapPhim
  // Thêm trường cum_rap_info
  @Column('json', { nullable: true })
  cum_rap_info: {
    ma_cum_rap: string;
    ten_cum_rap: string;
    dia_chi: string;
  };
}

