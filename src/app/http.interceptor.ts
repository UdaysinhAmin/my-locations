import {Injectable} from "@angular/core";
import {
  ConnectionBackend,RequestOptions,Request,RequestOptionsArgs,Response,Http,Headers,
  XHRBackend
} from "@angular/http";
import {Observable} from "rxjs/Rx";
// import {environment} from "./environments/environment";
 //import {LocalStorageService} from "./adminapp/localstorage.service";
import * as _ from "lodash";

@Injectable()

export default class InterceptedHttp extends Http{
  constructor(backend:ConnectionBackend,defaultOptions:RequestOptions){
    super(backend,defaultOptions);
  }

  request(url:string | Request,options?:RequestOptionsArgs):Observable<Response>{
    
    url=this.updateUrl(url);
    return super.request(url,this.getRequestOptionArgs(options))
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  private updateUrl(req:any){
    return req;
    // return environment.origin+req;
  }

  private getRequestOptionArgs(options?:RequestOptionsArgs):RequestOptionsArgs{
    if(options==null){
      options=new RequestOptions();
    }
    if(options.headers==null){
      options.headers=new Headers();
    }
   // options.headers.append('Authorization',`Bearer ${this.localStorage.get('accessToken')}`);
    options.headers.append('Content-Type','application/json');
    return options;
  }

  private handleResponse(res:Response){
    
    let body;
    if(!res.json){
      body = res;
    } else {
      return res.json();
    }
    // if(body){
    //   if(body.status==='success'){
    //     return body.data;
    //   }else{
    //     return Observable.throw(body.error);
    //   }
    // }else{
    //   return Observable.throw({error:{message:'Some unwnown error occured'}});
    // }
  }

  private handleError(error:Response | any){
    let err:any;
    if(error instanceof Response){
      if(error.status==401){
        console.log('un authorized')
      }
      err=error.json();
    }else{
      err=error;
    }
    return Observable.throw(err);
  }
}

export function httpFactory(xhrBackend:XHRBackend,requestOptions:RequestOptions):Http{
  return new InterceptedHttp(xhrBackend,requestOptions);
}
