import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Candidat } from '../Candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatServiceService {

  private ip_adress:string='http://127.0.0.1';

  private port:string='8080';

  private baseUrl:string=this.ip_adress+this.port+'/Candidat';

  private headers = new Headers({'Content-Type':'application/json'});
  
  private option =  new RequestOptions({headers:this.headers});

  private candidat:Candidat;

  constructor(private _http:Http) {}

  getCvs(){
     return this._http.get(this.baseUrl+'/list',this.option).map((respense:Response)=>respense.json())
     .catch(this.errorHanlder);

  }

  getCv(id:Number){
    return this._http.get(this.baseUrl+'/list/'+id,this.option).map((respense:Response)=>respense.json())
    .catch(this.errorHanlder);

  }

  DeleteCv(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.option).map((respense:Response)=>respense.json())
    .catch(this.errorHanlder);

  }

  CreateCv(candidat:Candidat){
    return this._http.post(this.baseUrl+'/save',JSON.stringify(candidat),this.option).map((respense:Response)=>respense.json())
    .catch(this.errorHanlder);

  }

  UpdateCv(candidat:Candidat){
    return this._http.put(this.baseUrl+'/update',JSON.stringify(candidat),this.option).map((respense:Response)=>respense.json())
    .catch(this.errorHanlder);

  }

  errorHanlder(error:Response){
      return Observable.throw(error||"SERVER ERROR")
  }

  setter(candidat:Candidat){
      this.candidat=candidat;
  }

  getter(){
    return this.candidat;
  }
}
