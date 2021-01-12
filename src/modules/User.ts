import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    email: string;

    @Column("text")
    password: string;

    @Column("text")
    emergency_password: string;
}