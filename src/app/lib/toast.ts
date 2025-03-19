import { toast } from "sonner";

export const showToast = {
  success: (message: string) => toast.success(message),
  error: (message: string) =>
    toast.error(message, { duration: 5000, position: "top-right" }),
  info: (message: string) => toast.info(message),
  warning: (message: string) => toast.warning(message),
};
