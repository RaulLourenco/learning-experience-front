import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { Howl, Howler } from 'howler';

@Injectable({
    providedIn: 'root'
})
export class AudioService {

    public songs: Track[] = [
        {
            name: 'voce_acertou_parabens',
            path: './assets/mp3/voce_acertou_parabens.mp3'
        },
        {
            name: 'clique_no_igual',
            path: './assets/mp3/clique_no_igual.mp3'
        },
        {
            name: 'ae_completou_modulo',
            path: './assets/mp3/ae_completou_modulo.mp3'
        },
        {
            name: 'associe_as_figuras',
            path: './assets/mp3/associe_as_figuras.mp3'
        },
        {
            name: 'clique_no_parecido',
            path: './assets/mp3/clique_no_parecido.mp3'
        },
        {
            name: 'eba_completou_50',
            path: './assets/mp3/eba_completou_50.mp3'
        },
        {
            name: 'entre_4_clique_igual',
            path: './assets/mp3/entre_4_clique_igual.mp3'
        },
        {
            name: 'entre_5_clique_igual_parecido',
            path: './assets/mp3/entre_5_clique_igual_parecido.mp3'
        },
        {
            name: 'ops_tente_novamente',
            path: './assets/mp3/ops_tente_novamente.mp3'
        },
        {
            name: 'olhe_cor_brinquedo',
            path: './assets/mp3/olhe_cor_brinquedo.mp3'
        },
        {
            name: 'voce_completou_todos_modulos',
            path: './assets/mp3/voce_completou_todos_modulos.mp3'
        },
    ];

    public activeTrack: Track = null;
    public player: Howl = null;
    public isPlaying = false;

    constructor() { }


    public start(track, auto) {
        const trackObj: Track = {
            name: track,
            path: `./assets/mp3/${track}.mp3`
        };
        if (this.player) {
            this.player.stop();
        }
        this.player = new Howl({
            src: [trackObj.path],
            autoplay: auto ? true : false,
            onplay: () => {
                this.isPlaying = true;
                this.activeTrack = trackObj;
            },
            onend: () => {}
        });
        this.player.play();
    }
}
