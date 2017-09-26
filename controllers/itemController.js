const mongoose = require('mongoose'),
      Item = mongoose.model('items')

// ALL ITEMS
exports.list_all_items = (req, res) => {
  Item.paginate({}, { limit: 30 }, (err, items) => {
    if (err) {
      res.send(err)
    } else {
      res.json({
        items: items.docs,
        paginationInfo: {
          totalResult: items.total,
          resultPerPage: items.limit,
          currentPage: items.page,
          pages: items.pages
        }
      })
    }
  })
}

exports.create_an_item = (req, res) => {
  let new_item = new Item(req.body)
  new_item.save((err, item) => {
    if (err) {
      res.send(err)
    } else {
      res.json(item)
    }
  })
}

exports.show_an_item = (req, res) => {
  Item.findOne(req.params.ItemId, (err, item) => {
    if (err) {
      res.send(err)
    } else {
      res.json(item)
    }
  })
}

exports.update_an_item = (req, res) => {
  Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, (err, item) => {
    if (err) {
      res.send(err)
    } else {
      res.json(item)
    }
  })
}

exports.delete_an_item = (req, res) => {
  Item.remove({_id: req.params.itemId}, (err, item) => {
    if (err) {
      res.send(err)
    }
  })
}
