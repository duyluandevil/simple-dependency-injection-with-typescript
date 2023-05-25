import { inject, injectable } from 'inversify';
import { Token } from '../token';
import { IUser, User, UserType } from '../user/user';

export interface IManage {
        list(): void;
        createUser(userInput: UserType): User;
        findUser(id: number): User;
        showInfo(user: User): void;
}

@injectable()
export class Manage implements IManage {

        private _listUsers: Array<User> = [];

        constructor(
                @inject(Token.User) private readonly _user: IUser
        ) { }

        isExistUser(id: number): boolean {
                let isExist = false;
                const user = this._listUsers.find(user => user.id === id);

                isExist = user === undefined ? false : true;
                return isExist;
        }

        createUser(userInput: UserType): User {
                const {
                        id,
                        name,
                        position
                } = userInput;

                const isExist = this.isExistUser(id);
                if (isExist) throw new Error('user is exist');

                const user = this._user.create(
                        id,
                        name,
                        position
                )
                this._listUsers.push(user);

                return user;
        }

        list() {
                console.log({
                        users: this._listUsers
                })
        }

        findUser(id: number): User {
                const isExist = this.isExistUser(id);
                if (!isExist) throw new Error('user is not exist');

                const user = this._listUsers.find(user => user.id === id);
                return user;
        }

        showInfo(user: User): void {
                user.show();
        }
}