import{Page, test, Locator ,expect} from '@playwright/test'


export class Loginpage{
private readonly page:Page
private readonly username:Locator;
private readonly password:Locator
private readonly loginbutton: Locator

constructor(page:Page){
this.page=page
this.username=page.locator("[name='username']")
this.password=page.locator("[name='password']")
this.loginbutton=page.locator("[type='submit']")


}


async enterusername(username:string){
    try{
     await this.username.fill(username)
    }

    catch(error){
     console.log("error occured")
        throw Error
    }
}

async enterpassword(password:string){
    try{
     await this.password.fill(password)
    }

    catch(error){
     console.log("error occured")
        throw Error
    }
}

async clickLogin(title:string){
    try{
     await this.loginbutton.click()
     console.log(await this .page.title())
     await expect ( this.page).toHaveTitle(title)
    }

    catch{
     console.log("error occured")
        throw Error
    }
}



}