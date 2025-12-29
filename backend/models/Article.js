const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        url: String,
        optimizedContent: String,
        references: [String],
    },
    {timestamps: true}
);

module.exports = mongoose.model('Article', ArticleSchema);