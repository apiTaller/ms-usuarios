import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  nombre!: string;

  @Column({ length: 150, unique: true })
  email!: string;

  @Column({ nullable: true, length: 100 })
  rol?: string;
}