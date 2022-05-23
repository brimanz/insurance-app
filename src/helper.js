//year diference

export function obtenerDiferenciaYear(year){
	return new Date().getFullYear() - year;
}


//total paid for region
export function calcularMarca(marca){
	let incremento;

	switch(marca){
		case 'europeo':
			incremento = 1.30;
			break;

		case 'americano':
			incremento = 1.15;
			break;

		case 'asiatico':
			incremento = 1.05;
			break;

		default:
			break;	
	}

	return incremento;
}


//total paid for plan
export function calcularPlan(plan){
	let incrementoPlan;

	switch(plan){
		case 'basico':
			incrementoPlan = 1.20;
			break;

		case 'completo':
			incrementoPlan = 1.50;
			break;

		default:
			break;	
	}

	return incrementoPlan;
}