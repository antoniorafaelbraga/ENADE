<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<title>ENADE</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
	<script src="https://code.jquery.com/jquery-1.10.2.js"	type="text/javascript"></script>
	<script src="https://d3js.org/d3.v7.min.js" type="text/javascript"></script>
	<script src="js/app-ajax.js" type="text/javascript"></script>
</head>
<body>
	<form>
		<div class="container">
		  <div class="row">
		    <div class="col-sm">
				<img src="imagens/enade.jpg"><br>
				<strong>Selecione um curso</strong>:
				<select name="curso" id='curso'>
					<option value="--">--</option>
					<option value="SI">SI</option>
					<option value="ES">ES</option>
					<option value="RC">RC</option>
					<option value="CC">CC</option>
					<option value="EC">EC</option>
					<option value="DD">DD</option>
				</select><br> 
				<strong>Selecione um ano</strong>: 
				<select name="ano" id='ano'>
					<option value="--">--</option>		
				</select><br> 
				<strong>Selecione um tema</strong>:
				<select name="tema" id='tema'>
					<option value="--">--</option>		
				</select><br>		    
				<strong>Selecione uma questao</strong>:
				<select name="questao" id='questao'>
					<option value="--">--</option>		
				</select><br>		    

			</div>
		    <div class="col-sm">
		      	Resultados
				<svg width="500" height="400"></svg>
		    </div>
		    <div class="col-sm">
				Questoes
				<div id="ajaxGetUserServletResponse"></div>
		    </div>
		  </div>
		</div>
	</form>
</body>
</html>