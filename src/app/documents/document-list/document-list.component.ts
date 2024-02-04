import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  public documents: Document[] = [
    new Document(1, "First Titled Document", "Pokem ipsum dolor sit amet Zigzagoon Fighting Sentret Servine Mew grumpy old man who needs coffee. S.S. Anne Nidoqueen Sentret Graveler Arbok Wing Attack Golett. Electric Liepard Swinub Pachirisu Fog Badge Zebstrika Professor Elm. Marsh Badge Swoobat Pokemon Heroes Soul Badge Raichu Kangaskhan Feraligatr. Red Toxicroak Venipede Shroomish Illumise Ponyta Rampardos. ", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(2, "Second Titled Document", "Flamethrower Clamperl Togepi Glacier Badge Omastar Raichu Weedle. Soul Badge oh, you're my best friend Cradily Wingull Fire quis nostrud exercitation Vaporeon. Growl Feraligatr Shellder Dusclops Bagon Pokemon The Movie 2000 Giovanni. Ice Pokemon, it's you and me Petilil Aron Elekid Roselia Golem. Ghost Sinnoh Charmander Relicanth Umbreon Kangaskhan Escape Rope. ", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(3, "Third Titled Document", "Lorem ipsum dolor sit amet Jynx Tepig Victini Starmie Lavender Town to train them is my cause. Yellow Shedinja Vaporeon Krabby Metapod Lunatone Cubone. Ground Unown Cofagrigus Barboach Surskit Seismitoad Dugtrio. Leaf Green Luxio Normal Lilligant Beldum Nurse Joy Pokemon. Ut enim ad minim veniam Pokemon Master Glameow Poliwag Pineco Luxray Spheal. ", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(4, "Fourth Titled Document", "V for victory Hariyama Noctowl Cubone Youngster wants to fight Eelektrik Pidove. Celadon City Spearow Ledyba Shelmet Misty Slaking Poochyena. Ghost Cofagrigus Machop Carnivine Oddish Dewott Golbat. Pewter City Hive Badge Mineral Badge Leavanny Swanna Rapidash Beedrill. Hoenn Gulpin Marshtomp Escape Rope Voltorb Panpour Ghost. ", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(5, "Fifth Titled Document", "Vermilion City Kyogre Abomasnow Weedle Tropius Emolga Exploud. Kanto Rotom Poliwag Arcanine Machop Celadon City Oddish. Excepteur sint occaecat cupidatat non proident Rampardos Magnemite Mirror Move Archen Serperior Paras. Ground Nidoking Sentret Pokemon Heroes Dragon Floatzel Musharna. Ut enim ad minim veniam Slugma Emboar Venomoth Whirlipede Hoppip Pallet Town. ", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null)
  ]

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document)
  }
}
