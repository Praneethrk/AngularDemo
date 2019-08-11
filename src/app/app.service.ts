import { Injectable } from '@angular/core';
import { DataFeederService } from './shared/datafeeder.service';
import { Faculty } from './shared/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  addFaculty(faculty: Faculty) {
    this.f_list.push(faculty)
 
  }
  f_list: Faculty[] = []

  constructor(private dfs: DataFeederService) {
    this.f_list = dfs.getFaculties();
  }

  getSearchResult(str): Faculty[] {
    let search_list: Faculty[] = [];
    for (let i = 0; i < this.f_list.length; i++) {
      let f = this.f_list[i];
      if (f.ename.includes(str)) {
        search_list.push(f);
      }
    }
    console.log(search_list)
    return search_list;

  }

  getDeptCount() {
    let data = []
    data.push(["Dname", "Count"])
    let dict = {};
    this.f_list.forEach((faculty) => {
      if (faculty.dname in dict) {
        dict[faculty.dname] += 1;
      }
      else {
        dict[faculty.dname] = 1;
      }
    });
    for(let [key,value]  of Object.entries(dict)) {
      data.push([key, value]);
    }

    return data;
  }

  getFacultyByDname(dname: string) {
    const f = this.f_list.filter((faculty) =>
      {
        if(faculty.dname === dname){
          return true;
        }
        else{
          return false;
        }
      }); 
      return f;
  }

}