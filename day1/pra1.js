function news(a,b,c,d){
    this.timestamp=a;
    this.id=b;
    this.day=c;
    this.publisher=d;

}

let n1=new news(15,2435,"mon","abc")
let n2=new news(13,24135,"mon","abc")
let n3=new news(14,24351,"mon","abc")
console.log(n1,n2,n3)