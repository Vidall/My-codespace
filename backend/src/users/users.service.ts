import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { } from '../../../core/rules/SumFunction';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(data: { name: string; email: string }) {
        return this.prisma.user.create({data})
    }

    sum(a: number, b: number): number {

    }
}
