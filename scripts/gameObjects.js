var allGameObjects = [];

function GameObject(name, type, x,y, width, height, sheet){
    this.name = name;
    this.type = type;
    this.display = true;
    this.position = new Vector (x,y);
    this.velocity = new Vector(0,0);
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.fixed = true;
    this.defaultState = null;
    this.falling = false;
    this.left = function(){
        return this.position.x;};
    this.top = function(){
        return this.position.y;};
    this.right = function(){
        return this.position.x + this.width;};
    this.bottom = function(){
        return this.position.y + this.height;}
    
    this.sheet = new SpriteSheet(sheet, this.width, this.height);
    this.draw = function(){
        ctx.drawImage(this.sheet.image, this.position.x, this.position.y);
    }
    this.state = "disabled";
    this.animations ={};
    allGameObjects.push(this);
}