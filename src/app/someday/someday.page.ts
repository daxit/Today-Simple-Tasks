import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-someday',
  templateUrl: './someday.page.html',
  styleUrls: ['./someday.page.scss'],
})
export class SomedayPage implements OnInit {
  task: string = "";
  taskList: string[] = [];
  constructor(private storage: Storage) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.storage.get("somedayTasks").then((val) => {
      if (val) {
        this.taskList = val;
      }
    });
  }

  addItem() {
    this.taskList.push(this.task);
    this.storage.set("somedayTasks", this.taskList);
  }

  deleteItem(itemIndex) {
    var item = this.taskList.splice(itemIndex, 1);
    this.storage.set("somedayTasks", this.taskList);
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
}
