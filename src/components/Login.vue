<template>
<div>
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="Flat Dark Web Login Form Responsive Templates, Iphone Widget Template, Smartphone login forms,Login form, Widget Template, Responsive Templates, a Ipad 404 Templates, Flat Responsive Templates" />
<!--webfonts-->
<!-- <link href='http://fonts.useso.com/css?family=PT+Sans:400,700,400italic,700italic|Oswald:400,300,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.useso.com/css?family=Exo+2' rel='stylesheet' type='text/css'> -->
<!--//webfonts-->
<!-- <script src="http://ajax.useso.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
 <!--LOG IN-->
</head>
<body>
<h1><strong>Welcome to 404 Studio</strong></h1>
<div class="login-form">
  <div class="close"> </div>
		<div class="head-info">
			<label class="lbl-1"> </label>
			<label class="lbl-2"> </label>
			<label class="lbl-3"> </label>
		</div>
			<div class="clear"> </div>
	<div class="avtar">
		<img alt="Avtar" src="/assets/avtar.png" />
	</div>
	<form action="/login" method="post">
		<input type="text" class="text" v-model.lazy="user.name" placeholder="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" name="username" required/>
			<!-- <div class="key"> -->
		<input type="password" v-model.lazy="user.password" placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" name="pasword" required/>
			<!-- </div> -->
		<input type="emptyplace">
		<button v-on:click.prevent="login">Login</button>
	</form>
	<!-- <form class="signin" action="/login" method="post"> -->
		<!-- <a href="renvi.html"> -->
			<!-- <input type="submit" value="Login"> -->
			<!-- </a> -->
	<!-- </form> -->
</div>
<div class="signup">
		<router-link id="signupline" to='/signup'>Don't have an account? Sign up here</router-link>
	</div>
<div class="copy-rights">
		<p>Copyright &copy; 2020. 404 Studio All rights reserved</p>
	</div>
</body>
    <div v-el:script_holder></div>
</div>
</template>

<script>
import database from '../firebase.js'
addEventListener("load", function() {setTimeout(hideURLbar, 0);}, false); 
function hideURLbar(){ window.scrollTo(0,1); }

export default {
    data() {
        return {
			user:{
				name:'',
				password:''
			}
		};
    },
    ready() {
        let scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', 'http://ajax.useso.com/ajax/libs/jquery/1.11.0/jquery.min.js');
        scriptEl.setAttribute('data-some-param', 'paramvalue');
        this.$els.scriptHolder.appendChild(scriptEl);
	},
	methods:{
		login: function() {
			database.collection('password-file').get().then((querySnapShot)=>{
				let databaseUser={}
				let successful=false
				querySnapShot.forEach(doc=>{
					databaseUser=doc.data()
					if(this.user.name==databaseUser.name && this.user.password==databaseUser.password) {
						alert("Login is successful! Have a wonderful experience with 404!");
						successful=true;
					}
				})
				if (successful==false) {
					alert("Invalid username and password");
				}
			});
		}
	}
}

</script>

<style>
strong{
	font-weight: 700;
	font-size: 50px;
	color: #d36562;
}

/* reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}
ol,ul{list-style:none;margin:0px;padding:0px;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
table{border-collapse:collapse;border-spacing:0;}
/* start editing from here */
a{text-decoration:none;}
.txt-rt{text-align:right;}/* text align right */
.txt-lt{text-align:left;}/* text align left */
.txt-center{text-align:center;}/* text align center */
.float-rt{float:right;}/* float right */
.float-lt{float:left;}/* float left */
.clear{clear:both;}/* clear float */
.pos-relative{position:relative;}/* Position Relative */
.pos-absolute{position:absolute;}/* Position Absolute */
.vertical-base{	vertical-align:baseline;}/* vertical align baseline */
.vertical-top{	vertical-align:top;}/* vertical align top */
nav.vertical ul li{	display:block;}/* vertical menu */
nav.horizontal ul li{	display: inline-block;}/* horizontal menu */
img{max-width:100%;}
/*end reset*/
/****-----start-body----****/
body{
	background: no-repeat 0px 0px;
	background-color: #d5cccc;
	font-family: 'Open Sans', sans-serif;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	min-height:1050px;
}
.wrap{
	margin: 0 auto;
	width: 80%;
}
body a,form li,input[type="submit"],input[type="text"],.sixth-login input[type="submit"],.third-login input[type="submit"]{
	transition: 0.1s all;
	-webkit-transition: 0.1s all;
	-moz-transition: 0.1s all;
	-o-transition: 0.1s all;
}
/*--close--*/
.close{
background: url('/assets/close.png') no-repeat 0px 0px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 20px;
  -webkit-transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}
/*--/close--*/
h1 {
	font-family: 'Exo 2', sans-serif;
	text-align: center;
	padding-top: 1em;
	font-weight: 600;
	color: #FFFFFF;
	font-size: 3.2em;
	margin-top: 0px;
}
.login-form {
	background: #1b2528;
	position: relative;
	width: 30%;
	margin: 3% auto 0 auto;
	text-align: center;
	border-radius: 15px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	-o-border-radius: 15px;
}
.head img {
	width: 100%;
}
.avtar img {
  margin: 2em 0 0;
}
.head-info {
  padding: 5px 0;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: #FFFFFF;
  background: #0F1416;
  height: 50px;
	border-top-left-radius: 10px;
	-webkit-border-top-left-radius: 10px;
	-moz-border-top-left-radius: 10px;
	-o-border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	-webkit-border-top-right-radius: 10px;
	-moz-border-top-right-radius: 10px;
	-o-border-top-right-radius: 10px;
}
input[type="text"] {
	width: 70%;
	padding: 1em 2em 1em 3em;
	color: #FFFFFF;
	font-size: 18px;
	outline: none;
	background: url(/assets/adm.png) no-repeat 10px 15px;
	border: none;
	font-weight: 100;
	border-bottom: 1px solid#484856;
	margin-top: 2em;
}
input[type="password"]{
	width: 70%;
	padding: 1em 2em 1em 3em;
	color: #FFFFFF;
	font-size: 18px;
	outline: none;
	background: url(/assets/key.png) no-repeat 10px 23px;
	border: none;
	font-weight: 100;
	border-bottom: 1px solid#484856;
	margin-bottom: 0em;
 }
input[type="emptyplace"]{
	background: url(/assets/key.png) no-repeat 10px 23px;
	border: none;
	margin-bottom: 3em;
}
.key {
	background: url(/assets/pass.png) no-repeat 500px 17px;
}
button {
	font-size: 30px;
	color: #fff;
	outline: none;
	border: none;
	background: #0F1416;
	width: 100%;
	padding: 18px 0;
	border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
	cursor: pointer;
}
input[type="submit"]{
	font-size: 30px;
	color: #fff;
	outline: none;
	border: none;
	background: #0F1416;
	width: 100%;
	padding: 18px 0;
	border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
	cursor: pointer;
}
input[type="submit"]:hover {
	background: #A39E9E;
    border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
	transition: 1s all;
	-webkit-transition: 1s all;
	-moz-transition: 1s all;
	-o-transition: 1s all;
}
label.lbl-1 {
	background: #d5cccc;
	width: 20px;
	height: 20px;
	display: block;
	float: right;
	border-radius: 50%;
	margin: 16px 10px 0px 0px;
}
label.lbl-2 {
	background: #ffffff;
	width: 20px;
	height: 20px;
	display: block;
	float: right;
	border-radius: 50%;
	margin: 16px 10px 0px 0px;
}
label.lbl-3 {
	background: #d36462;
	width: 20px;
	height: 20px;
	display: block;
	float: right;
	border-radius: 50%;
	margin: 16px 10px 0px 0px;
}
/*--copyrights--*/
.copy-rights{
	text-align: center;
	margin-top: 8em;
}
.copy-rights p{
	color:#FFF;
	font-size: 1em;
	line-height:1.8em;
}
.copy-rights p a{
	color:#ff2a75;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
	text-decoration:none;
}
.copy-rights p a:hover{
	color:#3faa53;
	text-decoration:none;
		transition: 0.1s all;
	-webkit-transition: 0.1s all;
	-moz-transition: 0.1s all;
	-o-transition: 0.1s all;
}
/*--/copyrights--*/
/*--start-responsive-design--*/
@media (max-width:1440px){
	.key {
		background: url(/assets/pass.png) no-repeat 376px 17px;
	}
	
	body {
		min-height: 811px;
	}
}
@media (max-width:1366px){
	.key {
	background: url(/assets/pass.png) no-repeat 358px 19px;
	}
	.copy-rights {
	margin-top: 3em;
	}
	body {
	min-height: 768px;
	}
}
@media (max-width:1280px){
	.key {
		background: url(/assets/pass.png) no-repeat 336px 18px;
	}
	body {
		min-height: 711px;
	}
	.copy-rights {
		margin-top: 0.5em;
	}
}
@media (max-width:1024px){
	.login-form {
		width: 37%;
	}
	.key {
		background: url(/assets/pass.png) no-repeat 339px 18px;
	}
	.copy-rights {
		margin-top: 3em;
	}
	h1 {
		padding-top: 2em;
	}
	body {
		min-height: 675px;
	}
}
@media (max-width:768px){
	.login-form {
		width: 50%;
		margin: 12% auto 0 auto;
	}
	.key {
		background: url(/assets/pass.png) no-repeat 342px 18px;
	}
	body {
		min-height: 929px;
	}
}
@media (max-width:640px){
	.login-form {
		width: 60%;
		margin: 20% auto 0 auto;
	}
	.key {
		background: url(/assets/pass.png) no-repeat 342px 19px;
	}
}
@media (max-width:480px){
	.login-form {
		width: 80%;
	}
}
@media (max-width:320px){
	h1 {
		padding-top: 1em;
		font-size: 1.5em;
	}
	.login-form {
		width: 90%;
		margin: 10% auto 0 auto;
	}
	input[type="text"] {
		width: 62%;
		padding: 1.2em 2em .5em 2.5em;
		font-size: 17px;
		margin-top: .5em;
	}
	input[type="password"] {
		width: 62%;
		padding: 1.2em 2em .5em 2.5em;
		font-size: 17px;
		margin-top: .5em;
		margin-bottom: 2em;
		background: url(/assets/key.png) no-repeat 8px 23px;
	}
	.key {
		background: url(/assets/pass.png) no-repeat 235px 27px;
	}
	.avtar img {
		margin: 1.1em 0 0;
	}
	.head-info {
		height: 35px;
	}
	label.lbl-1 {
		margin: 8px 10px 0px 0px;
	}
	label.lbl-2 {
		margin: 8px 10px 0px 0px;
	}
	label.lbl-3 {
		margin: 8px 10px 0px 0px;
	}
	.close {
		left: 16px;
		top: 13px;
	}
	.copy-rights {
		margin-top: 2em;
	}
	body {
		min-height: 504px;
	}
	input[type="submit"] {
		font-size: 28px;
		padding: 10px 0;
	}
}
/*--end-responsive-design--*/
	</style>