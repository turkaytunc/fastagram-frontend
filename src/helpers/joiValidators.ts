import Joi from 'joi';

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(30).required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
    .message('password can only contain alphanumeric characters and minimum of 6 character '),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(30).required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
    .message('password can only contain alphanumeric characters and minimum of 6 character '),
});

export const signupValidator = (username: string, password: string, email: string) =>
  signupSchema.validateAsync({ username, password, email });
export const loginValidator = (username: string, password: string) =>
  loginSchema.validateAsync({ username, password });
