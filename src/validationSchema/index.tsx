import * as Yup from "yup";

export const OrganiserUpdateSchema = Yup.object({
    organiser_name: Yup.string()
        .max(50, "Organiser name must not be greater than 50 characters.")
        .required("Organiser name is required."),
    organiser_phone_no: Yup.string()
        .max(
            15,
            "Organiser phone number must not be greater than 15 characters."
        )
        .required("Organiser phone number is required."),
    business_name: Yup.string()
        .max(50, "Business name must not be greater than 50 characters.")
        .required("Business name is required."),
    business_type: Yup.string()
        .max(50, "Business type must not be greater than 50 characters.")
        .required("Business type is required."),
    business_number: Yup.string()
        .max(10, "Business number must not be greater than 10 characters.")
        .required("Business number is required."),
    business_address: Yup.string()
        .max(50, "Business address must not be greater than 50 characters.")
        .required("Business address is required."),
    organiser_description: Yup.string()
        .max(
            255,
            "Organiser description must not be greater than 255 characters."
        )
        .required("Organiser description is required."),
    bank_name: Yup.string()
        .max(50, "Bank name must not be greater than 50 characters.")
        .required("Bank name is required."),
    bsb_number: Yup.string()
        .max(15, "Bsb number must not be greater than 15 characters.")
        .required("Bsb number is required."),
    bank_account_number: Yup.string()
        .max(20, "Bsb number must not be greater than 20 characters.")
        .required("Bsb number is required."),
    organiser_email: Yup.string()
        .max(255, "Organiser email must not be greater than 255 characters.")
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
            "Organiser email must be a valid email address."
        )
        .required("Organiser email is required."),
});

export const AdminLoginSchema = Yup.object({
    email: Yup.string()
        .max(255, "Email must not be greater than 255 characters.")
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
            "Email must be a valid email address."
        )
        .required("Email is required."),
    password: Yup.string()
        .max(255, "Password must not be greater than 255 characters.")
        .required("Password is required."),
});

export const UserRegisterSchema = Yup.object({
    firstname: Yup.string().max(50, "First name must not be greater than 50 characters.").required("First name is required."),
    lastname: Yup.string().max(50, "Last name must not be greater than 50 characters.").required("Last name is required."),
    state: Yup.string().max(50, "State must not be greater than 50 characters.").required("State is required."),
    city: Yup.string().max(50, "City must not be greater than 50 characters.").required("City is required."),
    address: Yup.string().max(255, "Address must not be greater than 255 characters.").required("Address is required."),
    email: Yup.string().max(255, "Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "Email must be a valid email address.").required("Email is required."),

    phone_number: Yup.number().min(6, 'Please enter a valid phone number').required('Please enter phone number'),
    postcode: Yup.number().min(3, 'Please enter a valid post code').required("Post Code is required."),
    password: Yup.string().max(20, "Password must not be less than 20 characters.").required("Password is required."),
    confirm_password: Yup.string().oneOf([Yup.ref("password")], "Password and Confirm Password did not Match"),
});

// export const UserSheatBookingSchema = Yup.object({
//     categoryId: Yup.string().required("Category is required."),
//     eventId: Yup.string().required("Event is required."),
//     userId: Yup.string().required("User is required."),
// });

export const UserLoginSchema = Yup.object({
    email: Yup.string().max(255, "Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "Email must be a valid email address.").required("Email is required."),
    password: Yup.string().max(255, "Password must not be greater than 4 characters.").required("Password is required."),
});
