const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//--Get--//
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//--Get--//
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
 try {
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product, 
      attributes: ['product_name', 'price', 'stock'],
    }]
  });
  if (!categoryData) {
    res.status(404).json({ message: 'No category found with this ID' });
    return;
  }

  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

//--Post--//
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//-- Put--//
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//--Delete--//
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
