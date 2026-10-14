import {Locator,Page} from '@playwright/test'
import fs from 'fs'
import {parse} from 'csv-parse'


export class dataReader{


    static readDatafromJSON(filepath:string){
    let data= JSON.parse(fs.readFileSync(filepath,'utf-8'))
    return data
    }

   static readDatafromCSV(filepath:string){
    let data= parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})
    return data
    }



}