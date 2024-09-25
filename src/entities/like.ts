import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'likes' })
export class Like {

    @PrimaryColumn()
    cat_id: string;

    @Column({ type: 'timestamp' })
    created_at: Date;


}