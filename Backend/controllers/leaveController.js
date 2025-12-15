const Leave = require('../models/Leave');
const Notification = require('../models/Notification');

exports.submitLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    
    // Create notification for admin
    await Notification.create({
      recipient: 'all',
      type: 'leave',
      title: 'New Leave Application',
      message: `${req.body.empName || req.body.employeeName || 'An employee'} has submitted a leave application`,
      actionRoute: '/leaves-approval',
      createdAt: new Date()
    });
    
    res.status(200).json({ message: 'Leave submitted successfully' });
  } catch (error) {
    console.error('Error submitting leave:', error);
    res.status(500).json({ message: 'Failed to submit leave', error });
  }
};



