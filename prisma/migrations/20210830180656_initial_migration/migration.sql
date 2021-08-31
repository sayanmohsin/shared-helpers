-- CreateTable
CREATE TABLE `basket_daily_totals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `delivery_date` DATE NOT NULL,
    `daily_totals` JSON NOT NULL,
    `daily_indexes` JSON NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basket_line_item_competitor_equivalents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `competitor_price` FLOAT,
    `basket_line_item_id` INTEGER NOT NULL,
    `competitor_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_basket_line_item_basket_line_item_equivalent`(`basket_line_item_id`),
    INDEX `fk_basket_line_item_competitor`(`competitor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basket_line_item_recommended_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recommended_price` DOUBLE NOT NULL,
    `basket_line_item_id` INTEGER NOT NULL,
    `price_recommendation_id` INTEGER,

    INDEX `fk_blirp_bli`(`basket_line_item_id`),
    INDEX `fk_blirp_rp`(`price_recommendation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basket_line_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `basket_id` INTEGER NOT NULL,
    `product_sku` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `competitor_indexes` JSON,
    `competitor_prices` JSON,
    `goodfood_price` FLOAT NOT NULL,

    INDEX `fk_basket_line_item_product`(`product_sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `baskets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goodfood_id` INTEGER NOT NULL,
    `delivery_date` DATE NOT NULL,
    `basket_totals` JSON,
    `basket_indexes` JSON,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `region_id` INTEGER NOT NULL,
    `basket_daily_total_id` INTEGER NOT NULL,

    INDEX `fk_basket_basket_daily_total`(`basket_daily_total_id`),
    INDEX `fk_basket_region`(`region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `competitor_region_data` (
    `competitor_id` INTEGER NOT NULL,
    `region_id` INTEGER NOT NULL,
    `should_scrape` BOOLEAN NOT NULL DEFAULT true,
    `should_include_in_recommendation_calculation` TINYINT,

    INDEX `fk_crd_competitor`(`competitor_id`),
    INDEX `fk_crd_region`(`region_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `competitors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(25) NOT NULL,
    `display_text` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_recommendations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `region_id` INTEGER NOT NULL,
    `sale_price` DOUBLE NOT NULL,
    `list_price` DOUBLE NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_pr_product`(`product_id`),
    INDEX `fk_pr_region`(`region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_region_competitor_urls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `region_id` INTEGER NOT NULL,
    `competitor_id` INTEGER NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    INDEX `fk_prcu_competitor`(`competitor_id`),
    INDEX `fk_prcu_region`(`region_id`),
    UNIQUE INDEX `competitor_product_region_unique`(`product_id`, `competitor_id`, `region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_region_competitor_urls_former_urls` (
    `product_region_competitor_url_id` INTEGER NOT NULL,
    `old_url` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `fk_old_url_url`(`product_region_competitor_url_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_region_price_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `region_id` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `discount` DOUBLE NOT NULL,
    `threshold_price` DOUBLE,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    INDEX `fk_prpd_region`(`region_id`),
    UNIQUE INDEX `price_date_product_region_unique`(`product_id`, `region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(50),
    `name` TEXT,
    `package_quantity` INTEGER,
    `package_units` TEXT,
    `package_weight` DOUBLE,
    `weight_unit_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    UNIQUE INDEX `products.sku_unique`(`sku`),
    INDEX `fk_p_weight_unit`(`weight_unit_id`),
    INDEX `product_sku_idx`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100),
    `facility` VARCHAR(100),
    `city` VARCHAR(50),
    `province` VARCHAR(20),
    `postal_code` VARCHAR(10),
    `is_active` BOOLEAN,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scaled_prices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `competitor_id` INTEGER NOT NULL,
    `region_id` INTEGER NOT NULL,
    `scrape_result_id` INTEGER NOT NULL,
    `competitor_scaled_price` DOUBLE,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    INDEX `fk_sp_competitor`(`competitor_id`),
    INDEX `fk_sp_product`(`product_id`),
    INDEX `fk_sp_region`(`region_id`),
    INDEX `fk_sp_scrape_result`(`scrape_result_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scrape_result_product_region_competitor_url` (
    `scrape_result_id` INTEGER NOT NULL,
    `product_region_competitor_url_id` INTEGER NOT NULL,

    INDEX `fk_srpcu_scrape_result`(`scrape_result_id`),
    INDEX `fk_srpcu_url`(`product_region_competitor_url_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scrape_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `competitor_sale_price` DOUBLE,
    `competitor_list_price` DOUBLE,
    `competitor_sold_by_volume` DOUBLE,
    `competitor_sold_by_unit_id` INTEGER NOT NULL,
    `promotional_info` VARCHAR(255),
    `data_source` VARCHAR(100),
    `scrape_time` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0),

    INDEX `fk_sr_competitor_sold_by_unit`(`competitor_sold_by_unit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `units` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(25) NOT NULL,
    `display_text` VARCHAR(50) NOT NULL,
    `base_unit_id` INTEGER NOT NULL,
    `scale_of_base_unit` DOUBLE NOT NULL,

    INDEX `fk_u_base_unit`(`base_unit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `basket_line_item_competitor_equivalents` ADD FOREIGN KEY (`basket_line_item_id`) REFERENCES `basket_line_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `basket_line_item_competitor_equivalents` ADD FOREIGN KEY (`competitor_id`) REFERENCES `competitors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `basket_line_item_recommended_prices` ADD FOREIGN KEY (`basket_line_item_id`) REFERENCES `basket_line_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `baskets` ADD FOREIGN KEY (`basket_daily_total_id`) REFERENCES `basket_daily_totals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `baskets` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competitor_region_data` ADD FOREIGN KEY (`competitor_id`) REFERENCES `competitors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competitor_region_data` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_recommendations` ADD FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_recommendations` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_competitor_urls` ADD FOREIGN KEY (`competitor_id`) REFERENCES `competitors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_competitor_urls` ADD FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_competitor_urls` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_competitor_urls_former_urls` ADD FOREIGN KEY (`product_region_competitor_url_id`) REFERENCES `product_region_competitor_urls`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_price_data` ADD FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_region_price_data` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD FOREIGN KEY (`weight_unit_id`) REFERENCES `units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scaled_prices` ADD FOREIGN KEY (`competitor_id`) REFERENCES `competitors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scaled_prices` ADD FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scaled_prices` ADD FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scaled_prices` ADD FOREIGN KEY (`scrape_result_id`) REFERENCES `scrape_results`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scrape_result_product_region_competitor_url` ADD FOREIGN KEY (`product_region_competitor_url_id`) REFERENCES `product_region_competitor_urls`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scrape_result_product_region_competitor_url` ADD FOREIGN KEY (`scrape_result_id`) REFERENCES `scrape_results`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scrape_results` ADD FOREIGN KEY (`competitor_sold_by_unit_id`) REFERENCES `units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `units` ADD FOREIGN KEY (`base_unit_id`) REFERENCES `units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
