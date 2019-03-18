import { Component, OnInit, ViewChild } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidat } from '../candidat';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted = false;
  closeResult: string;
  
  competences = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: '.NET'},
    {id: 3, name: 'ANGULAR'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'KOTLIN'}
  ];

  
  candidats =[new Candidat(1,"yassine","valide",1,"JAVA, ANGULAR"),
    new Candidat(2,"hamid","en cours",2,".NET"),
    new Candidat(3,"achraf","rejete",3,"PHP"),
    new Candidat(4,"achraf","en cours",2,"C#"),
    new Candidat(5,"achraf","valide",1,"JAVA"),
  ];

  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) {}

  

  ngOnInit() {

    

    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
  }

  


  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  
}