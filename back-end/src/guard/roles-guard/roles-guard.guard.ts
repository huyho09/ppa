import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuardGuard implements CanActivate {

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log("user in Guard received: ", user)
    const userId = request.params.id;
    console.log("userId is : ", userId)

    if (user.role.privilege === 'user')
    {
      if (user.userId === userId){
        return true
      }
      else{
        return false;
      }
    }
    else{
      return true
    }
  }
}
