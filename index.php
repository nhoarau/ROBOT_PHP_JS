<link rel="stylesheet" href="styles/styles.css">
<div class="grid">
    <?php for ($i = 0; $i < 10; $i++): ?>
        <div class="row">
            <?php for ($j = 0; $j < 10; $j++): ?>
                <div class="cell" id="<?php echo $i . $j; ?>">
                    <div class="cellContent"><?php echo $i . $j; ?></div>
                </div>
            <?php endfor; ?>
        </div>
    <?php endfor; ?>
</div>
