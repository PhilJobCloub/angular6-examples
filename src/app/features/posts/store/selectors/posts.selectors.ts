import { createSelector, createFeatureSelector } from '@ngrx/store';

/**** main reducer ****/
import * as fromRoot from '@app/store';
import * as fromFeatures from '@app/features/posts/store/reducers/posts.reducers';


export const getPostState = createFeatureSelector<fromFeatures.State>('postsState');

export const getAllPosts = createSelector(
    getPostState,
    state => state.entities
)

/* transform my obj in an array */
export const getPostsList = createSelector(
    getAllPosts,
    entities => Object.keys(entities).map(key => entities[key])
)

export const getPostsLoaded = createSelector(
    getPostState,
    state => state.loaded
)

export const getPostById = createSelector(
    getAllPosts,
    fromRoot.getRouterState,
    (entities, router) => {
        return router.state &&
            entities[router.state.params.postId]
    }
)