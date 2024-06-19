import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn , OneToMany} from 'typeorm';
import {Credential} from './Credential'
import { Appointment } from './Appointment';


@Entity({
    name:"Users"
})
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}
