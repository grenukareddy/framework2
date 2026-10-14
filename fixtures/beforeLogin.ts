import {Locator,Page} from '@playwright/test'


export class beforeLogin{
    private readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

async urlLaunch(url:string){

     await this.page.goto(url)
}



}