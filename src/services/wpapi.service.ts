import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WPAPIService {
  endpoints = "http://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2";
  menuEndPoints = "http://dev.omangom.com/kagiso/wordpress/wp-json/menus/v1";
  pagesEndPoint = "http://dev.omangom.com/kagiso/wordpress/wp-json/acf/v3";

  constructor(private http: HttpClient) {}
  pages(query) {
    return this.http.get(`${this.endpoints}/pages/${query}`);
  }
  getFirstMenu() {
    return this.http.get(`${this.menuEndPoints}/menus/header-menu-first`);
  }
  getSecondMenu() {
    return this.http.get(`${this.menuEndPoints}/menus/header-menu-second`);
  }
  getPages(id) {
    return this.http.get(`${this.pagesEndPoint}/posts/${id}`);
  }
}
