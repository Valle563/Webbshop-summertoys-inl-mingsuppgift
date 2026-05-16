import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.min": "Namnet måste vara minst 2 tecken",
    "string.max": "Namnet får vara max 100 tecken",
    "any.required": "Namn är obligatoriskt",
  }),
  price: Joi.number().min(1).required().messages({
    "number.min": "Priset måste vara minst 1 kr",
    "any.required": "Pris är obligatoriskt",
  }),
});

export default productSchema;
