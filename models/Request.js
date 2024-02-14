import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending',
    },
  },
  { timestamps: true }
);

const Request = mongoose.model('Request', RequestSchema);
export default Request;
