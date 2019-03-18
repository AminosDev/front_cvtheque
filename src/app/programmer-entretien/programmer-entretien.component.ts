import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Candidat} from '../candidat';

@Component({
  selector: 'app-programmer-entretien',
  templateUrl: './programmer-entretien.component.html',
  styleUrls: ['./programmer-entretien.component.scss']
})
export class ProgrammerEntretienComponent implements OnInit {
		 closeResult: string;

     candidats =[new Candidat(1,"yassine","valide",1,"JAVA, ANGULAR"),
     new Candidat(2,"hamid","en cours",1,"JAVA, ANGULAR"),
     new Candidat(3,"achraf","rejete",1,"JAVA, ANGULAR"),
     new Candidat(4,"achraf","en cours",1,"JAVA, ANGULAR"),
     new Candidat(5,"achraf","valide",1,"JAVA, ANGULAR"),
      ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
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
