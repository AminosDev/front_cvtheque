import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  /* from Declaration */
  public Cvform: FormGroup;
  public FormationList: FormArray;
  createFormations(): FormGroup {
    return this.fb.group({
      NomEtablissement: [''],
      DateDebut: [''],
      DateFin: [''],
      Description: ['']
    });
  }
  // addFormation
  addFormation() {
    this.FormationList.push(this.createFormations());
    console.log(this.FormationList);
  }
  removeFormation(index){
    this.FormationList.removeAt(index);
  }
  get formationFormGroup() {
    return this.Cvform.get('formations') as FormArray;
  }
  getFormationsFormGroup(index): FormGroup {
    this.FormationList = this.Cvform.get('contacts') as FormArray;
    const formGroup = this.FormationList.controls[index] as FormGroup;
    return formGroup;
  }

  ngOnInit() {
    this.Cvform = this.fb.group({
      Nom: '',
      prenom: '',
      Cin: '',
      DateNaissance: '',
      email: '',
      telephone: '',
      adresse: '',
      formations: this.fb.array([this.createFormations()])
    });
    this.FormationList = this.Cvform.get('formations') as FormArray;
    console.log(this.FormationList);
    console.log(this.Cvform);
  }

}
