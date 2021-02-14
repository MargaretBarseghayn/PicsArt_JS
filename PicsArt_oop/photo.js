function Photo(id, url) {
    this.id = id;
    this.url = url;
}

Photo.prototype.printPhotoInfo = function () {
    console.log(`
Id : ${this.id}
Url : ${this.url}`
    );
}

