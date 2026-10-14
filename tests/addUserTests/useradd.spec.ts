import {test, expect,Locator, Page} from '@playwright/test'
import { objectcreation} from '../objectcreation';
import { dataReader } from '../../utils/dataReader';
import { RandomDataUtil } from '../../utils/randomdatagenerator';




 let generatedusername=RandomDataUtil.getFirstName()

 let data = dataReader.readDatafromJSON("D:/Framework_Practice/Framework2/testdata/orangeCreds.JSON")

 let username=data[0].username;
 let password=data[0].password;
 let url=data[0].url;
 let homepageTitle= data[0].homeTitle;
 let userRole= data[1].role;
 let empname= data[1].empname;
 let status= data[1].status;
 let createuserpassword= data[1].createuserpassword;



test.beforeEach("login to OrangeHRM", async({page})=>
{

let objects = new objectcreation(page);

 await objects.beforeLogin.urlLaunch(url)
 await objects.Loginpage.enterusername(username)
 await objects.Loginpage.enterpassword(password)
 await objects.Loginpage.clickLogin(homepageTitle)
 
})


test("adding user in Admin Page", async({page})=>{
    
    let objects = new objectcreation(page);

await objects.addUser.navigatetoAdminPage()
await objects.addUser.addNewUser()
await objects.addUser.userRoleOptions()
await objects.addUser.selectuserRolefromlist(userRole)
await objects.addUser.enterEmpName(empname)
await objects.addUser.selectstatus(status)
await objects.addUser.selectstatusfromlist(status)
await objects.addUser.addUsername(generatedusername)
await objects.addUser.addpassword(createuserpassword)
await objects.addUser.addUserBysavingData()
await page.waitForTimeout(4000)
await objects.addUser.searchDataByUsername(generatedusername)
await objects.addUser.verifySearchDta(generatedusername)
})


test("Verifying the user in the AdminPage", async({page})=>{

let objects = new objectcreation(page);
await objects.addUser.navigatetoAdminPage()
await objects.addUser.searchDataByUsername(generatedusername)
await objects.addUser.verifySearchDta(generatedusername)




})