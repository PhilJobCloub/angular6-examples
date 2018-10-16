import { UtilsHelpers } from '@app/shared/helpers/utils.helpers';

/**** main reducer ****/
import * as fromApp from '@app/store';

/***** actions  ****/
import * as PostsActions from '@app/features/posts/store/actions/posts.actions';

/***** models  ****/
import { Post } from '@app/features/posts/models/post.model';

/***** state interface  ****/
export interface FeatureState extends fromApp.State {
    postsState: State
  }

export interface State {
    entities: { [id : number ]: Post },
    loaded: boolean;
    loading: boolean;
    errors : any
}

/***** initial state  ****/
const initialState: State = {
    entities : {},
    loaded: false,
    loading: false,
    errors : null
}

/***** methods  ****/
const fetchingPostsStart = (state, action) => {
    return UtilsHelpers.prototype.updateObject(state,
      {
        loading: true,
        loaded :false,
      });
  };

const fetchingPostsSucceed = (state, action) => {
    /**use entity pattern ***/
    const entities = UtilsHelpers.prototype.flatten(action.payload);
    
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading: false,
            loaded: true,
            errors : null,
            entities
        });
};

const fetchingPostsFailed = (state, action) => {
    const errors = action.payload;
    return UtilsHelpers.prototype.updateObject(state,
        {
            loading: false,
            loaded: true,
            errors
        });
};

const addPost = (state, action) => {
    const post : Post = action.payload;
    const entities = {
        ...state.entities,
        [post.id]: post,
      };

    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
};

const deletePost = (state, action) => {
    const postId = action.payload;
    const { [postId]: removed, ...entities } = state.entities;

    return UtilsHelpers.prototype.updateObject(state,
        {
            entities
        });
};
/***** reducer  ****/
export function postsReducer(state = initialState, action: PostsActions.Actions): State {
    switch (action.type) {
        case PostsActions.ActionTypes.FETCH_POSTS_START: { return fetchingPostsStart(state, action) };
        case PostsActions.ActionTypes.FETCH_POSTS_SUCCEED: { return fetchingPostsSucceed(state, action)};
        case PostsActions.ActionTypes.FETCH_POSTS_FAILED: { return fetchingPostsFailed(state, action)};
        case PostsActions.ActionTypes.ADD_POST: { return addPost(state, action)};
        case PostsActions.ActionTypes.DELETE_POST: { return deletePost(state, action)};
        default: return state;
    }
}


  