import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Entity({
    name: "Appointment"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;
    @Column()
    userid: number;
    @ManyToOne(() => Users, user => user.appointments)
    user: Users;

    @Column({
        type: 'enum',
        enum: ['active', 'cancelled'],
        default: 'active'
    })
    status: 'active' | 'cancelled';
}