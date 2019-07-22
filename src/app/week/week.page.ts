import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-week',
  templateUrl: './week.page.html',
  styleUrls: ['./week.page.scss'],
})
export class WeekPage implements OnInit {
  task: string = "";
  taskList: string[] = [];
  constructor(private storage: Storage) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.storage.get("weekTasks").then((val) => {
      if (val) {
        this.taskList = val;
      }
    });
  }

  addItem() {
    this.taskList.push(this.task);
    this.storage.set("weekTasks", this.taskList);
  }

  deleteItem(itemIndex) {
    var item = this.taskList.splice(itemIndex, 1);
    this.storage.set("weekTasks", this.taskList);
    return item;
  }

  moveToToday(itemIndex) {
    this.storage.get("todayTasks").then((todayTasks) => {
      if (todayTasks) {
        todayTasks.push(this.deleteItem(itemIndex));
      } else {
        todayTasks = [this.deleteItem(itemIndex)];
      }
      this.storage.set("todayTasks", todayTasks);
    });
  }

  moveToSomeday(itemIndex) {
    this.storage.get("somedayTasks").then((somedayTasks) => {
      if (somedayTasks) {
        somedayTasks.push(this.deleteItem(itemIndex));
      } else {
        somedayTasks = [this.deleteItem(itemIndex)];
      }
      this.storage.set("somedayTasks", somedayTasks);
    });
  }
}
