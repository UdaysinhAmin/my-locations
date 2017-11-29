import {Http, Headers, RequestOptionsArgs, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import {Observable} from "rxjs/Rx";
import * as _ from "lodash";

declare var $: any;

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  static httpCallCount = 0;
  private urlRoot:String;

  constructor(private http: Http) {
    this.urlRoot = 'http://localhost:57790/api';
  }

  /**
   * @method callAPI
   * @description function to call the api
   * @param options
   * @returns {Promise<T>}
   */

  callAPI(options: any) {
    return Observable.create((subscriber) => {
      
      this.http
        .request(this.urlRoot + options.url, <RequestOptionsArgs>{
          body: options.body,
          method :(options.method || 'get'),
          // header: this.headers,
          search:"UID=" + options.id
        })
        .subscribe((res:any) => {
          if (options.successMessage) {
              //code for success
          }
          console.info('Got success in calling the API::' + options.url);
        
          subscriber.next(res);
        },err => {
          if (options.showErrorMessage) {
            options.errorMessage = _.get(err, 'error.message') || options.errorMessage;
          } else {
            options.errorMessage = null;
          }
          if (options.errorMessage) {
            // code for error message 
          }
          console.warn('Error in calling the API::' + options.url);
          console.warn('Error::', err);
           //code for error message
          subscriber.error(err);
        });
    });
  }
}
