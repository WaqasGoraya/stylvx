import * as Yup from 'yup';

export const registerSchema = Yup.object({
    firstname: Yup.string().required('First name is required').max(20,'Cannot Exceed 20 Characters').min(3,'Too Short!'),
    lastname: Yup.string().required('Last name is required').max(20,'Cannot Exceed 20 Characters').min(3,'Too Short!'),
    email: Yup.string().required('Email is required').email('Invalid Email Address!'),
    password: Yup.string().required('Password is required').min(8,'Password Too Short!').max(20,'Password Too Long!'),
    password_confirm: Yup.string().required('Confirm Password is required').oneOf([Yup.ref("password"), null], "Password and Confirm Password doesn't match"),
});

export const loginSchema = Yup.object({
    email: Yup.string().email('Invalid Email Address').required('Email is required'),
    password: Yup.string().required('Password is required')
});

export const resetPasswordSchema = Yup.object({
    password: Yup.string().required('Password is required').min(8,'Password Too Short!').max(20,'Password to long'),
    password_confirm: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'),null],"Password and Confirm Password doesn't match")
});

export const resetpasswordLinkSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Email is Invalid')
});

export const EditUserSchema = Yup.object({
    firstname: Yup.string().required('First name is required').max(20,'Cannot Exceed 20 Characters').min(3,'Too Short!'),
    lastname: Yup.string().required('Last name is required').max(20,'Cannot Exceed 20 Characters').min(3,'Too Short!'),
    email: Yup.string().required('Email is required').email('Invalid Email Address!'),
    role: Yup.string().required('Role is required')

})