/*так як я знаю JavaScript я напишу дані поняття на цій мові
Інкапсуляція - важлива частина об'єктно-орієнтованого програмування, щоб дані в різних екзимплярах класу були відокремлені один від одного;
це реалізується в JavaScript за допомогою оператора this. Однак, на відміну від інших об'єктно-орієнтованих мов програмування, 
JavaScript не обмежує доступ до даних усередині екземпляра класу.
*/
function MyClass()
{
  this.MyData = "Some Text";
}

MyClass.prototype.MyFunction = function(newtext)
{
  this.MyData = newtext;
  
  alert("New text: " + this.MyData); 
}


var c = new MyClass();
c.MyFunction("Some More Text");

var c2 = new MyClass();
c2.MyFunction("Some Different Text");

/*наслідування
в JavaScript немає прямого успадкування, так як вона є мовою прототипів. 
Тому для наслідування класу від іншого класу використовується оператор prototype, щоб клонувати конструктор батьківського класу і при цьому успадкувати його методи і властивості. 
Конструктор батьківського класу також викликається в конструкторі підкласу.
*/
//Конструктор батьківського класу
function Animal(name)
{
  this.name = name;
}

//Метод батьківського класу
Animal.prototype.alertName = function()
{
  alert(this.name);
}

//Конструктор унаслідуваного класу
function Dog(name)
{
  Animal.call(this, name);
  
  this.collarText;
}
Dog.prototype = new Animal();

Dog.prototype.setCollarText = function(text)
{
  this.collarText = text;
} 
/*поліморфізм
Поліморфізм - розширення принципу успадкування в об'єктно-орієнтованому програмуванні, що реалізовується в JavaScript за допомогою оператора prototype. 
Поліморфізм - це коли підклас класу може викликати ту ж саму узагальнену успадковану функцію в своєму власному контексті
*/
//Конструктор батьківського класу
function Animal(name)
{
  this.name = name;
}

Animal.prototype.speak = function()
{
  alert(this.name + " says:");
}

//Конструктор унаслідуваного класу "Dog"
function Dog(name)
{
  Animal.call(this, name);
}

Dog.prototype.speak = function()
{
  Animal.prototype.speak.call(this);
  
  alert("woof");
}

//Конструктор унаслідуваного класу "Cat"
function Cat(name)
{
  Animal.call(this, name);
}

Cat.prototype.speak = function()
{
  Animal.prototype.speak.call(this);
  
  alert("miaow");
}