import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [
            {
                message: 'Get all users',
                name: 'Nguyen Huu Thuat'
            }
        ]
    }

    @Get('posts')
    getUsersPosts() {
        return [
            {
                message: 'Get all users posts',
                name: 'Nguyen Huu Thuat',
                post: [{
                    id: 1,
                    title: 'Post 1',
                    describe: 'This is post 1'
                }]
            }
        ]
    }
}