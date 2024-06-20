//Odd Number from given input
var n=1633,s=0,re;
while (n!==0){
    re=n%10;
    if(re%2!=0){
        s=s+re;
    }
    n=n/10;
    n=~~n;
}
console.log(s);

//Difference between Even and Odd
var n1=163382,s1=0,re1;
while (n1!=0){
    re1=n1%10;
    if(re1%2!=0){
        s1=s1-re1
    }
    else{
        s1=s1+re1
    }
    n1=n1/10;
    n1=~~n1;
}
console.log(s1)

//To check whether Even is greater or Odd is greater
var n2=132,s2=0,re2;
while (n2!=0){
    re2=n2%10;
    if(re2%2!=0){
        s2=s2-re2
    }
    else{
        s2=s2+re2
    }
    n2=n2/10;
    n2=~~n2;
}
if(s2>0){
    console.log("Even sum is greater")
}
else{
    console.log("Odd sum is greater")
}

