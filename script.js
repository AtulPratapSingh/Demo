function loveCalculate()
{
    const name1 = document.getElementById("name1").value.trim();
    console.log("name1");
    const name2 = document.getElementById("name2").value.trim();

    if(name1==""||name2=="")
    {
        alert("Please enter a name")
    }
    else{
        const lovepercentage=Math.floor(Math.random()*101);
        const result= document.getElementById("result");
        result.innerHTML= `${name1} and ${name2} ${lovepercentage}%`;

        if(lovepercentage<=30)
        {
            result.innerHTML+= " <br>Not a Match,Keep looking" 
        }
        else if (lovepercentage >=30 && lovepercentage <=70)
        {
            result.innerHTML+= "<br> Potential Match, Give it a chance "
        }
        else
        {
            result.innerHTML+= "<br> Congratulation, Love  is in the Air"
        }
    }

}
loveCalculate();