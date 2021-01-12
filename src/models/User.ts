import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string

    @Column()
    public name: string

    @Column()
    public email: string

    @Column()
    public password: string

    @Column()
    public emergencyPassword: string

    // eslint-disable-next-line no-useless-constructor
    constructor (props: Omit<User, 'id'>, id?:string) {
      Object.assign(this, props)
    }
}
export { User }
