<?php
// Database connection
$db = new PDO('mysql:host=localhost;dbname=your_db', 'username', 'password');

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add_category'])) {
        $stmt = $db->prepare("INSERT INTO categories (name, description, section) VALUES (?, ?, ?)");
        $stmt->execute([$_POST['name'], $_POST['description'], $_POST['section']]);
    }
    
    if (isset($_POST['add_product'])) {
        $image = uploadImage($_FILES['image']);
        $stmt = $db->prepare("INSERT INTO products (category_id, name, description, price, image) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$_POST['category_id'], $_POST['name'], $_POST['description'], $_POST['price'], $image]);
    }
}

function uploadImage($file) {
    $targetDir = "uploads/";
    $fileName = uniqid() . '-' . basename($file["name"]);
    $targetFile = $targetDir . $fileName;
    move_uploaded_file($file["tmp_name"], $targetFile);
    return $fileName;
}

// Fetch existing categories
$categories = $db->query("SELECT * FROM categories")->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
    <style>
        .admin-container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, select, textarea { width: 100%; padding: 8px; }
        .tabs { display: flex; margin-bottom: 20px; }
        .tab { padding: 10px 20px; cursor: pointer; }
        .tab.active { background: #007bff; color: white; }
    </style>
</head>
<body>
    <div class="admin-container">
        <h1>Admin Panel</h1>
        
        <div class="tabs">
            <div class="tab active" onclick="showTab('category')">Add Category</div>
            <div class="tab" onclick="showTab('product')">Add Product</div>
        </div>
        
        <div id="category-tab">
            <h2>Add New Category</h2>
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="description"></textarea>
                </div>
                <div class="form-group">
                    <label>Section</label>
                    <select name="section" required>
                        <option value="pakistani">BePakistaniBuyPakistani</option>
                        <option value="international">DySandris</option>
                    </select>
                </div>
                <button type="submit" name="add_category">Add Category</button>
            </form>
        </div>
        
        <div id="product-tab" style="display:none;">
            <h2>Add New Product</h2>
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Category</label>
                    <select name="category_id" required>
                        <?php foreach ($categories as $cat): ?>
                        <option value="<?= $cat['id'] ?>"><?= $cat['name'] ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="description"></textarea>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" step="0.01" name="price" required>
                </div>
                <div class="form-group">
                    <label>Image</label>
                    <input type="file" name="image" required>
                </div>
                <button type="submit" name="add_product">Add Product</button>
            </form>
        </div>
    </div>

    <script>
        function showTab(tabName) {
            document.getElementById('category-tab').style.display = 'none';
            document.getElementById('product-tab').style.display = 'none';
            document.getElementById(tabName + '-tab').style.display = 'block';
            
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
        }
    </script>
</body>
</html>