import { Component, Input,  Output,OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "child-comp",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent {
  @Input() ShowMe: boolean;
  @Output() myValue = new EventEmitter<boolean>();
  constructor() {
  }

  callMe(){
    this.myValue.emit(!this.ShowMe);
  }
}
