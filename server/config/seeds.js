const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Pots & Planters' },
    { name: 'Garden Decor' },
    { name: 'Flower Seeds' },
    { name: 'Indoor Garden' },
    { name: 'Garden Tools' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Self-Watering Hanging Basket',
      description:
        'With a surface texture that resembles woven wicker, this hanging basket adds interest to flower and foliage displays without detracting from plants. The built-in self-watering feature includes a water reservoir with an easy-fill water port that lets you monitor the water level and allows excess water to drain. Water in the reservoir provides a constant supply of moisture to roots, helping eliminate cycles of over- and under-watering that can stress plants.',
      image: 'hanging-basket.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Small Modern Flower Pots',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'modern-flower-pot.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Large Pattern Flower Pot',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'patternpot.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 50
    },
    {
      name: 'Window Shadow Box',
      description:
        'Dress up your home with these elegant window boxes. With clean lines and raised panel detailing, they have the look of fine woodworking. But unlike wooden window boxes these are virtually maintenance free because theyre made from high quality polyethylene — theres no need for annual painting or staining. With the best UV protection in the industry, these window boxes have a 15-year guarantee against fading. Theyre self-watering, too. Just fill the reservoirs and the planters deliver water to plants as they need it, for healthy, lush flowers and foliage. High quality, UV-protected polyethylene.',
      image: 'window-shadow-box.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Modern Arbor',
      category: categories[1]._id,
      description:
        'Featured in iconic public gardens, the grand Gracie Modern Arbor creates a stunning sculptural garden gateway whether supporting plants or left bare. It is designed and hand-crafted in the U.S. from steel stainless steel cable, finished in brilliant water-resistant powder-coated steel colors or a natural oxide patina. This contemporary moon gate is as sturdy as it is striking and doubles as a beautiful garden sculpture when plants are dormant. Train everything from climbing roses, clematis or sweet peas to squash, cherry tomatoes or cucumber. Base plate can be bolted to hardscape or staked into ground to create floating circle effect. Simple assembly.',
      image: 'arbor.jpg',
      price: 199.99,
      quantity: 20
    },
    {
      name: 'Flamingo',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'flamingo.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Garden Water Fountain',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'fountain.jpg',
      price: 299.99,
      quantity: 20
    },
    {
      name: 'OutDoor Lights',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'outdoorlights.jpg',
      price: 29.99,
      quantity: 20
    },
    {
      name: 'Black Purple Phantom Petunia Flower Sees',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'flower.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Red Roses Seeds',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'roses.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Sun Flower Seeds',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'sunflower.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Pink Geranium Seeds',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'pinkflower.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Micro Grow Light Garden',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'light.jpg',
      price: 49.99,
      quantity: 50
    },
    {
      name: 'Fish Flower Tank',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'fishpot.jpg',
      price: 49.99,
      quantity: 10
    },
    {
      name: 'Wall Pot',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'wallpot.jpg',
      price: 79.99,
      quantity: 30
    },
    {
      name: 'Indoor Gold Pot',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'goldpot.jpg',
      price: 89.99,
      quantity: 30
    },
    {
      name: 'Hand Pruner',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'hand-pruner.jpg',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Round Shovel',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'shovel.jpg',
      price: 49.99,
      quantity: 100
    },
    {
      name: 'Lightweight Steel Rake',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'rake.jpg',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'Jackson Wheelbarrow',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'wheelbarrow.jpg',
      price: 149.99,
      quantity: 20
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
