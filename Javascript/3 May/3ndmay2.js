//write a script to show all prime numbers between 2 to 200 


var i,j,counter;

for(j=2;j<=200;j++)
{
    counter=0;
    for(i=1;i<=j;i++)
    {
       if(j%i==0)
       {
          counter=counter+1;
       }
    }
    if(counter==2)
    console.log(j+" ");
}