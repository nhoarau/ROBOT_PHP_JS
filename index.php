<link rel="stylesheet" href="styles/styles.css">
<script src="scripts/script.js"></script>
<script src="scripts/jquery.js"></script>
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
<div class="footer">
    <button id="getPosition">Nouvelle position</button>
    <button id="getMovements">Récupérer séquence de déplacement</button>
    <button id="launchMovements">Lancer déplacement</button>
</div>

