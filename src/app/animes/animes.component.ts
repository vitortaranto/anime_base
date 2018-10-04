import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { Animes } from '../mock-animes';

@Component({
    selector: 'app-animes',
    templateUrl: './animes.component.html',
    styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
    animes = Animes;

    selectedAnime: Anime;
    
    onSelect(anime: Anime): void {
        this.selectedAnime = anime;
    }

    constructor() { }

    ngOnInit() {
    }

}
