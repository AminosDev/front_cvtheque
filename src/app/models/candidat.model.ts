import { NiveauEtude } from "./NiveauEtude.model";
import { LangueRating } from "./LangueRating.model";
import { CompetanceRating } from "./CompetenceRating";
import { loisir } from "./loisir.model.";
import { formation } from "./formation.model";
import { cv } from "./cv.model";
import { Entretien } from "./Entretien.model";

export class candidat {
	id_candidat : Number ;
	nom : String ;
	prenom : String ;
	cin : String ;
	date_naissance : Date ;
	lien_photo : String ;
	mail : String ;
	adresse : String ;
	telephone : String ;
	situation_famille : Number;
	niveauEtude :NiveauEtude;
	Lratings : LangueRating[];
	entretiens:Entretien[];
	ratings : CompetanceRating[];
	loisirs : loisir[];
	formations : formation[];
	cvs : cv[];





}
