import Swal from 'sweetalert2';

const optionsAlert = {
	title: 's',
	html: 's',
	customClass: {
		confirmButton: 'btn btn-info mx-1',
		cancelButton: 'btn btn-danger mx-1',
	},
	buttonsStyling: false,
};

const extend = (...args) => args.reduce((a, b) => Object.assign(a, b), {});

const swalAlertConfirm = (message, title) => {
	const selectOptions = {
		title: title || optionsAlert.title,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Confirmar',
		cancelButtonText: 'Cancelar',
		html: message,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return Swal.fire(currentOptions);
};

const swalAlertInfo = (message, title) => {
	const selectOptions = {
		title: title || optionsAlert.title,
		icon: 'info',
		showCancelButton: false,
		confirmButtonText: 'Ok',
		html: message,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return Swal.fire(currentOptions);
};
const swalAlertOk = (message, title, messageButton) => {
	const selectOptions = {
		title: title || optionsAlert.title,
		icon: 'success',
		showCancelButton: false,
		confirmButtonText: messageButton,
		html: message,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return Swal.fire(currentOptions);
};
const swalAlertAceptar = (message, title) => {
	const selectOptions = {
		title: title || optionsAlert.title,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		html: message,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return Swal.fire(currentOptions);
};
export { swalAlertConfirm, swalAlertInfo, swalAlertOk, swalAlertAceptar };
