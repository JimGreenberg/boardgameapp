import firebase = require("nativescript-plugin-firebase");
import { Injectable, NgZone } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";

const dialogs = require("ui/dialogs");

@Injectable()
export class FirebaseService {
  color = new BehaviorSubject<string>("");
  fb: any;

  constructor(private ngzone: NgZone) {
    console.log("firebase.init begin");
    setTimeout(() => {
      firebase.init({
        persist: false,
        onMessageReceivedCallback: message => {
          dialogs.alert({
               title: (message.title ? message.title : ""),
               message: JSON.stringify(message),
               okButtonText: "nice"
             });
          console.log(JSON.stringify(message));
          this.setColor(message.data.color);
        },
        onPushTokenReceivedCallback: token => {
         console.log("Firebase push token: \n" + token);
       }
      }).then(instance => {
          console.log("firebase.init done");
        },
        error => {
          console.log("firebase.init error: " + error);
        }
      );
    });
  }

  setColor(color: string): void {
    console.log(color);
    this.ngzone.run(() => this.color.next(color));
  }

  set(location: string, payload: any) {
    firebase.setValue(
      "/test", payload
    )
  }
  update(location: string, payload: any) {
    firebase.update(
      "/test", payload
    )
  }

  get(collection: string = "/test") {
    return firebase.getValue(collection).then(data => {console.log(JSON.stringify(data)); return data;})
  }

  generatePushToken(): Promise<any> {
    return firebase.getCurrentPushToken().then((token: string) => {
      // may be null if not known yet
      console.log("Current push token: " + token);
    });
  }
}
