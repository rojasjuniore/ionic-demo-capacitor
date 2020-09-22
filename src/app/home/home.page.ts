import { Component } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  takenPicture: any;

  async takePicture() {
    const takePicture = await Plugins.Camera.getPhoto(
      {
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      }
    );

    this.takenPicture = takePicture.webPath;
  }
}