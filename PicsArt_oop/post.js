function Post(publisher,text){
    this.publisher = publisher;
    this.text = text;
}

Post.prototype.printPost = function (){
    console.log(`
Publisher - ${this.publisher}
Text - ${this.text}`)
}


export default Post
