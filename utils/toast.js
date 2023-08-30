import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) => {
    toast.success(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

const notifyError = (message) => {
    toast.error(message, {
        position:'top-center',
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined
    })
}

<ToastContainer 
    position='top-center'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    rtl={false}
/>

export { notifyError, notifySuccess }