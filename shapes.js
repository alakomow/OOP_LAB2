function Shape(x1, y1) {
    var x = x1;
    var y = y1;

    this.getX = function() {
        return x;
    };

    this.setX = function(x1) {
        x = x1;
    };

    this.getY = function() {
        return y;
    };

    this.setY = function(y1) {
        y = y1;
    };
}

Shape.prototype.move = function (x1, y1) {
    this.setX(this.getX() + x1);
    this.setY(this.getY() + y1);
};

function Circle(x1, y1, r1) {
    Shape.apply(this, [x1, y1]);

    var r = r1;

    this.getR = function() {
        return r;
    };

    this.setR = function(r1) {
        r = r1;
    };
}

Circle.prototype = new Shape();

Circle.prototype.toString = function()
{
    return "Circle X = " + this.getX() + " Y = " + this.getY() + " R = " + this.getR(); 
};

function Rectangle(x1, y1, w1, h1) {
    Shape.apply(this, [x1, y1]);

    var w = w1;
    var h = h1;

    this.getW = function() {
        return w;
    };

    this.setW = function(w1) {
        h = w1;
    };

    this.getH = function() {
        return h;
    };

    this.setW = function(h1) {
        h = h1;
    };
}

Rectangle.prototype = new Shape();

Rectangle.prototype.toString = function() {
    return "Rectangle X = " + this.getX() + " Y = " + this.getY() + " W = " + this.getW() + " H = " + this.getH(); };

function Box(x1, y1, s1) {
    Rectangle.apply(this, [x1, y1]);

    var s = s1;

    this.getW = function() {
        return s;
    };

    this.setW = function(w1) {
         s = w1;
    };

    this.getH = function() {
        return s;
    };

    this.setW = function(h1) {
        s = h1;
    };

    this.getS = function() {
        return s;
    };

    this.setS = function(s1) {
        s = s1;
    };
}

Box.prototype = new Rectangle();

Box.prototype.toString = function()
{
    return "Box X = " + this.getX() + " Y = " + this.getY() + " S = " + this.getW(); 
};

function Composite() {
    Shape.apply(this, []);

    var arrayShape = [];

    this.push = function (_shape) {
        arrayShape.push(_shape);
    };

    this.move = function (___x, ___y) {
        for (var shape in arrayShape) {
            arrayShape[shape].move(___x, ___y);
        }
    };

    this.toString = function()
    {
        var result = "\nComposite Begin\n";
        for (var shape in arrayShape) {
            result += arrayShape[shape].toString() + "\n";
        }

        result += "Composite End\n";

        return result;
    };
}

function w(msg){
    document.write(msg);
}

function testData(){
	try {
		document.write("<pre>");

		circle = new Circle(3, 3, 5);
        w("Circle current state: ");
        w(circle.toString());

        circle.move(3,5);
        w("\nCircle is moving(3,5): "+circle.toString());

        circle.move(-3,-5);
        w("\nCircle is back moving(-3,-5): "+circle.toString()+"\n\n");


		rect = new Rectangle(4, 5, 6, 7);
        w("Rectangle is current state: "+rect.toString());
        rect.move(3,5);
        w("\nRectangle move to (3,5) :"+rect.toString()+"\n\n");
    

		box = new Box(1,1,10);
        w("Box curent state :"+box.toString());
        box.move(2,3);
        w("\nBox move to (2,3)"+ box.toString());



	    

		composite = new Composite();

		composite.push(circle);
        composite.push(rect);
        composite.push(box);
        w("\n\ncomposite current stak: "+composite.toString());

        composite.move(1,2);
        w("\n\ncomposite move (1,2): "+composite.toString());
	} catch (e) {
		document.write("Exception: " + e);
	}
}