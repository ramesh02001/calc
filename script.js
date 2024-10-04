



var headingone = document.createElement('h1')
headingone.setAttribute("id","title")
headingone.innerHTML= "calculator"
document.body.append(headingone)
var p = document.createElement('p')
p.setAttribute("id","description")
p.innerHTML= "normalcalculator"
document.body.append(p)






function creatediv(tagname, attrname, attrvalue ){
    var  div = document.createElement(tagname);         
                                   
     div.setAttribute(attrname,attrvalue);               
    return div;
   }
 
   function createin(tagname, attrname, attrvalue,attrname1,attrvalue1){
    var  input = document.createElement(tagname);         
                                  
     input.setAttribute(attrname,attrvalue); 
     input.setAttribute(attrname1,attrvalue1);                
    return input;
   }
 
 
   function createlab(tagname, attrname, attrvalue  ){
    var  label = document.createElement(tagname);         
       label.setAttribute(attrname,attrvalue);                              
        
    return  label;
   }
 
 
   function linebreak(breaker){
    var b1 = document.createElement(breaker);
    return b1;
  }
 
 
 
  
 
  
 function createbutton(tagname, attrname, attrvalue ,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attravalue3,contant ){
   
   var button = document.createElement(tagname);  
 button.setAttribute(attrname,attrvalue);
 button.setAttribute(attrname1,attrvalue1); 
 button.setAttribute(attrname2,attrvalue2);
 button.setAttribute(attrname3,attravalue3);
 
 button.innerHTML=contant;
  return button;
   }
  
   
 
     
   
 var box = creatediv("div","class","box");
 
 
 var con = creatediv("div","class","container");
 box.append(con);
 var col = creatediv("div","class"," col-8");
 con.append(col);
 var part = creatediv("div","class"," box-part");
 col.append(part);
 var display = creatediv("div","class"," display"); 
 var  res = createin("input","type","text","id","result")
 var b1 = linebreak("br")
 display.append( res,b1);
 part.append(display);
 
 
   
 
 document.body.append( box );
 
 
 var key = creatediv("div","class","key");
 var  sp = creatediv("span","class","sp");
  
 var sol7 = createbutton("button","type"," button","value","7","onclick","Solve('7')","class","sol7","7");
 var sol8 = createbutton("button","type"," button","value","8","onclick","Solve('8')","class","sol8","8");
 var sol9 = createbutton("button","type"," button","value","9","onclick","Solve('9')","class","sol9","9");
  sp.append(sol7);
  sp.append(sol8);
  sp.append(sol9);
  key.append(sp);
 var solx = createbutton("button","type"," button","value","x","onclick","Solve('*')","class","solx","x");
 key.append( solx);
 var br1 = linebreak("br");
 key.append(br1); 
 part.append(key);
 
 
 
 
    var  sp = creatediv("span","class","sp");
    var sol4 = createbutton("button","type"," button","value","4","onclick","Solve('4')","class","sol4","4");
    var sol5 = createbutton("button","type"," button","value","5","onclick","Solve('5')","class","sol5","5");
    var sol6 = createbutton("button","type"," button","value","6","onclick","Solve('6')","class","sol6","6");
     sp.append(sol4);
     sp.append(sol5);
     sp.append(sol6);
    key.append(sp);
    var solsub = createbutton("button","type"," button","value","-","onclick","Solve('-')","id","subtract","-");
    key.append( solsub);
    var br2 = linebreak("br");
    key.append(br2);
   
 
 
 var  sp = creatediv("span","class","sp");
 var sol1 = createbutton("button","type"," button","value","1","onclick","Solve('1')","id","1","1");
 var sol2 = createbutton("button","type"," button","value","2","onclick","Solve('2')","id","2","2");
 var sol3 = createbutton("button","type"," button","value","3","onclick","Solve('3')","id","3","3");
  sp.append(sol1);
  sp.append(sol2);
  sp.append(sol3);
 key.append(sp);
 var  soladd = createbutton("button","type"," button","value","+","onclick","Solve('+')","id","add","+");
 key.append( soladd );
 var br3 = linebreak("br");
 key.append(br3);
 
   
  
 var  sp = creatediv("span","class","sp");
 var sol00 = createbutton("button","type"," button","value","00","onclick","Solve('00')","id"," 00","00");
 var sol0 = createbutton("button","type"," button","value","0","onclick","Solve('0')","id","  0","0");
 var soldot = createbutton("button","type"," button","value",".","onclick","Solve('.')","id","soldot",".");
  sp.append(sol00);
  sp.append(sol0);
  sp.append(soldot);
 key.append(sp);
 var  soldivd = createbutton("button","type"," button","value","/","onclick","Solve('/')","id","soldivd","/");
 key.append(soldivd);
  
 
  
  
 var  sp1 = creatediv("span","class","sp1");
 var solc = createbutton("button","type"," button","value","C","onclick","Clear() ","id","clear","c");
 var solpas = createbutton("button","type"," button","value","%","onclick","Solve('%')","id","solpas","%");
 var soldel = createbutton("button","type"," button","value","<--","onclick","Back('del')","id","soldel","del");
  sp1.append(solc);
  sp1.append(solpas);
  sp1.append(soldel);
 key.append(sp1);
  
   
  
  
 var  g = creatediv("span","class","g");
 var solr = createbutton("button","type"," button","value","=","onclick","Result() ","id","equal","=");
  
  
 g.append(solr);
 key.append(g);
 part.append(key);
  
 
  
 
 
 
 
 
  function Solve(val) {
    var v = document.querySelector('#result');
    v.value += val;
 }
 function Result() { 
    
 
  
  
    var num1 = document.querySelector('#result').value;
    var num2 = eval(num1);
    document.querySelector('#result').value =num2
 }
 function Clear() {
     
    var inp1 = document.querySelector('#result');
    inp1.value='';
 
 }
 function Back() {
    var ev = document.querySelector('#result');
    ev.value = ev.value.slice(0,-1);
 }