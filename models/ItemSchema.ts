import { Document, model, Schema } from 'mongoose';

interface Item extends Document {
  name?: string;
  phoneNumber?: string;
  email?: string;
  hobbies?: string;
}

const ItemSchema = new Schema<Item>({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  hobbies: {
    type: String,
  },
});

const ItemModel = model<Item>('Item', ItemSchema);

export default ItemModel;
