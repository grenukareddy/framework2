import{test,Locator,expect, Page} from '@playwright/test'
import { objectcreation } from './objectcreation';
import { dataReader } from '../utils/dataReader';

test("login to OrangeHRM", async({page})=>
{

 let objects = new objectcreation(page);

 let data = dataReader.readDatafromJSON("D:/Framework_Practice/Framework2/testdata/orangeCreds.JSON")

 let username=data[0].username;
 let password=data[0].password;
 let url=data[0].url;
 let homepageTitle= data[0].homeTitle;


 await objects.beforeLogin.urlLaunch(url)
 await objects.Loginpage.enterusername(username)
 await objects.Loginpage.enterpassword(password)
 await objects.Loginpage.clickLogin(homepageTitle)
 
})

