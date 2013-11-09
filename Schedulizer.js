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
var classSubject = ["CMPT", "CMSC", "CMSC","CMSC","PHED"];
var courseNum = ["331L","414L", "415L", "478L", "134N"];
var Term = "Spring 2014";
//var Title = "GAME DES+PROG I";
//GM_setValue("count", 0);
if (GM_getValue("count", -1) ==-1)
GM_setValue("count", 0);

String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function getToSearch()
{
	//window.location = "https://my.marist.edu/welcome";
    window.location.href = "https://app.banner.marist.edu/ssomanager/c/SSB";
    window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu";
    window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu";
    window.location.href = "https://ssb.banner.marist.edu/PROD11G/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu";
    window.location.href = "https://ssb.banner.marist.edu/PROD11G/bwskfcls.p_sel_crse_search";
    //selects the term to look up
 
}


if (window.location == "https://my.marist.edu/welcome" ||window.location == "https://my.marist.edu/" )
    getToSearch();

if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwskfcls.p_sel_crse_search")
{
//selects term
    var terms = document.getElementById("term_input_id").options;
    console.log(terms[0]);
    for (var i = 0; i< terms.length; i++)
    {
        if (terms[i].textContent.killWhiteSpace() == Term.killWhiteSpace())
        {
        	terms[i].selected = true;
            document.getElementsByTagName("INPUT")[3].click();
        }
    }
}
if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwckgens.p_proc_term_date")
{
document.getElementsByTagName("INPUT")[23].click();
}
if (window.location == 'https://ssb.banner.marist.edu/PROD11G/bwskfcls.P_GetCrse')
{	
    
 	var subjects = document.getElementById("subj_id").options;
    //selects subject
    for (var i=0; i< subjects.length; i++)     
    {
        if (subjects[i].value.killWhiteSpace()==  classSubject[GM_getValue("count")].killWhiteSpace() || subjects[i].textContent.killWhiteSpace() == classSubject[GM_getValue("count")].killWhiteSpace())
        {
         subjects[i].selected= true;
        }
    }
 	//selects course number
	document.getElementById("crse_id").value = courseNum[GM_getValue('count')];
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
var CRN_dummy = document.getElementsByClassName("dddefault")[1].textContent;
var Cred_dummy = document.getElementsByClassName("dddefault")[6].textContent;
var Title_dummy = document.getElementsByClassName("dddefault")[7].textContent;    
var Days_dummy= document.getElementsByClassName("dddefault")[8].textContent;
var Time_dummy= document.getElementsByClassName("dddefault")[9].textContent; 
var Instructor_dummy = document.getElementsByClassName("dddefault")[16].textContent;
var Loc_dummy = document.getElementsByClassName("dddefault")[18].textContent;

GM_setValue ("CRN" + String(GM_getValue("count")), CRN_dummy);
GM_setValue ("Cred" + String(GM_getValue("count")), Cred_dummy);
GM_setValue ("Title" + String(GM_getValue("count")), Title_dummy); 
GM_setValue ("Days" + String(GM_getValue("count")), Days_dummy);  
GM_setValue ("Time" + String(GM_getValue("count")), Time_dummy);
GM_setValue ("Instructor" + String(GM_getValue("count")), Instructor_dummy);
GM_setValue ("Loc" + String(GM_getValue("count")), Loc_dummy); 

    start+=20; //20 is the length of one class worth of data
}
console.log(document.getElementsByClassName("dddefault").length);    
//console.log (CRN + " " + Days + " " + Time + " " + Instructor + " " + Loc);
//alert(GM_getValue("count") + " " + classSubject.length);    
if (GM_getValue("count") < classSubject.length-1)    
{
    GM_setValue("count", GM_getValue("count")+1);
	//window.location.href = "https://my.marist.edu/welcome";

}    
else
    window.location.href = "http://localhost:8000/";
}
if (window.location == 'http://localhost:8000/')
    
{	
    for( var i =0; i< 5; i++)
    document.getElementById("class" + String(i)).textContent = GM_getValue('CRN' + String(i)) + " " + GM_getValue('Cred' + String(i)) + " " + GM_getValue('Title' + String(i)) + " " + GM_getValue('Days' + String(i)) + " " + GM_getValue('Time' + String(i)) + " " + GM_getValue('Instructor' + String(i)) + " "+ GM_getValue('Loc' + String(i)) + " "; 
	GM_setValue("count", 0);
}