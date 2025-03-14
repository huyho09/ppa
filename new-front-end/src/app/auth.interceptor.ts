import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('JwtToken')
  const modifiedReq = token
  ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
  :req ;
  return next(modifiedReq);
};
