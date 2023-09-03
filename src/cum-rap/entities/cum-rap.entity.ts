import { Entity, PrimaryGeneratedColumn, JoinColumn ,Column, ManyToOne,OneToMany } from 'typeorm';
import { Cinema } from 'src/cinema/entities/cinema.entity';
import { RapPhim } from 'src/rap-phim/entities/rap-phim.entity';

@Entity()
export class CumRap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cinema, cinema => cinema.maHeThongRap)
  @JoinColumn({ name: 'ma_he_thong_rap_id' }) // Đặt tên cột cho khóa ngoại
  ma_he_thong_rap: Cinema;

 @OneToMany(() => RapPhim, rap => rap.ma_cum_rap)
  ma_rap: RapPhim[];

  // Thêm trường cum_rap_info
  @Column('json', { nullable: true })
  cum_rap_info: {
    ma_cum_rap: string;
    ten_cum_rap: string;
    dia_chi: string;
  };
}

