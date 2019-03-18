import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {
  Chovereds: any[];
  Lhovereds: any[];
  Cselected: any[];
  Lselected: any[];
  LangueRate: any;
  CompetanceRate: any;
  constructor(private fb: FormBuilder) { }
  /* from Declaration */
  public Cvform: FormGroup;
  public LanguesList: FormArray;
  public CompetanceList: FormArray;
  public LoisirList: FormArray;
  public FormationList: FormArray;
  ///Formation
  createFormations(): FormGroup {
    return this.fb.group({
      NomEtablissement: [''],
      DateDebut: [''],
      DateFin: [''],
      Description: ['']
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
      Loisir: ['']
    });
  }
  addLoisir() {
    this.LoisirList.push(this.createLoisirs());

    console.log(this.LoisirList);
    console.log(this.Cvform);
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
    Langue: '',
    Niveau: 0
  });
}

addLangue() {
  this.LanguesList.push(this.createLangues());
  this.Lhovereds.push(0);
  this.Lselected.push(0);
  console.log(this.Lhovereds);
  console.log(this.Lselected);
  console.log(this.LanguesList);
  console.log(this.Cvform);
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
    Competance: [''],
    Niveau: [0]
  });
}

addCompetance() {
  this.CompetanceList.push(this.createCompetances());
  this.Chovereds.push(0);
  this.Cselected.push(0);
  console.log(this.CompetanceList);
  console.log(this.Cvform);
}
removeCompetance(index: number) {
  this.CompetanceList.removeAt(index);
}

get competanceFormGroup() {
  return this.Cvform.get('competances') as FormArray;
}
getConsole(s:any){
  return console.log(s);
}
getCompetancesFormGroup(index: number): FormGroup {
  this.CompetanceList = this.Cvform.get('competances') as FormArray;
  const formGroup = this.CompetanceList.controls[index] as FormGroup;
  return formGroup;
}
  ngOnInit() {
    this.Cvform = this.fb.group({
      Nom: '',
      Prenom: '',
      Cin: '',
      DateNaissance: '',
      Email: '',
      Telephone: '',
      Adresse: '',
      formations: this.fb.array([this.createFormations()]),
      loisirs : this.fb.array([this.createLoisirs()]),
      langues: this.fb.array([this.createLangues()]),
      competances: this.fb.array([this.createCompetances()])
    });
    this.FormationList = this.Cvform.get('formations') as FormArray;
    this.LoisirList = this.Cvform.get('loisirs') as FormArray;
    this.LanguesList = this.Cvform.get('langues') as FormArray;
    this.CompetanceList = this.Cvform.get('competances') as FormArray;
    console.log(this.FormationList);
    console.log(this.LoisirList);
    console.log(this.LanguesList);
    console.log(this.CompetanceList);
    console.log(this.Cvform);
    this.removeFormation(0);
    this.LangueRate = 5;
    this.CompetanceRate = 5;
    this.Chovereds = [0];
    this.Lhovereds = [0];
    this.Cselected = [0];
    this.Lselected = [0];
  }

}
