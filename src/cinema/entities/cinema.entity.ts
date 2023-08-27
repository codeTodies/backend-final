import {Entity, PrimaryGeneratedColumn,Column} from 'typeorm'
@Entity()
export class Cinema {
    @PrimaryGeneratedColumn()
    id:number
   @Column()
    maHeThongRap:string;

    @Column()
    tenHeThongRap:string;

    @Column()
    biDanh:string;

    @Column()
    logo:string;
}
