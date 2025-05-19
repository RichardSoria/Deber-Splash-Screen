import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  showPhotos: boolean = false;

  constructor(public photoService: PhotoService) { }
  addPhotoToGallery(quality: number) {
    this.photoService.addNewToGallery(quality);

  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  
  toggleView() {
    this.showPhotos = !this.showPhotos;
  }

}
