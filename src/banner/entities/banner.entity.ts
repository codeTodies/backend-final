import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Movies } from 'src/movie/entities/movie.entity';

@Entity()
export class Banner {
  @PrimaryGeneratedColumn()
  ma_banner: number;

  @ManyToOne(() => Movies, movies => movies.ma_phim)
  @JoinColumn({ name: 'ma_phim', referencedColumnName: 'ma_phim' })
  ma_phim: Movies;

  @Column()
  hinh_anh: string;
}