import mongoose from 'mongoose';

type UserDocument = mongoose.Document & {
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      minlength: [6, 'must be atleast 6 characters'],
      required: [true, 'Password field required'],
    },
  },
  { timestamps: true },
);

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
