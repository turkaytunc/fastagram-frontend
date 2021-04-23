import Joi from 'joi';

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(30).required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .message('invalid password length or type'),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(30).required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .message('invalid password length or type'),
});

export const signupValidator = (username: string, password: string, email: string) =>
  signupSchema.validateAsync({ username, password, email });
export const loginValidator = (username: string, password: string) =>
  loginSchema.validateAsync({ username, password });
