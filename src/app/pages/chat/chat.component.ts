import {Component, OnInit} from '@angular/core';
import {SpeechService} from "../../services/speech.service";

export class ChatLog {
	text: string;
	from: string;
	sent: boolean;
}

@Component({
  selector: 'lisa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  inputText: "";
  chatLogs: ChatLog[] = [];

  constructor(private _speechService: SpeechService) {
  }

  ngOnInit() {
  }

  send(event) {
    this.chatLogs.push({
    	text: this.inputText,
	from: "User",
	sent: true
    });
    let inputText = this.inputText;
    this._speechService.sendVoiceCommand(inputText).subscribe(
   	 data => {
		 if (data.response) {
			this.chatLogs.push({
				text: data.response,
				from: "LISA",
				sent: false
			});
		}
		else {
			this.chatLogs.push({
				text: "Sorry I have no response to your query.",
				from: "LISA",
				sent: false
			});
		}
		console.log(data);
	},
	console.log
    );
    this.inputText = "";
  }

}
