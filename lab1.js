//First function sumOfSquares

function sumOfSquares(num1,num2,num3)
{
    //console.log(typeof num1);
    if(Number.isNaN(Number(num1)) || Number.isNaN(Number(num2)) || Number.isNaN(Number(num3)))
        {
            //console.log("Inside loop")
            throw "Not a number or values are undefined";
        }
    return ((num1 * num1)+(num2 * num2)+(num3 * num3))
}

//console.log(sumOfSquares(2,4));   //This call will throw error
console.log("Output for First function:");
console.log(sumOfSquares(5,4,6));
console.log(sumOfSquares(2,10,12));
console.log(sumOfSquares(3,7,9));
console.log(sumOfSquares(6,9,12));
console.log(sumOfSquares(4,13,15));

console.log("\n");

//Second Function: sayHelloTo

function sayHelloTo(firstName,lastName,title)
{
    if(firstName == "" || lastName == "" || title == "" )
        {
            throw "Empty string not accepted"
        }
    
    if(firstName == undefined && lastName == undefined && title == undefined)
        {
            throw "No String";
        }
    if(firstName && lastName == undefined && title == undefined)
        {
            if(typeof firstName != 'string'  )
                {
                    throw "Not a string";
                }
            
                console.log("Hello, "+firstName+"!");    
        }
    if(firstName && lastName && title == undefined)
        {
            if(typeof firstName != 'string' || typeof lastName != 'string' )

                {
                    throw "Not a string";
                }
            
                console.log("Hello, "+firstName+" "+lastName+". I hope you are having a good day!");    
        }
    if(firstName && lastName && title)
         {
            if(typeof firstName != 'string' || typeof lastName != 'string' || typeof title != 'string'  )
                {
                    throw "Not a string";
                }
             console.log("Hello, "+title+"."+" "+firstName+" " +lastName+"! Have a good evening");    
         }
}

console.log("Output for second function:");
//Sample calls to sayHelloTo 
//sayHelloTo("");                           //No parameters This call throws error.
sayHelloTo("Jas");                        //FirstName
sayHelloTo("Jas","Raj");                  //FirstName,LastName
sayHelloTo("Jas","Raj","Ms");             //FirstName,lastName,Title

console.log("\n");


//Third Function cupsOfCoffee

function cupsOfCoffee(howManyCups)
{
    //console.log(typeof howManyCups);
    if(Number.isInteger(howManyCups) == false ||  howManyCups <= 0 || typeof howManyCups == undefined)
        {
            throw "Number should be an Integer";
        }

    let result="";

    for(let i=howManyCups; i>0; i--)
        {
            
            if(i==1)
                {
                    result+=i+" cup of coffee on the desk! "+i+" cup of coffee! \n";
                    result+="Pick it up, drink the cup, no more coffee left on the desk! \n";
                    result+="\n";

                }
            else if(i ==  2)
                {
                
                    result+=i+" cups of coffee on the desk! "+i+" cups of coffee! \n";
                    result+="Pick one up, drink the cup, "+(i-1)+" cup of coffee on the desk! \n";
                    result+="\n";      
                
                }
            else
                {

            result+=i+" cups of coffee on the desk! "+i+" cups of coffee! \n";
            result+="Pick one up, drink the cup, "+(i-1)+" cups of coffee on the desk! \n";
            result+="\n";
                }
           
        }
        return result;
}

console.log("Output for Third function:");
//Sample call for cupsOfCoffee
console.log(cupsOfCoffee(5));
//console.log(cupsOfCoffee(-1));    This call will throw error
//console.log(cupsOfCoffee("a"));    This call will throw error

console.log("\n");

//Fourth Function  occurrencesOfSubstring

function occurrencesOfSubstring(fullString,substring)
{
    if(fullString == "" || substring == "" )
        {
            throw "Empty string not accepted"
        }
        if(typeof fullString != 'string' || typeof substring != 'string'  )
        {
            throw "Not a string or String is undefined";
        }
        let len=substring.length;
        let count=0;
        for(let i=0;i<fullString.length;i++)
            {
                if(fullString.charAt(i)==substring.charAt(0))
                    {
                        let sub=fullString.substring(i,i+len);             //Calculating substring from fullString and comparing that with substring
                       
                        if(substring == sub)
                            {
                               
                               count++;
                            }
                    }
            }
            return count;
}
//Sample calls for fourth function
console.log("Output for fourth function:");
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));
console.log("\n");


function randomizeSentences(paragraph)
{
    if(paragraph == "")
        {
            throw "Empty string not accepted"
        }
    if(typeof paragraph != 'string' )
        {
            throw "Not a string";
        }
    let arr=[];
    let index=0;
    let indexArr=0
    if(paragraph.includes(".") || paragraph.includes("!") || paragraph.includes("?"))
    {
    for(let i=0; i< paragraph.length; i++)
        {
           if(paragraph.charAt(i)=="." || paragraph.charAt(i)=="!" ||paragraph.charAt(i)=="?") 
            {
                let str=paragraph.substring(index,i+1);
                index=i+2;
                arr[indexArr]=str;
               // console.log(str);
                indexArr++;
            }
            
        }

        function shuffle(a) {
            for (let i = a.length; i; i--)
            { 
           let j = Math.floor(Math.random() * i); 
           [a[i - 1], a[j]] = [a[j], a[i - 1]]; 
        }
        let resultString="";
        for(let j=0;j<a.length;j++)
            {
                resultString+=a[j]+ " "; 
            }
        return resultString;
    }
    let random=shuffle(arr);

    return random;
}

else return paragraph;

        
}
//console.log(randomizeSentences(""));
//Sample call for randomizeSentences
console.log("Output for Fifth function:");


console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
