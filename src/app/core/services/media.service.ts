import { Injectable } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Injectable({
    providedIn: 'root'
})
export class MediaService {

  public videos: string[] = [
    'https://r2---sn-bg0eznll.googlevideo.com/videoplayback?expire=1606199158&ei=FVO8X-S5PI6P1gKL0YeIAQ&ip=191.189.220.151&id=o-ABpGxTf6PgMY1ZGzarn0XrQjFOTFrXrl4cHstXg8biDP&itag=18&source=youtube&requiressl=yes&gcr=br&vprv=1&mime=video%2Fmp4&ns=I2a5RSGc6e7DjgRzzOa17pAF&gir=yes&clen=10692810&ratebypass=yes&dur=116.982&lmt=1602862731490991&fvip=2&c=WEB&txp=5530422&n=_VR6RUFoa1fYI6L&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgUwOV42qHVVdhGSOjpJWq4CgGrDH2Q5lB2tfQr0XGzhsCIHGiI-JIC6jHxU4goIWA4uVsid9pE9Xxil8xn2HwuqkO&redirect_counter=1&rm=sn-oxunxg8pjvn-o8uel7l&req_id=377aecf846e6a3ee&cms_redirect=yes&ipbypass=yes&mh=dm&mm=29&mn=sn-bg0eznll&ms=rdu&mt=1606177481&mv=m&mvi=2&pl=22&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOriXfcNTJqESXS7BwWYrBpGYihegM2Obcs0f9FYto_bAiEAwDegOwQbUJr0ASsL-vDzBytA_WXlWrDuCWRgt3-w9l4%3D',
    'https://r2---sn-bg0ezn7e.googlevideo.com/videoplayback?expire=1606199213&ei=TVO8X4LmEeyN2_gP6OmlmAI&ip=37.1.24.118&id=o-AE1SCunBg4R3isNHiBuDWl2uTYlIjfVtty_o9I3tI0BC&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=WkAY5h5t5k9ug9qLkiGKJo4F&gir=yes&clen=12468344&ratebypass=yes&dur=156.339&lmt=1503549076769162&fvip=15&c=WEB&n=i_Pfyh6F-WJE9og&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIGvXI67U9q4gT8Dl2UT50o0xhWx9qrVLoUpzDfINettAiAnyisAvcwIV051T-VSgcDXjimDso8sSvsnQi9XFGAgsw%3D%3D&rm=sn-gp5ajvh-n8ve7l&req_id=22f94c436efca3ee&redirect_counter=2&cm2rm=sn-n8vrke6&cms_redirect=yes&mh=kT&mip=2804:431:c7cd:e7be:240d:ba2:86ef:c83f&mm=34&mn=sn-bg0ezn7e&ms=ltu&mt=1606177469&mv=m&mvi=2&pl=47&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJxIv5sddWuvA5WrbeFvGSgHn913pK663ypsDEVOGGWUCIQDqpz9tJMOrMscNDPpf0pOcmOKsS-xnxzJfuO0JMynHyg%3D%3D',
    'https://r2---sn-8p8v-bg0sl.googlevideo.com/videoplayback?expire=1606187135&ei=HyS8X9jdNJOKhwak6a34Cg&ip=23.146.144.156&id=o-AOg7FOkAV06HVk1CkgMISHiqPch6UJ5q3OuAWx3ltDUJ&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=245WHoEtNuNaKi7fL3OivSoF&gir=yes&clen=8599096&ratebypass=yes&dur=164.095&lmt=1574585351485110&fvip=2&c=WEB&txp=5531432&n=ycim_MzGWdr1CEW&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIVKsqbTRogQ0Q4w8tyMt7KT9eYUpBCcRKlmxtL-JKYcAiBVYyo3WXGfm4vRSBeKxQ_tQjLjRQnpdkhQu80SlasFcw%3D%3D&redirect_counter=1&rm=sn-5hneld7l&req_id=b7a674f7d84ba3ee&cms_redirect=yes&ipbypass=yes&mh=2O&mip=2804:431:c7cd:e7be:240d:ba2:86ef:c83f&mm=31&mn=sn-8p8v-bg0sl&ms=au&mt=1606177479&mv=m&mvi=2&pl=47&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJmYz5kYShnWfjHGBZtFcI2nPDa8ZlwUAj64KBgRmg-ICIQCUY_-N3aaZlyMRxpFyTgIZmhIV7Qc1kbW8dKBtHWyk8g%3D%3D',
    'https://r4---sn-bg07dn6k.googlevideo.com/videoplayback?expire=1606192398&ei=rTi8X9e_O4SSiwTW-ICQDw&ip=31.192.137.80&id=o-AHB7YOl3vtbYKNYfIlJYKyw5w476k_9QshI-27_Xbkvn&itag=18&source=youtube&requiressl=yes&pcm2=yes&vprv=1&mime=video%2Fmp4&ns=qMbZ-K2OcVGDaoA_Sc0PHcgF&gir=yes&clen=4955468&ratebypass=yes&dur=108.831&lmt=1574931794025571&fvip=6&beids=9466588&c=WEB&txp=5531432&n=ej9fNKbwUITaoBR&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgHBIEC5ehvduezf90B5R25yhDncjPecPxdizkVfu-7mACIQC43XMMBUPPBGTdo2bJLGXJFTWBdxioQUQhpmC4G3SZpQ%3D%3D&rm=sn-qp5avbg0-3bqe7d,sn-axqd7d&fexp=9466588&req_id=8ffa1fabf1cfa3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=La&mip=2804:431:c7cd:e7be:240d:ba2:86ef:c83f&mm=29&mn=sn-bg07dn6k&ms=rdu&mt=1606177481&mv=m&mvi=4&pl=47&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgM0Es2RRYdt1WfwiBokMA9WniZ7PVXRJlE4CIt8PuOOYCIQDH9Tj_W5kV3J9pWaQsOb7gBA2TjE1oMKWV7DgVBUtE2Q%3D%3D',
  ];

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

      public playVideo() {
        this.streamingMedia.playVideo(this.videos[Math.round(Math.random()*4)], this.options);
      }
}
