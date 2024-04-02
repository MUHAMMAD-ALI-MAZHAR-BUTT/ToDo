import { toast, ToastOptions } from "react-toastify";
const toastOptions: ToastOptions = {
  autoClose: 8000,
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const showToast = (
  text: string,
  type: "success" | "error" | "info" | "warning"
) => {
  switch (type) {
    case "success":
      toast.success(text, toastOptions);
      break;
    case "error":
      toast.error(text, toastOptions);
      break;
    case "info":
      toast.info(text, toastOptions);
      break;
    case "warning":
      toast.warning(text, toastOptions);
      break;
    default:
      break;
  }
};

export default showToast;
