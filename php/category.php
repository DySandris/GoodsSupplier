<?php
$db = new PDO('mysql:host=localhost;dbname=your_db', 'username', 'password');
$category_id = $_GET['id'];

// Get category info
$category = $db->prepare("SELECT * FROM categories WHERE id = ?");
$category->execute([$category_id]);
$category = $category->fetch();

// Get products
$products = $db->prepare("SELECT * FROM products WHERE category_id = ?");
$products->execute([$category_id]);
$products = $products->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title><?= $category['name'] ?> | GoodsSupplier</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }
        .category-header {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        .product-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: all 0.3s;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .product-info {
            padding: 15px;
        }
        .product-price {
            font-weight: bold;
            color: #007bff;
            margin-top: 10px;
        }
        @media (max-width: 600px) {
            .product-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
            .product-image {
                height: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="category-header">
        <h1><?= $category['name'] ?></h1>
        <p><?= $category['description'] ?></p>
    </div>
    
    <div class="product-grid">
        <?php foreach ($products as $product): ?>
        <div class="product-card">
            <img src="uploads/<?= $product['image'] ?>" class="product-image">
            <div class="product-info">
                <h3><?= $product['name'] ?></h3>
                <p><?= $product['description'] ?></p>
                <div class="product-price">$<?= number_format($product['price'], 2) ?></div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</body>
</html>