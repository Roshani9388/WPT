/*write a function to accept a string from user and show it in uppercase in a <p> tag on button 
click
 write a function to show the string in lowercase in a <p> tag on button click on 
lowercase-button
 write a function to show the string in titlecase in a <p> tag on button click on 
titlecase-button*/


<html>
    <head>
        <script>
            function f1()
            {
                let n1 = document.getElementById("num1").value
                let n2 = document.getElementById("num2").value
                
                switch(document.getElementById("s1").value)
                {
                case "+" :
                        let sum = parseInt(n1) + parseInt(n2)
                        document.getElementById("p1").innerText = `${n1} + ${n2} = ${sum}`         
                          break;
                case "-" :
                        let r = parseInt(n1) - parseInt(n2)
                        document.getElementById("p1").innerText = `${n1} - ${n2} = ${r}`         
                     break;
					 
					 case "mul" :
					 let mul = parseInt(n1)*parseInt(n2)
					 document.getElementById("p1").innertext =`${n1}* ${n2}`
					 break;
                }
            }
        </script>
    </head>
    <body>
        <pre>
        <input type="number" id="num1" value="0"/>
        <input type="number" id="num2" value="0"/>

        <select id="s1" onchange="f1()">
            <option>SELECT</option>
            <option value="+">+</option>
            <option value="-">-</option>
        </select>

        <p id="p1"></p>

        </pre>
    </body>
    
</html>