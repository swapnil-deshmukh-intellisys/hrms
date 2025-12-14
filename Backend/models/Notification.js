const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  recipient: { type: String, default: 'all' }, // 'all' or specific userId
  type: { type: String, default: 'general' }, // 'leave', 'resignation', 'attendance', 'general'
  actionRoute: String, // Route to navigate when clicked (e.g., '/leaves-approval')
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
