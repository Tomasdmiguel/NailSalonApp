import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import { Users } from './Users'; 

@Entity({
    name: "Credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => Users, user => user.credentials) 
    user: Users;
}