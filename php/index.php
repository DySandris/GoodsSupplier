<?php
$db = new PDO('mysql:host=localhost;dbname=your_db', 'username', 'password');

// Get Pakistani categories
$pakistani = $db->query("SELECT * FROM categories WHERE section = 'pakistani'")->fetchAll();

// Get International categories
$international = $db->query("SELECT * FROM categories WHERE section = 'international'")->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>GoodsSupplier</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }
        .section-header {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 40px;
        }
        .category-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-decoration: none;
            color: #333;
            transition: all 0.3s;
        }
        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .pakistani-section .category-card {
            background: #e6f7ee;
            border-left: 4px solid #28a745;
        }
        .international-section .category-card {
            background: #e6f0ff;
            border-left: 4px solid #007bff;
        }
        @media (max-width: 600px) {
            .category-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
        }
    </style>
</head>
<body>
    <!-- Pakistani Section -->
    <div class="section-header pakistani-section">
        <h1>BePakistaniBuyPakistani</h1>
        <p>Support Local Businesses & Manufacturers</p>
    </div>
    
    <div class="category-grid pakistani-section">
        <?php foreach ($pakistani as $cat): ?>
        <a href="category.php?id=<?= $cat['id'] ?>" class="category-card" target="_blank"><?= $cat['name'] ?></a>
        <?php endforeach; ?>
    </div>

    <!-- International Section -->
    <div class="section-header international-section">
        <h1>DySandris</h1>
        <p>Global Products & International Brands</p>
    </div>
    
    <div class="category-grid international-section">
        <?php foreach ($international as $cat): ?>
        <a href="category.php?id=<?= $cat['id'] ?>" class="category-card" target="_blank"><?= $cat['name'] ?></a>
        <?php endforeach; ?>
    </div>
</body>
</html>