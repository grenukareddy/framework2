import {test, expect,Locator, Page} from '@playwright/test'

export class addUser{

    private readonly page:Page
    private readonly adminpage:Locator
    private readonly addemp:Locator
    private readonly adminpageheading1:Locator
    private readonly adminpageheading2:Locator
    private readonly adduserpageheading:Locator
    private readonly userrolechoices:Locator
    private readonly listofitems:Locator
    private readonly selectfromlistitems:Locator
    private readonly getinputrole:Locator
    private readonly empName:Locator
    private readonly statuschoices:Locator
    private readonly username:Locator
    private readonly password:Locator
    private readonly confirmpassword:Locator
    private readonly save:Locator
    private readonly searchBox:Locator
    private readonly searchbutton:Locator
    private readonly tablerow:Locator
    private readonly usernamecell:Locator

    constructor(page:Page){

        this.page=page
        this.adminpage=page.getByText("Admin").nth(0)
        this.addemp=page.getByText("Add")
        this.adminpageheading1=this.page.locator("h6.oxd-text").nth(0)
        this.adminpageheading2=this.page.locator("h6.oxd-text").nth(1)
        this.adduserpageheading=this.page.getByText("Add User")
        this.userrolechoices=page.locator("div[class='oxd-select-text-input' i]").nth(0)
        this.listofitems=page.locator("div[role='listbox']")
        this.selectfromlistitems=page.locator("[role='option'] span")
        this.getinputrole=page.locator("div[class='oxd-select-text-input']").nth(0)
        //page.locator("[role='option'] span").getByText('Admin',{exact: true}): getting 3 options
        //page.locator("[role='option'] span").getByText("ESS")
        this.empName=page.getByPlaceholder("Type for hints...")
        this.statuschoices=page.locator("div[class='oxd-select-text-input' i]").nth(1)
        this.username=page.getByRole('textbox').nth(2)
        this.password=page.locator("[type='password']").nth(0)
        this.confirmpassword=page.locator("[type='password']").nth(1)
        this.save=page.getByRole('button', { name: /Save/i })
        this.searchBox=page.locator("div[class='oxd-grid-item oxd-grid-item--gutters'] div input").nth(0)
        this.searchbutton=page.getByRole('button',{name:/Search/i})
        this.tablerow=this.page.locator("div[class*='oxd-table-body'][role='rowgroup']")
        this.usernamecell=this.page.locator("div[class*='oxd-padding-cell'][role='cell']").nth(1)
    }


    async navigatetoAdminPage(){
        try{
         await this.adminpage.click();
         await expect(this.adminpageheading1).toBeVisible()
         await expect(this.adminpageheading2).toBeVisible()
        }
        catch(error){
         console.log("error occured while navigating to the Admin Page")
         throw Error
        }
    }

    async addNewUser(){
        try{
         await this.addemp.click();
         await expect(this.adduserpageheading).toBeVisible()
        }
        catch(error){
         console.log("error occured while clicking on Add user in the Admin Page")
         throw Error
        }
        }

    async userRoleOptions(){
        try{
         await this.userrolechoices.click();
         //await expect(this.userRoleList).toBeVisible()
         expect(await this.listofitems.isVisible).toBeTruthy()
        }
        catch(error){
         console.log("error occured whileadding User role in the adding Users Page")
         throw Error
        }
        }
    
    async selectuserRolefromlist(item:string){
        try{
            await this.selectfromlistitems.getByText(item).click()
           expect (await this.getinputrole.innerText()).toBe(item)
        }
        catch(error){
         console.log("error occured while selecting one item  from the dropdown")
         throw Error
        }
        }


    async enterEmpName(empname:string){
        try{
            await this.empName.pressSequentially(empname)
            await this.page.getByText(empname).click()
            expect (await this.empName.inputValue()).toBe(empname)
        }
        catch(error){
         console.log("error occured while adding employeename in the adding Users Page")
         throw Error
        }
        }
    async selectstatus(status:string){
        try{
            await this.statuschoices.click()
            expect(await this.listofitems.isVisible).toBeTruthy()
            
        }
        catch(error){
         console.log("error occured while adding status in the adding Users Page")
         throw Error
        }
        }



    async selectstatusfromlist(item:string){
        try{
            await this.selectfromlistitems.getByText(item).click()
            expect (await this.statuschoices.innerText()).toBe(item)
        }
        catch(error){
         console.log("error occured while selecting one item  from the dropdown")
         throw Error
        }
        }

    async addUsername(username:string){
        try{
           await this.username.fill(username)
           expect( await this.username.inputValue()).toBe(username)  
        }
        catch(error){
         console.log("error occured while adding Username in the adding Users Page")
         throw Error
        }
        }
     
    async addpassword(userpassword:string){
        try{
        
           await this.password.fill(userpassword)
           await this.confirmpassword.fill(userpassword)
           
        }
        catch(error){
         console.log("error occured while adding password in the adding Users Page")
         throw Error
        }
        }

    async addUserBysavingData(){
        try{
        
           await this.save.click()
           await expect(this.adminpageheading1).toBeVisible()
           await expect(this.adminpageheading2).toBeVisible()
           await this.page.waitForTimeout(6000)
            
        }
        catch(error){
         console.log("error occured while adding password in the adding Users Page")
         throw Error
        }
        }
    async searchDataByUsername(username:string){
        try{
        
           await this.searchBox.fill(username)
           await this.searchbutton.click()
           await this.page.waitForTimeout(6000)
           
        }
        catch(error){
         console.log("error occured while searching the username from the searchbox")
         throw Error
        }
        }
     async verifySearchDta(username:string){
        try{
             let bool= await this.page.getByText('No Records Found').isVisible()
          if(bool){
           console.log(`we dont have data with the specified username : ${username}`)
          }
           else{
            
            await expect(await this.tablerow.isVisible()).toBeTruthy()
            let usernamevalue=await this.usernamecell.innerText()
             await expect (usernamevalue).toBe(username)
           }}
        catch(error){
         console.log("error occured while verifying the data from the table")
         throw Error
        }
        }
    }

