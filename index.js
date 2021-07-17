let data=[{
		"Student A":{
			"January":{
				"subject a" : 56,
				"subject b" : 75,
				"subject c" : 69,
				"subject d" : 86
			},
			"February":{
				"subject a" : 65,
				"subject b" : 72,
				"subject c" : 86,
				"subject d" : 79
			},
			"March":{
				"subject a" : 80,
				"subject b" : 78,
				"subject c" : 75,
				"subject d" : 70
			}
		},
		"Student B":{
			"January":{
				"subject a" : 72,
				"subject b" : 63,
				"subject c" : 90,
				"subject d" : 85
			},
			"February":{
				"subject a" : 85,
				"subject b" : 65,
				"subject c" : 70,
				"subject d" : 85
			},
			"March":{
				"subject a" : 90,
				"subject b" : 75,
				"subject c" : 85,
				"subject d" : 80
			}
		},
		"Student C":{
			"January":{
				"subject a" : 77,
				"subject b" : 70,
				"subject c" : 56,
				"subject d" : 61
			},
			"February":{
				"subject a" : 68,
				"subject b" : 65,
				"subject c" : 70,
				"subject d" : 67
			},
			"March":{
				"subject a" : 72,
				"subject b" : 75,
				"subject c" : 85,
				"subject d" : 73
			}
		},
		"Student D":{
			"January":{
				"subject a" : 63,
				"subject b" : 45,
				"subject c" : 59,
				"subject d" : 72
			},
			"February":{
				"subject a" : 70,
				"subject b" : 58,
				"subject c" : 68,
				"subject d" : 79
			},
			"March":{
				"subject a" : 72,
				"subject b" : 67,
				"subject c" : 72,
				"subject d" : 75
			}
		}
	}
	]

let out='';
data.filter(item =>{
	iterobj(item);
});

function iterobj(obj)
{
	
	for(prop in obj)
	{
		if(typeof(obj[prop])=="object")
		{
			
			if(prop == "Student A" || prop == "Student B" || prop == "Student C" || prop == "Student D")
			{
				out+='<h2>'+prop+'</h2>';
			}
			else
			{
				out+='<h3>'+prop+'</h3>';
			}
			iterobj(obj[prop]);

		}
		else
		{
			if(prop == "subject a" || prop == "subject b" || prop == "subject c" || prop == "subject d")
			{
				out+='<h4>'+prop+' :'+obj[prop]+'</h4>';
				out+='<hr>'
			}
			console.log(obj[prop]);
		}

	}
}

$(document).ready(
    function()
    {
        document.getElementById('l').innerHTML += out;
    }
);