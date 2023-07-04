import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { galleryRoutes } from './gallery.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(galleryRoutes),],
})
export class GalleryModule {}
