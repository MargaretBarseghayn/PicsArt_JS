function Video(id, url) {
    this.id = id;
    this.url = url;
}

Video.prototype.printPhotoInfo = function () {
    console.log(`
Id : ${this.id}
Url : ${this.url}`
    );
}

