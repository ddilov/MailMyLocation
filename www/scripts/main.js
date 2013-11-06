function sbor(n,m) {
	form.x1.value =(n+m);
}
function razl(n,m) {
	form.x1.value =(n-m);
}
function proi(n,m) {
	form.x1.value =(n*m);
}
function dele(n,m) {
	form.x1.value =(n/m);
}
function sqrt_(form) {
	x1=eval(form.x1.value);
	form.x1.value =Math.sqrt(x1);
}
function proc(n,m) {
	form.x1.value =(n*m)/100;
}
function sin_(form) {
	x1=eval(form.x1.value);
	form.x1.value =Math.round(Math.sin(x1*Math.PI/180)*10000)/10000;
}
function cos_(form) {
	x1=eval(form.x1.value);
	form.x1.value =Math.round(Math.cos(x1*Math.PI/180)*10000)/10000;
}
function tan_(form) {
	x1=eval(form.x1.value);
	form.x1.value =Math.round(Math.tan(x1*Math.PI/180)*10000)/10000;
}
function ctan_(form) {
	x1=eval(form.x1.value);
	form.x1.value =Math.round(1/(Math.tan(x1*Math.PI/180))*10000)/10000;
}
function step(n,m) {
	var r=1;
	for (var i=0;i<m;i++){
		r*=n;
	}
	form.x1.value =r;
}
function fact(form) {
	x1=eval(form.x1.value);
	var f=1;
	for (var i=1;i<=x1;i++){
		f*=i;
	}
	form.x1.value =f;
}
function pribavi(form,a) {
	if (form.b.value=="0"){
		form.x1.value+=a;
	}
	else{
		form.x1.value=a;
		form.b.value="0";
	}
}
function znaci(form,b) {
	if (form.br.value=="0"){form.n.value=form.x1.value;}
	else{
		if (form.znak.value=="+"){form.n.value=eval(form.n.value)+eval(form.x1.value);}
		if (form.znak.value=="-"){form.n.value=eval(form.n.value)-eval(form.x1.value);}
		if (form.znak.value=="*"){form.n.value=eval(form.n.value)*eval(form.x1.value);}
		if (form.znak.value=="/"){form.n.value=eval(form.n.value)/eval(form.x1.value);}
	}
	form.znak.value=b;
	form.x1.value=eval(form.n.value);
	form.b.value="1";
	form.br.value=eval(form.br.value)+1;
}
function ravno(form) {
	m=eval(form.x1.value);
	n=eval(form.n.value);
	if (form.znak.value=="+"){sbor(n,m);}
	if (form.znak.value=="-"){razl(n,m);}
	if (form.znak.value=="*"){proi(n,m);}
	if (form.znak.value=="/"){dele(n,m);}
	if (form.znak.value=="%"){proc(n,m);}
	if (form.znak.value=="^"){step(n,m);}
}
function pm(form) {
	x1=eval(form.x1.value);
	x1*=-1;
	form.x1.value=x1;
}
function edx(form,a) {
	x1=eval(form.x1.value);
	x1=1/x1;
	form.x1.value=x1;
}
function xk(form,a) {
	x1=eval(form.x1.value);
	x1=x1*x1;
	form.x1.value=x1;
}
function clr(form) {
	form.x1.value="";
	form.n.value="0";
	form.znak.value="";
	form.br.value="0";
}
