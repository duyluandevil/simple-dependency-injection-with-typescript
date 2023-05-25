import { container } from "./inversify.config";
import { IManage } from "./manage";
import { Token } from "./token";
import { UserType } from "./user/user";

const manage = container.get<IManage>(Token.Manage);


console.log('********************');
console.log('*1. Create User    *');
console.log('*2. Find User      *');
console.log('*0. Exit           *');
console.log('********************');

let input: number;

process.stdin.on("data", (data: any) => {
        data = data.toString().toUpperCase()
        process.stdout.write(data + "\n")

        input = +data;
        switch (input) {

                case 0: process.exit();

                case 1: {
                        const userInput: UserType = {
                                id: 1,
                                name: 'Luan',
                                position: 'Admin'
                        }

                        const user = manage.createUser(userInput);

                        console.log({
                                user
                        });

                        return;
                }

                case 2: {
                        let id: any;
                        process.stdin.on("data", (data: any) => {
                                id = +data;
                                process.exit();
                        })

                        const user = manage.findUser(id);

                        console.log({
                                user
                        });

                        return;
                }

        }

})

