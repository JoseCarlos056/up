import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
@Entity('files')
class File {
    @PrimaryGeneratedColumn('uuid')
    public readonly id?: string

    @Column()
    public name?: string

    @Column()
    public directory?: string

    @ManyToOne(() => User, user => user.id)
    userId?: User;

    constructor (props: File) {
      Object.assign(this, props)
    }
}
export { File }
