import { MigrationInterface, QueryRunner, getRepository } from "typeorm"
import { User } from "../entity/User";

export class CreateUser1596719727377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let user = new User();
        user.username = "andreas";
        user.password = "plado";
        user.hashPassword();
        user.role = "ADMIN";
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
