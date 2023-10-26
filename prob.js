let rect={
    length:5
    width:7
    area:function()
    {
        console.log(this.length*this.width)
    }
    perimeter:function()
    {
        console.log(2*this.length+this.width)
    }
}
rect.area()
rect.perimeter()
