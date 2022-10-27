import axios from "axios";

const API_URL = "http://127.0.0.1:8000"

export const useGetlistadoProductos = async () => {
	const responde = await axios.get(
		`${API_URL}/api/producto/`,
	);

	return responde.data
};

export const useGetListadoCLiente = async () => {
	const responde = await axios.get(
		`${API_URL}/api/cliente/`,
	);

	return responde.data
}
export const useGetListadoTecnico = async () => {

	const responde = await axios.get(`${API_URL}/api/tecnico/`,
	);
	return responde.data
}

export const useGetListadoPrioridad = async () => {

	const responde = await axios.get(`${API_URL}/api/prioridad/`,
	);
	return responde.data
}



export const createIncidencia = async (cliente) => {

	try {
		console.log(cliente)
		const responde = await axios({
			url: `${API_URL}/api/cliente/`,
			method: 'POST',
			data: cliente,
		})

		return responde
	} catch (error) {

	}

};

export const LogeaUsuario = async (login) => {

	try {
		console.log(cliente)
		const responde = await axios({
			url: `${API_URL}/api_generate_token/`,
			method: 'POST',
			data: cliente,
		})

		return responde
	} catch (error) {

	}

};