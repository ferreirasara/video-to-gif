import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gif {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  destination: string;

  @Column()
  userId: string;

  @Column()
  createdAt: Date;

  @Column()
  size: number

  @Column({ nullable: true })
  url: string
}