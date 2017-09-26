module.exports = app => {
  const item = require('../controllers/itemController')

  app.route('/items')
    .get(item.list_all_items)
    .post(item.create_an_item)


  app.route('/items/:itemId')
    .get(item.show_an_item)
    .put(item.update_an_item)
    .patch(item.update_an_item)
    .delete(item.delete_an_item)
}
