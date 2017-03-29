import {Injectable} from '@angular/core';


@Injectable()
export class ValidateService{
validateuser(user) {
    if(user.name == undefined || user.email == undefined || user.password == undefined) {
        return false;
    } else {
        return true;
    }
}
// validateuser(user)
// {
//     if(user.name==''||user.email==''||user.password=='')
//     {
//         return false;
//     }
//     else
//       return true;
// }
// validateemail(email){
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//}
}

