import { z } from "zod";

export const schema = z.object({
  type: z.string(),
  product: z.string().min(1, "El campo no puede estar vacío"),
  money: z.preprocess(
    (val) => (typeof val === "string" ? parseFloat(val) : val),
    z.number({ invalid_type_error: "El valor no es un número" }).min(1, "El monto no puede ser '0' o negativo")
  ),
});

export type FormValues = z.infer<typeof schema>;
