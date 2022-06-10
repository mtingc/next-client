import Swal from 'sweetalert2'

export const Toast = (text, icon) => {
  Swal.fire({
    text,
    icon,
    position: 'top-end',
    showConfirmButton: false,
    toast: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};
