import { body } from "express-validator"

export const signupValidater=[
    body("name")
    .notEmpty()
    .withMessage("Name is required"),

    body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

    body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8, max: 16 })
    .withMessage("Password must be between 8 and 16 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|]/)
    .withMessage("Password must contain at least one special character"),

    body("address")
        .notEmpty()
        .withMessage("Address is required")
        .isLength({ max: 400 })
        .withMessage("Address cannot exceed 400 characters")
]