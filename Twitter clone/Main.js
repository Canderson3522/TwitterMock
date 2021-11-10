import { displayPosts } from './modules/posts.js';
import { getPosts, createPost, loginUser } from './modules/ajax.js';
import { saveUser } from './modules/users.js';

(function(){
    $("#btn-Login").click(() => loginUser(saveUser));
    $("#Post-btn").click(() => createPost(displayPosts));
})();