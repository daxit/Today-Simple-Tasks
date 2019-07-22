import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {
  task: string = "";
  taskList: string[] = [];
  constructor(private storage: Storage) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.storage.get("todayTasks").then((val) => {
      if (val) {
        this.taskList = val;
      }
    });
  }

  addItem() {
    this.taskList.push(this.task);
    this.storage.set("todayTasks", this.taskList);
  }

  deleteItem(itemIndex) {
    var item = this.taskList.splice(itemIndex, 1);
    this.storage.set("todayTasks", this.taskList);
    return item;
  }

  moveToWeek(itemIndex) {
    this.storage.get("weekTasks").then((weekTasks) => {
      if (weekTasks) {
        weekTasks.push(this.deleteItem(itemIndex));
      } else {
        weekTasks = [this.deleteItem(itemIndex)];
      }
      this.storage.set("weekTasks", weekTasks);
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
