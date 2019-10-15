import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  retour : string;
  title = 'Fiche de contact';
  articleUN = {
    image : 'http://fr.web.img5.acsta.net/r_1280_720/medias/04/00/83/040083_af.jpg',
    title : "The big Lebowski",
    description : "super mega film des freres Coen.",
    comment : ""
  };
  articleDeux = {
    image :'http://fr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/91/09/19255618.jpg',
    title : "terminator",
    description : "This is the end.",
    comment : ""
  };
  articleTrois = {
    image :'https://www.mauvais-genres.com/19098/princesse-mononoke-affiche-de-film-40x60-cm-1997-studio-ghibli-hayao-miyazaki.jpg',
    title : "Princess Mononoke",
    description : "Best manga ever!",
    comment : ""
  }
  
  filmsArray = [this.articleUN, this.articleDeux, this.articleTrois];

  detectChild(){
    return this.retour ="42";
  }
}
