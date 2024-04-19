import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  findAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOneUserById(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  createUser(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  updateUserById(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  deleteUserById(@Param('id') id: string) {
    return { id };
  }
}
