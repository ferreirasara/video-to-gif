import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gif {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  userId: string;

  @Column()
  createdAt: Date;

  @Column()
  size: number
}