// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const treeViewSchema = new Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//   },
//   Id: {
//     type: String,
//     required: true,
//   },
//   Name: {
//     type: String,
//     required: true,
//   },
//   // ParentId: {
//   //   type: String,
//   //   default: null, // For hierarchical structures, parent ID can be null for root nodes
//   // },
//   // isActive: {
//   //   type: Boolean,
//   //   default: true,
//   // },
//   // dateCreated: {
//   //   type: Date,
//   //   default: Date.now,
//   // },
// });

// const TreeView = mongoose.model('treeview', treeViewSchema);

// module.exports = TreeView;