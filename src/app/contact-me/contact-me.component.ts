import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('myForm')myForm: ElementRef | undefined;
  @ViewChild('nameField')nameField: ElementRef | undefined;
  @ViewChild('messageField')messageField: ElementRef | undefined;
  @ViewChild('emailField')emailField: ElementRef | undefined;
  @ViewChild('sendButton')sendButton: ElementRef | undefined;

  display = true

  async sendMail() {
    //https://alexander-much.developerakademie.net/send_mail/send_mail.php
    
    this.display = false

    
    setTimeout(() => {
      this.display = true
    }, 5000);

    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;


    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;

    // Animation anzeigen 

    let fd = new FormData();
    fd.append('name', nameField.value)
    fd.append('message', messageField.value)
    fd.append('email' , emailField.value)

    //senden 
    await fetch('https://alexander-much.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'post',
      body: fd
    }
    );

    //text anzeigen: Nachricht gesendet.


    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;

    // clear inputs
    console.log("namfield", nameField.value)

    nameField.value =""
    messageField.value =""
    emailField.value =""
    
  }

}
