import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('users')
    create(@Body() data: { name: string; email: string }) {
        return this.userService.create(data)
    }
}
