import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
private readonly users = [
    {
        userId: 1,
        username: 'jhon',
        password: 'admin',
    },
    {
        userId: 2,
        username: 'edwin',
        password: 'admin',
    },
];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
