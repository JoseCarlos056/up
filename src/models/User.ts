import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import bcrypt from 'bcryptjs'
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

    public emergency: boolean

    @BeforeInsert()
    @BeforeUpdate()
    hashPasswords ?: any = function () {
      this.password = bcrypt.hashSync(this.password, 10)
      this.emergencyPassword = bcrypt.hashSync(this.emergencyPassword, 10)
    }

    // eslint-disable-next-line no-useless-constructor
    constructor (props: Omit<User, 'id'>, id?:string) {
      Object.assign(this, props)
    }
}
export { User }
