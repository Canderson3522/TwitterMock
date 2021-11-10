export let currentUser = {}

export class CreateUser {
    constructor(firstname, lastname, username) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
    }
};

export function displayUserOnPost(user, postId) {
    $(`#fullname${postId}`).html(user.name);
    $(`#username${postId}`).html(`@${user.username}`);
}

export function saveUser(user) {
    currentUser = user;
};