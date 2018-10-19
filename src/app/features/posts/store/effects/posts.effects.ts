import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

/***** services  ****/
import { PostsService } from '@app/features/posts/services/posts.service';

/***** actions  ****/
import * as PostsActions from '@app/features/posts/store/actions/posts.actions';
import { ActionTypes } from '@app/features/posts/store/actions/posts.actions';

/***** models  ****/
import { Post } from '@app/features/posts/models/post.model';

/****** reducer ****/
import * as fromPosts from '@app/features/posts/store/reducers/posts.reducers';

@Injectable()
export class PostsEffects {
    constructor(
        private actions$ : Actions,
        private _postsService : PostsService,
        private store : Store<fromPosts.FeatureState>) {

    }

    @Effect()
    postsFetch$ = this.actions$
    .ofType(ActionTypes.FETCH_POSTS_START)
    .pipe(switchMap((action : PostsActions.FetchPostsStartActions) => {
        return this._postsService
                    .list(null)
                    .pipe(map((posts : Post[]) =>  {
                        return {
                            type: ActionTypes.FETCH_POSTS_SUCCEED,
                            payload: posts
                            };
                        }
                    ));
            })
    );

}

