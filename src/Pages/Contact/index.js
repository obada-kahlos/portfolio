import emailjs from '@emailjs/browser';
import * as yup from 'yup'
import Swal from 'sweetalert2';
export const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("email is required"),
    message: yup.string().required('message is required')
});

export const initialValues ={
    name : '',
    email : '',
    message : '',
}
export const handleSendEmail = (e) => {
    emailjs.send('service_3cp3xmu','template_okwbtzk',e,'LlpXNouu6DDQA9O1l'
    ).then(res => {
        if(res.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }).catch((  ) => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }) 
}