import { object, string, number, date, InferType } from "yup";

const required_message = "Bu alan zorunludur";

const contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string()
    .email("Geçerli bir email adresi belirtin")
    .required(required_message),
  message: string()
    .min(5, "Minimum 5 karakter giriniz...")
    .required(required_message),
});

export default contactSchema;
