// ==UserScript==
// @name       My Fancy New Userscript
// @namespace  foxweb.marist.edu/users/strm/
// @version    0.1
// @description  enter something useful
// @include  https://ssb.banner.marist.edu/*
// @include  https://ssb.banner.marist.edu/*
// @include  http://foxweb.marist.edu/users/kgght/Projects/Hackathon/index.html
// @include  http://localhost:8000/
// @include  https://my.marist.edu/*
// @copyright  2012+, You
// ==/UserScript==

//var Term = "Spring 2014";
//var Title = "GAME DES+PROG I";
//GM_setValue("count", 0);


String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function getToSearch()
{
        //window.location = "https://my.marist.edu/welcome";
    //window.location.href = "https://app.banner.marist.edu/ssomanager/c/SSB";
    //window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu";
    //window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu";
    //window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu";
    window.location.href = "https://ssb.banner.marist.edu/PROD11G/bwskfcls.p_sel_crse_search";
    //selects the term to look up
 
}


if (window.location == "https://my.marist.edu/welcome" ||window.location == "https://my.marist.edu/" )
    getToSearch();

if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwskfcls.p_sel_crse_search")
{
//selects term
    var terms = document.getElementById("term_input_id").options;
    for (var i = 0; i< terms.length; i++)
    {
        if (terms[i].textContent.killWhiteSpace() == GM_getValue("Term").killWhiteSpace())
        {
                terms[i].selected = true;
            document.getElementsByTagName("INPUT")[3].click();
        }
    }
}
//goes to advanced search
if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwckgens.p_proc_term_date")
{
document.getElementsByTagName("INPUT")[23].click();
}
if (window.location == 'https://ssb.banner.marist.edu/PROD11G/bwskfcls.P_GetCrse')
{       
 
        var subjects = document.getElementById("subj_id").options;
    //selects subject
        var first_space = GM_getValue('stringClasses').indexOf(" ", GM_getValue('index'));
        var currSubj =GM_getValue('stringClasses').substring(GM_getValue('index'), first_space);
        GM_setValue('index', first_space+1);
        if (GM_getValue('stringClasses').indexOf(",", GM_getValue('index')) != -1)
        {    
        var first_comma = GM_getValue('stringClasses').indexOf(",", GM_getValue('index'));
        var currCourse= GM_getValue('stringClasses').substring(GM_getValue('index'), first_comma);
        GM_setValue('index', first_comma+1);
        }
        
        else {
        //var first_comma = GM_getValue('stringClasses').indexOf(",", GM_getValue('index'));
        var currCourse = GM_getValue('stringClasses').substring(GM_getValue('index'), GM_getValue('stringClasses').length);
        GM_setValue('index', GM_getValue('stringClasses').length+1);    
            
        }
        
    for (var i=0; i< subjects.length; i++)     
    {
        if (subjects[i].value.killWhiteSpace()==  currSubj.killWhiteSpace())
        {
         subjects[i].selected= true;
         GM_setValue('classSubject', GM_getValue('classSubject')+1);
        }
    }
         //selects course number
        document.getElementById("crse_id").value = currCourse;
         //selects title
         //document.getElementById("title_id").value = Title;
 
         document.getElementsByName('SUB_BTN')[0].click();
         
}

if (window.location == 'https://ssb.banner.marist.edu/PROD11G/bwskfcls.P_GetCrse_Advanced')
{var possClasses = document.getElementsByClassName("dddefault").length;
var start =0;
var numClass = 1;
while (start!= possClasses)    
{
    

var CRN_dummy = document.getElementsByClassName("dddefault")[1+start].textContent;
var Cred_dummy = document.getElementsByClassName("dddefault")[6+start].textContent;
var Title_dummy = document.getElementsByClassName("dddefault")[7+start].textContent;    
var Days_dummy= document.getElementsByClassName("dddefault")[8+start].textContent;
var Time_dummy= document.getElementsByClassName("dddefault")[9+start].textContent; 
var Instructor_dummy = document.getElementsByClassName("dddefault")[16+start].textContent;
var Loc_dummy = document.getElementsByClassName("dddefault")[18+start].textContent;
   
GM_setValue("CRN" + String(GM_getValue("count"))+ "-"+String(numClass), CRN_dummy);
GM_setValue ("Cred" + String(GM_getValue("count")+ "-"+String(numClass)), Cred_dummy);
GM_setValue ("Title" + String(GM_getValue("count")+ "-"+String(numClass)), Title_dummy); 
GM_setValue ("Days" + String(GM_getValue("count")+ "-"+String(numClass)), Days_dummy);  
GM_setValue ("Time" + String(GM_getValue("count")+ "-"+String(numClass)), Time_dummy);
GM_setValue ("Instructor" + String(GM_getValue("count")+ "-"+String(numClass)), Instructor_dummy);
GM_setValue ("Loc" + String(GM_getValue("count")+ "-" + String(numClass)), Loc_dummy); 
console.log(GM_getValue("CRN" + String(GM_getValue("count"))+ "-"+String(numClass)));
    start+=20; //20 is the length of one class worth of data
    numClass+=1

}

if (GM_getValue("count") < GM_getValue('classSubject'))    
{
    GM_setValue("count", GM_getValue("count")+1);
    window.location.href = "https://my.marist.edu/welcome";
   
}    
else
{    GM_setValue("write", true);
    window.location.href = "http://localhost:8000/";
}
}
if (window.location == 'http://localhost:8000/'){  
        document.getElementById('GO').onclick = function() {
        var globalVars = GM_listValues()
        for (var val in globalVars) {
        GM_deleteValue(globalVars[val]);
        }
       
            
        console.log('butt');
        GM_setValue("stringClasses", document.getElementById("COURSES").value);
        GM_setValue("Term", document.getElementById("TERMS").options[ document.getElementById("TERMS").selectedIndex].value);
        GM_setValue('index',0);
        GM_setValue("count", 0);
        GM_setValue('classSubject', 0);
        window.location.href = "https://my.marist.edu/welcome";
        GM_setValue('write', false);    
        
    };    
if (GM_getValue('write') ==true)
{   
    //gets the first 20 sections for the first 20 classes
    var countRef = 20;
    var classNumRef  = 20;
    console.log(GM_getValue("CRN4-1"));
    var bodytext = "";
    for( var i =0; i<countRef; i++)
    { 
        for (var n =1; n <= classNumRef; n++) 
        {   if (GM_getValue('CRN' + String(i) +"-"+String(n), -1)!= -1)
            bodytext+= "<p>"+ GM_getValue('CRN' + String(i) +"-"+String(n)) + " " + GM_getValue('Cred' + String(i)+"-"+String(n)) + " " + GM_getValue('Title' + String(i)+"-"+String(n)) + " " + GM_getValue('Days' + String(i)+"-"+String(n)) + " " + GM_getValue('Time' + String(i)+"-"+String(n)) + " " + GM_getValue('Instructor' + String(i)+"-"+String(n)) + " "+ GM_getValue('Loc' + String(i)+"-"+String(n)) + "</p>"; 
        
        }

    }
    document.getElementById("BODY").innerHTML = bodytext;
}  
} 
