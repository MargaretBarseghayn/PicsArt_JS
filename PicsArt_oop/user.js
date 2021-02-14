import Post from "./post";

function User(id, firstName, lastName, username , url, hasGold) {
    Account.call(this, id, firstName, lastName, username, url)
    this.hasGold = hasGold;
    this.photos = [];
    this.isBlocked = false;
}

User.prototype = Object.create(Account.prototype)
User.prototype.constructor = User

User.prototype.printInfo = function () {
    if (!this.isBlocked) {
        Account.prototype.printInfo.call(this);
        console.log(`Has gold account : ${this.hasGold ? 'Yes' : 'No'}`)
    } else {
        console.log(`No such username: ${this.username} exists`)
    }
}

User.prototype.showPhotos = function () {
    if (!this.isBlocked) {
        this.photos.forEach(e => {
            e.printPhotoInfo()
        })
    } else {
        console.log(`No such username: ${this.username} exists`)
    }
}

User.prototype.addPhoto = function (photo) {
    if (!this.isBlocked) {
        this.photos.push(photo);
        console.log('Photo successfully added')
    } else {
        console.log(`No such username: ${this.username} exists`)
    }
}

User.prototype.removePhoto = function (photo) {
    if (!this.isBlocked) {
        this.photos = this.photos.filter((e) => photo.id !== e.id)
        console.log('Photo successfully removed')
    } else {
        console.log(`No such username: ${this.username} exists`)
    }

}

User.prototype.sharePost = function (text){
    if (!this.isBlocked) {
        this.posts.push(new Post(this.username, text))
    }else {
        console.log(`${this.username} account is blocked`)
    }
}

