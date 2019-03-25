import { Component, OnInit, ViewChild } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidat } from '../candidat';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  private baseUrl:string='http://localhost:8080/Candidat';

  private headers = new Headers({'Content-Type':'application/json'});

  private option =  new RequestOptions({headers:this.headers});


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


  candidats =[new Candidat(1,"yassine","valide",1,"ANGULAR"),
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

  key_competence: string = 'competence';
  reverse_competence: boolean = false;
  sort_competence(key_competence){
    this.key_competence = key_competence;
    this.reverse_competence = !this.reverse_competence;
  }

  p: number = 1;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private _http:Http) {}

  getCandidat(){
    return this._http.get(this.baseUrl+'/list',this.option).map((respense:Response)=>respense.json())
    .catch(this.errorHanlder);
  }

  errorHanlder(error:Response){
    return Observable.throw(error||"SERVER ERROR")
  }

  cands:Candidats;
  currentRate: any;
  ngOnInit() {
    this.currentRate = 4;

    this.getCandidat().subscribe((cands)=>{
      this.cands=cands;console.log(cands);
    },(error)=>{
      console.log(error);
    })

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

export class Candidats {
  constructor(
    public id: number,
    public name: string,
    public role:string,
    public statut:number,
    public competence:string
    ) { }
}
