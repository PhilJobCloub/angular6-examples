import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/***** modules ****/
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'; 
import { StoreModule } from '@ngrx/store';

/*****Components****/
import * as fromComponents from './components';

/*****Pages****/
import * as fromPages from './pages';

/***** routing ****/
import { PostsRoutingModule } from './posts-routing.module';

/***** effects *****/
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '@app/features/posts/store/effects/posts.effects';

/***** reducers *****/
import { postsReducer } from '@app/features/posts/store/reducers/posts.reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    PostsRoutingModule,
    StoreModule.forFeature('postsState', postsReducer),
    EffectsModule.forFeature([PostsEffects])
    
  ],
  declarations: [
    fromComponents.components,
    fromPages.pages
  ],
  exports: [
    fromComponents.components,
    fromPages.pages
  ],
  entryComponents : [
    fromComponents.PostsListComponent
  ]
})
export class PostsModule { }
