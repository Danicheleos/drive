import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileModule } from '../../../widgets/file/file.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    FileModule,
    TranslateModule,
  ],
})
export class MoviesModule {}
