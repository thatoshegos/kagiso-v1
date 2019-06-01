import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WPAPIService {
  endpoints = "http://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2";
  menuEndPoints = "http://dev.omangom.com/kagiso/wordpress/wp-json/menus/v1";
  pagesEndPoint = "http://dev.omangom.com/kagiso/wordpress/wp-json/acf/v3";
  postEndpoint = "http://dev.omangom.com/kagiso/wordpress/wp-json/wp/v2";

  constructor(private http: HttpClient) {}
  getCategory(query) {
    return this.http.get(`${this.endpoints}/categories/${query}`);
  }
  getSubcategory(query) {
    return this.http.get(`${this.endpoints}/categories/${query}`);
  }
  getPostFromCategory(query) {
    return this.http.get(`${this.postEndpoint}/posts/${query}`);
  }
  getQuaterlyImagePostFromCategory(query) {
    return this.http.get(`${this.postEndpoint}/posts/${query}`);
  }
  getPost(id) {
    return this.http.get(`${this.pagesEndPoint}/posts/${id}`);
  }
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
    // const headers = new HttpHeaders().set(
    //   "Content-Type",
    //   "text/plain; charset=utf-8"
    // );
    return this.http.get(`${this.pagesEndPoint}/posts/${id}`);
  }
  getCSVData(url) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(url, { responseType: "json", headers });
  }
}
