import { Controller, Req, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
            },
            required: ['username', 'password'],
        },
    })
    @ApiResponse({ status: 200, description: 'Login successful' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async login(@Req() req) {
        console.log('User in session: ', req.user);
        return this.authService.login(req.user);
    }

}

