import Swal from 'sweetalert2';
import { TYPE_ICON } from './TYPE_ICON';

export const toast = (text: string, icon: TYPE_ICON) => {
  Swal.fire({
    text,
    icon,
    position: 'top-end',
    showConfirmButton: false,
    toast: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
};
