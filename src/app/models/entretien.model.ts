import { candidat } from "./candidat.model";
import { EntretienStatus } from "./EntretienStatus.model";
import { utilisateur } from "./utilisateur.model";

export class Entretien {
  id_entretien: Number ;
	date_entretien : Date ;
	lu : Number ;
	remarque : String ;
	entretienstatut : EntretienStatus;
	utilisateur : utilisateur;
  candidat : candidat;
}
