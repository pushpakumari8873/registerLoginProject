import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { of } from 'rxjs';

export const errorhandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(

    map((res) => {
      return res;
    }),

    catchError((err) => {
      let message = "An error occurred";
      if (err.status === 401) {
        message = "Unauthorized";
      } else if (err.status === 404) {
        message = "Not Found";
      } else if (err.status === 500) {
        message = "Internal Server Error";
      }
      return of(err);
    })
  );
};
