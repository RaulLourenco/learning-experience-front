import { Injectable } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Injectable({
    providedIn: 'root'
})
export class MediaService {

    public options: StreamingVideoOptions = {
        successCallback: () => {
            console.log('Video played');
        },
        errorCallback: (e) => {
            console.log('Error streaming');
        },
        orientation: 'landscape',
        shouldAutoClose: true,
        controls: false
      };

    constructor(private streamingMedia: StreamingMedia) { }

      public playVideo(url) {
        this.streamingMedia.playVideo(url, this.options);
      }
}
