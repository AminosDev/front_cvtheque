import { utilisateur } from "./utilisateur.model";
import { CompetanceRating } from "./CompetenceRating";

export class competence {
	id_competence : Number;
	competence : String ;
	rts:utilisateur[];
	ratings:CompetanceRating[];
}
