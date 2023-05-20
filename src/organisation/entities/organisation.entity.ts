import { v4 as uuidv4 } from 'uuid';
import {
    Column,
    Entity,
    OneToMany,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    Index,
} from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Organisation {
    @PrimaryColumn({ type: 'varchar', length: 255 })
    id: string;

    // @Column({ type: 'varchar', length: 255, nullable: false })
    // legalCode?: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    organisationApiKey?: string;

    // @OneToMany(
    //     () => Account,
    //     account => account.organisation,
    // )
    // accounts?: Account[];

    @Column({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    constructor(p: Partial<Organisation>) {
        //if (!p?.legalCodeByGoverment) throw new Error('legalCodeByGoverment error');
        //if (!p?.organisationApiKey) throw new Error('organisationApiKey error');
        this.id = uuidv4();
        // this.legalCode = p?.legalCode || '';
        this.organisationApiKey = uuidv4();
        //this.accounts = p?.accounts || null;
        this.createdAt = new Date();
    }
}

