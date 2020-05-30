const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  roles: {
    type: [String],
    required: true,
    default: ['USER']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{ collection: 'users' });

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 11);
  this.password = hash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
