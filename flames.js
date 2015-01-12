
//returns the number of sum of unique letters

function value(name1, name2){

	var smallname1 = name1.split(' ').join('').toLowerCase();
	var smallname2 = name2.split(' ').join('').toLowerCase();
	var p = smallname1.length;
	var q = smallname2.length;
	var n = 0;

	// if (name1=='' || name2 == '') {

	// 	$('#alert').append("please enter valid names");

	// 	document.getElementById('alert').classList.add('message');

	// };

	// else if(smallname1===smallname2){
	// 	return "1/1"
	// };

	

	for (i=0; i<p; i++){

		for (j=0; j<q; j++){

			if (smallname1[i]==smallname2[j]) {

				n = n + 1;
				
				break;

				// smallname1 = smallname1.replace(smallname1.charAt(i),'');
				// smallname2 = smallname2.replace(smallname2.charAt(j),'');

			};

		};
		
	};

	return flame(p + q - 2*n) 
}



function flame(count){

	var s = "flames";
	// count = value(name1, name2);

	var j = count;

	while (s.length > 1){
		

		while (j > s.length){
			j = j - s.length;
			
		};

		// if (j < s.length) {
		// 	s.replace(s[j-1],'');
		// 	j = j - 1 + count;

		// 	console.log(j)
		// };

		s = s.replace(s.charAt(j-1),'');
		j = j - 1 + count;
		


	}

	if (s.length == 1){
		return out(s[0]);
	} 
}


function out(n){

	switch (n) {
    case 'f':
        return 'FRIEND';
        break;
    case 'l':
        return 'LOVE';
        break;
    case 'a':
        return "AFFAIR!!";
        break;
    case 'm':
        return "MARRIAGE";
        break;
    case 'e':
        return "ENEMIES";
        break;
    case 's':
        return "SIBILING";
        break;
    
	}
}

function myFunction(){

	// $('#alert').append("please enter valid names");

 //    document.getElementById('alert').classList.add('message');

	// var name1 = eval($("#name1").val());
	// var name2 = eval($("#name2").val());


	var name1 = document.getElementById("name1").value;
	var name2 = document.getElementById("name2").value;

	$('h2').html(value(name1,name2));
	$('#add').addClass('result');

	document.getElementById('add').classList.add('result');


 }

 console.log(value('ravikanth','andhavarapu'));