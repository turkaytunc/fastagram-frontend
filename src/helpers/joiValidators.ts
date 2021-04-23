import Joi from 'joi';

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).message('invalid password'),

  repeatPassword: Joi.ref('password'),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

export const registerValidator = (username: string, password: string, repeatPassword: string) =>
  registerSchema.validateAsync({ username, password, repeatPassword });
export const loginValidator = (username: string, password: string) =>
  registerSchema.validateAsync({ username, password });
