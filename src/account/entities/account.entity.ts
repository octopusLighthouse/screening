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
import { Organisation } from 'src/organisation/entities/organisation.entity';

@Entity()
export class Account {
    @PrimaryColumn({ type: 'varchar', length: 255 })
    id: string;

    @Column({ type: 'varchar', length: 21 })
    organisationId?: string;

    // @ManyToOne(() => Organisation, organisation => organisation.accounts, {
    //     onDelete: 'SET NULL',
    // })
    // //@JoinColumn({ name: 'employeeId' })
    // organisation: Organisation;

    @Column({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    constructor(p: Partial<Account>) {
        //if (!p?.legalCodeByGoverment) throw new Error('legalCodeByGoverment error');
        //if (!p?.organisationApiKey) throw new Error('organisationApiKey error');
        this.id = uuidv4();
        this.organisationId = p?.organisationId;
        this.createdAt = new Date();
    }
}
