import  "rxjs/operators";
import { API_ROOT } from './../Models/Config';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import * as _ from 'lodash';
import { map } from "rxjs/operators";
import { FormControl } from "@angular/forms";

interface Country{
  id: Number;
  CountryName: String;
  population: Number;
}
@Component({
  selector: 'app-mapcountry',
  templateUrl: './mapcountry.component.html',
  styleUrls: ['./mapcountry.component.css']
})

@Injectable()
export class MapcountryComponent implements OnInit {

  ccountryId: FormControl;
  ccountryName:FormControl;
  ccountryPopulation:FormControl;
  public show:boolean = false;
  public buttonName:any = 'Show';
  countries: Observable<Country[]>;
  country:Country;
  title = 'My current Application running on Linux Application';
  value = true;
  str: string;
  strget: string;
  stradd: any;
  output: JSON;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.ccountryId = new FormControl('');
    this.ccountryName = new FormControl('');
    this.ccountryPopulation = new FormControl('');
  }

 toggle() {
  this.show = !this.show;
}

 public getCountries() {
        this.toggle();
        const headers = new HttpHeaders();
        headers.set('Access-Control-Allow-Origin' , '*');
        this.httpClient.get<Country[]>(`${API_ROOT}`, { headers }).pipe(map(res => res)).subscribe(res => {
        this.str = JSON.stringify(res);
        this.countries = JSON.parse(this.str);
        });
      console.log(this.countries);
      return this.countries;
 }

 public getCountry(){
   let id:Number = 1;
   this.httpClient.get<Country[]>(`${API_ROOT}`+id).pipe(map(res=>res)).subscribe(res=>{
     this.strget = JSON.stringify(res);
     this.country = JSON.parse(this.strget);
   });
   console.log(this.country);
   return this.country;
 };

 public onGoToPage2(id:Number){

   alert(id);
 }

 public addCountry(){
   alert("Adding employee "+this.ccountryId.value);
   var stradd: String;
   var data: any = {
    "id"          :this.ccountryId.value,
    "countryName" :this.ccountryName.value,
    "population"  :this.ccountryPopulation.value
   };
  //  let params =  new HttpParams();
  //  params = params.set("id", this.ccountryId.value );
  //  params = params.set("countryName", this.ccountryName.value );
  //  params = params.set("population", this.ccountryPopulation.value );
  //  console.log(params);
  //  console.log(data);
  //  JSON.stringify(data);
  //  this.output=<JSON>data;
   const headers = new HttpHeaders();
   headers.set('Content-Type' , 'application/json');
   this.httpClient.post(`${API_ROOT}`, data, {headers} ).pipe(map(res=>res)).subscribe(res=>{
          this.stradd = JSON.stringify(res);
          this.country = JSON.parse(this.stradd);
          alert("response is "+res);
          console.log(this.country);
   });
   return this.country;
 }
}
