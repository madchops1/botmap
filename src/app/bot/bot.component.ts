import { Component, OnInit } from '@angular/core';
//import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
//import {ErrorStateMatcher} from '@angular/material/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {

  botForm: FormGroup;
  cancelForm: FormGroup;
  inProgress: any = false;
  success: any = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.botForm = this.formBuilder.group({
      url: ['', Validators.required],
      robots: ['']
    });

    this.cancelForm = this.formBuilder.group({

    });
    
    // Create IE + others compatible event handler
    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    /*
    // Listen to message from child window
    eventer(messageEvent, function (e) {
      //console.log('parent received message!:  ',e.data);
      //console.log('parent received message!', $scope.currentUrl);
      if (e.data.indexOf('sitemapgenerator') !== -1) {

        // the script is there!
        $scope.script[$scope.currentUrl] = true;

        // get the links
        $scope.getLinks(e.data);


        //console.log('Links:', $scope.links);
        //$scope.$apply({});

      }


      // error no script
      else {
        // can't error here as other postMessage calls may execute first
        //console.log('ERROR 0002','you must include a script on your page');
      }
    }, false);
    */



  }

  onSubmit() {
    if(this.botForm.invalid) {
      return;
    }
    this.inProgress = true;
    //this.success = true;
  }

  onCancel() {
    this.inProgress = false;
  }

}




/* Don't delete this it is the tracker script stuff...
<script type="text/javascript">
  window.setTimeout(function () {
    parent.postMessage("sitemapgeneratorbody:: "+JSON.stringify(window.document.body.innerHTML),"*");
  }, 3000);
  window.setTimeout(function () {
    parent.postMessage("sitemapgeneratorhead:: "+JSON.stringify(window.document.head.innerHTML),"*");
  }, 3000);
  //var _0xaea9=["sitemapgenerator:: ","innerHTML","body","document","stringify","*","postMessage","setTimeout"];window[_0xaea9[7]](function(){parent[_0xaea9[6]](_0xaea9[0]+JSON[_0xaea9[4]](window[_0xaea9[3]][_0xaea9[2]][_0xaea9[1]]),_0xaea9[5])},3000);
  //var _0xd5e5=["\x73\x69\x74\x65\x6D\x61\x70\x67\x65\x6E\x65\x72\x61\x74\x6F\x72\x3A\x3A\x20","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x62\x6F\x64\x79","\x64\x6F\x63\x75\x6D\x65\x6E\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x2A","\x70\x6F\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74"];window[_0xd5e5[7]](function(){parent[_0xd5e5[6]](_0xd5e5[0]+JSON[_0xd5e5[4]](window[_0xd5e5[3]][_0xd5e5[2]][_0xd5e5[1]]),_0xd5e5[5])},3000);
</script>
*/