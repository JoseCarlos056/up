import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
@Entity('files')
class File {
    @PrimaryGeneratedColumn('uuid')
    public readonly id?: string

    @Column()
    public fileName?: string

    @Column()
    public originalName?: string

    @Column()
    public url?: string

    @ManyToOne(() => User, user => user.id)
    user?: User;

    constructor (props: File) {
      Object.assign(this, props)
    }
}
export { File }
