import { Action } from '@ngrx/store';
import { type } from '@app/shared/helpers/type.helpers';

/***** models  ****/
import { Post } from '@app/features/posts/models/post.model';


export const ActionTypes = {
    FETCH_POSTS_START:                              type('[Posts] Fetch Posts Start'),
    FETCH_POSTS_SUCCEED:                            type('[Posts] Fetch Posts Succeed'),
    FETCH_POSTS_FAILED:                             type('[Posts] Fetch Posts Failed'),
    ADD_POST:                                       type('[Posts] Add Posts Start'),
    DELETE_POST:                                    type('[Posts] Delete Post'),
    UPDATE_POST:                                    type('[Posts] Update Post'),
};

export class FetchPostsStartActions implements Action {
  type = ActionTypes.FETCH_POSTS_START;
  constructor(public payload?: any) { }
}

export class FetchPostsSucceedActions implements Action {
    readonly type = ActionTypes.FETCH_POSTS_SUCCEED;
    constructor(public payload: Post[]) { }
}

export class FetchPostsFailedActions implements Action {
    type = ActionTypes.FETCH_POSTS_FAILED;
    constructor(public payload?: any) { }
}

export class AddPostActions implements Action {
    readonly type = ActionTypes.ADD_POST;
    constructor(public payload: Post) { }
}

export class DeletePostActions implements Action {
    type = ActionTypes.DELETE_POST;
    constructor(public payload: number) { }
}

export class UpdatePostActions implements Action {
    type = ActionTypes.UPDATE_POST;
    constructor(public payload: Post) { }
}

export type Actions
  = FetchPostsStartActions
  | FetchPostsSucceedActions
  | FetchPostsFailedActions
  | AddPostActions
  | DeletePostActions
  | UpdatePostActions

