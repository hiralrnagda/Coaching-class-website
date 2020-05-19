var ajaxRequest=new XMLHttpRequest();
var u,usernameArray,flag,m;

function process()
{
	if(ajaxRequest.readyState==0||ajaxRequest.readyState==4)
	{
		u=document.getElementById("demo").value;
		ajaxRequest.open('GET','ajax.json',true);
		ajaxRequest.onreadystatechange=handleServerResponse;
		ajaxRequest.send(null);
	}
}

function handleServerResponse()
{
	if(ajaxRequest.readyState==4)
		if(ajaxRequest.status==200)
		{
			usernameArray=JSON.parse(ajaxRequest.responseText);
			flag=1;
			for(var i=0;i<usernameArray.length;i++)
				if(usernameArray[i].username==u)
					flag=0;
			if(flag==1)
				m="Username Available!!";
			else
				m="Sorry!!Username already taken.";
			
			if(u!="")
				document.getElementById("demo").innerHTML=m;
			else
				document.getElementById("demo").innerHTML="Start Typing...";
		setTimeout('process()',500);
		}
		else
			alert("Something went wrong");
}