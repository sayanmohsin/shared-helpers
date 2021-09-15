
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.0.2
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */
Prisma.prismaVersion = {
  client: "3.0.2",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Basket_daily_totalsScalarFieldEnum = makeEnum({
  id: 'id',
  delivery_date: 'delivery_date',
  daily_totals: 'daily_totals',
  daily_indexes: 'daily_indexes',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Basket_line_item_competitor_equivalentsScalarFieldEnum = makeEnum({
  id: 'id',
  competitor_price: 'competitor_price',
  basket_line_item_id: 'basket_line_item_id',
  competitor_id: 'competitor_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Basket_line_item_recommended_pricesScalarFieldEnum = makeEnum({
  id: 'id',
  recommended_price: 'recommended_price',
  basket_line_item_id: 'basket_line_item_id',
  price_recommendation_id: 'price_recommendation_id'
});

exports.Prisma.Basket_line_itemsScalarFieldEnum = makeEnum({
  id: 'id',
  quantity: 'quantity',
  basket_id: 'basket_id',
  product_sku: 'product_sku',
  created_at: 'created_at',
  updated_at: 'updated_at',
  competitor_indexes: 'competitor_indexes',
  competitor_prices: 'competitor_prices',
  goodfood_price: 'goodfood_price'
});

exports.Prisma.BasketsScalarFieldEnum = makeEnum({
  id: 'id',
  goodfood_id: 'goodfood_id',
  delivery_date: 'delivery_date',
  basket_totals: 'basket_totals',
  basket_indexes: 'basket_indexes',
  created_at: 'created_at',
  updated_at: 'updated_at',
  region_id: 'region_id',
  basket_daily_total_id: 'basket_daily_total_id'
});

exports.Prisma.Competitor_region_dataScalarFieldEnum = makeEnum({
  id: 'id',
  competitor_id: 'competitor_id',
  region_id: 'region_id',
  should_scrape: 'should_scrape',
  should_include_in_recommendation_calculation: 'should_include_in_recommendation_calculation'
});

exports.Prisma.CompetitorsScalarFieldEnum = makeEnum({
  id: 'id',
  slug: 'slug',
  display_text: 'display_text'
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  timestamp: 'timestamp',
  name: 'name'
});

exports.Prisma.Price_recommendationsScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  region_id: 'region_id',
  sale_price: 'sale_price',
  list_price: 'list_price',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Product_region_competitor_urlsScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  region_id: 'region_id',
  competitor_id: 'competitor_id',
  url: 'url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Product_region_competitor_urls_former_urlsScalarFieldEnum = makeEnum({
  product_region_competitor_url_id: 'product_region_competitor_url_id',
  old_url: 'old_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  id: 'id'
});

exports.Prisma.Product_region_price_dataScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  region_id: 'region_id',
  price: 'price',
  discount: 'discount',
  threshold_price: 'threshold_price',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  sku: 'sku',
  name: 'name',
  package_quantity: 'package_quantity',
  package_units: 'package_units',
  package_weight: 'package_weight',
  weight_unit_id: 'weight_unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.RegionsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  facility: 'facility',
  city: 'city',
  province: 'province',
  postal_code: 'postal_code',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Scaled_pricesScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  competitor_id: 'competitor_id',
  region_id: 'region_id',
  scrape_result_id: 'scrape_result_id',
  competitor_scaled_price: 'competitor_scaled_price',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Scrape_result_product_region_competitor_urlScalarFieldEnum = makeEnum({
  id: 'id',
  scrape_result_id: 'scrape_result_id',
  product_region_competitor_url_id: 'product_region_competitor_url_id'
});

exports.Prisma.Scrape_resultsScalarFieldEnum = makeEnum({
  id: 'id',
  competitor_sale_price: 'competitor_sale_price',
  competitor_list_price: 'competitor_list_price',
  competitor_sold_by_volume: 'competitor_sold_by_volume',
  competitor_sold_by_unit_id: 'competitor_sold_by_unit_id',
  promotional_info: 'promotional_info',
  data_source: 'data_source',
  scrape_time: 'scrape_time',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.UnitsScalarFieldEnum = makeEnum({
  id: 'id',
  slug: 'slug',
  display_text: 'display_text',
  base_unit_id: 'base_unit_id',
  scale_of_base_unit: 'scale_of_base_unit'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});


exports.Prisma.ModelName = makeEnum({
  basket_daily_totals: 'basket_daily_totals',
  basket_line_item_competitor_equivalents: 'basket_line_item_competitor_equivalents',
  basket_line_item_recommended_prices: 'basket_line_item_recommended_prices',
  basket_line_items: 'basket_line_items',
  baskets: 'baskets',
  competitor_region_data: 'competitor_region_data',
  competitors: 'competitors',
  migrations: 'migrations',
  price_recommendations: 'price_recommendations',
  product_region_competitor_urls: 'product_region_competitor_urls',
  product_region_competitor_urls_former_urls: 'product_region_competitor_urls_former_urls',
  product_region_price_data: 'product_region_price_data',
  products: 'products',
  regions: 'regions',
  scaled_prices: 'scaled_prices',
  scrape_result_product_region_competitor_url: 'scrape_result_product_region_competitor_url',
  scrape_results: 'scrape_results',
  units: 'units'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
