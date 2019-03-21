import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  closeResult: string;
  submitted = false;
  Chovereds: any[];
  Lhovereds: any[];
  Cselected: any[];
  Lselected: any[];
  LangueRate: any;
  CompetanceRate: any;
  ///Tempo
  competences = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: '.NET' },
    {id: 3, name: 'ANGULAR' },
    {id: 4, name: 'PHP' },
    {id: 5, name: 'KOTLIN' }
  ];
  Langues = [
    {id: 1, name: 'Francais'},
    {id: 2, name: 'Arabe' },
    {id: 3, name: 'Anglais' },
    {id: 4, name: 'Espaniol' },
    {id: 5, name: 'Allemand' }
  ];
  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  /* from Declaration */
  public Cvform: FormGroup;
  public LanguesList: FormArray;
  public CompetanceList: FormArray;
  public LoisirList: FormArray;
  public FormationList: FormArray;
  ///Formation
  createFormations(): FormGroup {
    return this.fb.group({
      NomEtablissement: ['', Validators.required],
      DateDebut: ['', Validators.required],
      DateFin: ['' , Validators.required],
      Description: ['', Validators.required]
    });
  }

  addFormation() {
    this.FormationList.push(this.createFormations());
    console.log(this.FormationList);
    console.log(this.Cvform);
  }
  removeFormation(index: number) {
    this.FormationList.removeAt(index);
  }
  get formationFormGroup() {
    return this.Cvform.get('formations') as FormArray;
  }
  getFormationsFormGroup(index: number): FormGroup {
    this.FormationList = this.Cvform.get('formations') as FormArray;
    const formGroup = this.FormationList.controls[index] as FormGroup;

    return formGroup;
  }
   ///Loisir
   createLoisirs(): FormGroup {
    return this.fb.group({
      Loisir: ['', Validators.required]
    });
  }
  addLoisir() {
    this.LoisirList.push(this.createLoisirs());
  }
  removeLoisir(index: number) {
    this.LoisirList.removeAt(index);
  }
  get LoisirFormGroup() {
    return this.Cvform.get('loisirs') as FormArray;
  }
  getLoisirsFormGroup(index: number): FormGroup {
    this.LoisirList = this.Cvform.get('loisirs') as FormArray;
    const formGroup = this.LoisirList.controls[index] as FormGroup;
    return formGroup;
  }
 ///Langue
 createLangues(): FormGroup {
  return this.fb.group({
    Langue: ['', Validators.required],
    Niveau: 0
  });
}

addLangue() {
  this.LanguesList.push(this.createLangues());
  this.Lhovereds.push(0);
  this.Lselected.push(0);
}
removeLangue(index: number) {
  this.LanguesList.removeAt(index);
}
get LangueFormGroup() {
  return this.Cvform.get('langues') as FormArray;
}

getLanguesFormGroup(index: number): FormGroup {
  this.LanguesList = this.Cvform.get('Langues') as FormArray;
  const formGroup = this.LanguesList.controls[index] as FormGroup;
  return formGroup;
}
getNiveauLanguesFormGroup(index: number){
  this.getLanguesFormGroup(index).get('Niveau');
}
 ///Competance
 createCompetances(): FormGroup {
  return this.fb.group({
    Competance: ['', Validators.required],
    Niveau : 0
  });
}

addCompetance() {
  this.CompetanceList.push(this.createCompetances());
  this.Chovereds.push(0);
  this.Cselected.push(0);
}
removeCompetance(index: number) {
  this.CompetanceList.removeAt(index);
}
get competanceFormGroup() {
  return this.Cvform.get('competances') as FormArray;
}
//console pr vue
getConsole(s: any) {
  return console.log(s);
}
getCompetancesFormGroup(index: number): FormGroup {
  this.CompetanceList = this.Cvform.get('competances') as FormArray;
  const formGroup = this.CompetanceList.controls[index] as FormGroup;
  return formGroup;
}
//List Langue nd Competance
//Modal
open(content) {
  let n=0;
  n = this.getLoisirErrors() + this.getCompetanceErrors() + this.getFormationErrors() + this.getInfoErrors() + this.getLangueErrors() + this.getLienError();
  console.log(n);
  this.submitted = true;
  //if(n==0){


  this.modalService.open(content,  { size: 'lg', backdrop: 'static' } ).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
//}
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
//geter form
get f() { return this.Cvform.controls; }

//getError

getInfoErrors()
{let n=0;
if(!!this.Cvform.controls.Prenom.errors){n++};
if(!!this.Cvform.controls.Nom.errors){n++};
if(!!this.Cvform.controls.Cin.errors){n++};
if(!!this.Cvform.controls.DateNaissance.errors){n++};
if(!!this.Cvform.controls.Email.errors){n++};
if(!!this.Cvform.controls.Telephone.errors){n++};
if(!!this.Cvform.controls.Adresse.errors){n++};



return n;
}
getLienError(){

if(!!this.Cvform.controls.Lien.errors){return 1};
 return 0;
}
getFormationErrors(){
  let n=0;
for(let i = 0 ; i <  this.FormationList.length; i++ ) {
if(!!this.getFormationsFormGroup(i).controls.NomEtablissement.errors){n++};
if(!!this.getFormationsFormGroup(i).controls.DateDebut.errors){n++};
if(!!this.getFormationsFormGroup(i).controls.DateFin.errors){n++};
if(!!this.getFormationsFormGroup(i).controls.Description.errors){n++};
}
return n;
}
getCompetanceErrors(){
  let n=0;
  for(let i = 0 ; i <  this.CompetanceList.length; i++ ) {
  if(!!this.getCompetancesFormGroup(i).controls.Competance.errors){n++};

  }
  return n;
}
getLoisirErrors(){
  let n=0;
  for(let i = 0 ; i <  this.LoisirList.length; i++ ) {
  if(!!this.getLoisirsFormGroup(i).controls.Loisir.errors){n++};
  }
  return n;
}
getLangueErrors(){
  let n=0;
  for(let i = 0 ; i <  this.LanguesList.length; i++ ) {
  if(!!this.LanguesList.controls[i].controls.Langue.errors){n++};

  }
  return n;
}
//Form Submit
onSubmit() {
  this.submitted = true;
  console.log(this.Cvform);
}

  ngOnInit() {
    this.Cvform = this.fb.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Cin: ['', Validators.required],
      DateNaissance: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      Telephone: ['', Validators.required],
      Adresse: ['', Validators.required],
      formations: this.fb.array([this.createFormations()]),
      loisirs : this.fb.array([this.createLoisirs()]),
      langues: this.fb.array([this.createLangues()]),
      competances: this.fb.array([this.createCompetances()]),
      Lien: ['', Validators.required]
    });
    this.FormationList = this.Cvform.get('formations') as FormArray;
    this.LoisirList = this.Cvform.get('loisirs') as FormArray;
    this.LanguesList = this.Cvform.get('langues') as FormArray;
    this.CompetanceList = this.Cvform.get('competances') as FormArray;
    this.LangueRate = 5;
    this.CompetanceRate = 5;
    this.Chovereds = [0];
    this.Lhovereds = [0];
    this.Cselected = [0];
    this.Lselected = [0];
    console.log(this.getLoisirErrors());
  }

}
