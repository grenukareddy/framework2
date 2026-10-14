import{Page} from '@playwright/test'
import { dataReader } from   "../utils/dataReader";
import { beforeLogin } from "../fixtures/beforeLogin";
import { Loginpage } from '../pages/Loginpage';
import { RandomDataUtil } from '../utils/randomdatagenerator';
import { addUser } from '../pages/adminPage/addUserpage';



export class objectcreation{
 page:Page
//dataReader:dataReader
beforeLogin:beforeLogin
Loginpage:Loginpage
RandomDataUtil:RandomDataUtil
addUser:addUser
constructor(page:Page){
this.page=page
//this.dataReader= new dataReader();
this.beforeLogin= new beforeLogin(page)
this.Loginpage=new Loginpage(page)
this.RandomDataUtil= new RandomDataUtil()
this.addUser= new addUser(page)

}







}