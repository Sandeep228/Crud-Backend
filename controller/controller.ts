import { Request, Response } from 'express';
import ItemModel from '../models/ItemSchema';
import nodemailer from 'nodemailer';

// Create
async function createItem(req: Request, res: Response) {
  try {
    const newItem = new ItemModel(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// Read
async function getItems(req: Request, res: Response) {
  try {
    const items = await ItemModel.find();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Update
async function updateItem(req: Request, res: Response) {
  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// Delete
async function deleteItem(req: Request, res: Response) {
  try {
    await ItemModel.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// Mail
async function sendMail(req: Request, res: Response) {
  try {
    const { selectedRows } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'destiney.borer15@ethereal.email',
        pass: 'CJphwCnj3RFzkseYWP',
      },
    });

    const mailOptions = {
      from: 'sd769113@gmail.com',
      to: 'sandeep.k.srivastava1@gmail.com',
      subject: selectedRows,
      text: 'Body of the email',
      html: '<b>Hello </b>',
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully. MessageId:', info.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: `Failed to send email. ${error.message}` });
  }
}

export { getItems, deleteItem, updateItem, createItem, sendMail };

