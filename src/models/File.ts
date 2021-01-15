import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
@Entity('files')
class File {
    @PrimaryGeneratedColumn('uuid')
    public readonly id?: string

    @Column()
    public name: string

    @Column()
    public directory: string

    @ManyToOne(() => User, user => user.id)
    userId: User;

  // eslint-disable-next-line no-useless-constructor
}
export { File }
