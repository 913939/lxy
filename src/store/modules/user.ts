import {observable,action} from "mobx";
interface LoginForm{
    user_name:string,
    user_pwd:string
}
class User{
@observable isLogin: boolean=false;
@action async login(form:LoginForm):Promise<object>{
    if(form.user_name==='chenmanjie'&&form.user_pwd==='Chenmanjie123!'){
        this.isLogin=true;
        return {code:1}
    }
    else{
        this.isLogin=false;
        return {code:0}
    }
}
}
export default User;