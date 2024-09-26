import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {

    @PrimaryColumn()
    uuid_id: string;

    @BeforeInsert()
    generate() {
        this.uuid_id = crypto.randomUUID()
    }

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

}