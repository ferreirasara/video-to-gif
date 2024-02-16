import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  contentLength: number;

  @Column()
  contentType: string;

  @Column()
  url: string;
}