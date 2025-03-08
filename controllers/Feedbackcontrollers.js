import express from "express";
import nodemailer from "nodemailer";
import sendEmail from "../utils/sendEmail.js";


export const getFeedback = (req, res) => {
    res.render("Feedback");
}

export const createFeedback = (req,res)=>{
    try {
        const {name,email,feedback,ratings} = req.body;
        sendEmail({
            name,
            email,
            feedback,
            ratings
        });
        res.status(200).json({
            success:true,
            message:"Email sent successfully"
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error sending email"
        });
    }
}