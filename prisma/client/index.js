
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  findSync
} = require('./runtime')

const path = require('path')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.30.2
 * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
 */
Prisma.prismaVersion = {
  client: "2.30.2",
  engine: "b8c35d44de987a9691890b3ddf3e2e7effb9bf20"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


// folder where the generated client is found
const dirname = findSync(process.cwd(), [
  '"prisma/client"',
  '"client"',
], ['d'], ['d'], 1)[0] || __dirname

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


exports.Prisma.ModelName = makeEnum({
  basket_daily_totals: 'basket_daily_totals',
  basket_line_item_competitor_equivalents: 'basket_line_item_competitor_equivalents',
  basket_line_item_recommended_prices: 'basket_line_item_recommended_prices',
  basket_line_items: 'basket_line_items',
  baskets: 'baskets',
  competitors: 'competitors',
  migrations: 'migrations',
  price_recommendations: 'price_recommendations',
  product_region_competitor_urls: 'product_region_competitor_urls',
  product_region_competitor_urls_former_urls: 'product_region_competitor_urls_former_urls',
  product_region_price_data: 'product_region_price_data',
  products: 'products',
  regions: 'regions',
  scaled_prices: 'scaled_prices',
  scrape_results: 'scrape_results',
  units: 'units'
});


/**
 * DMMF
 */

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/sayan/Documents/Codes/pi_v2/shared_helpers/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "binary"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "2.30.2",
  "engineVersion": "b8c35d44de987a9691890b3ddf3e2e7effb9bf20",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql"
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'query-engine-darwin');
path.join(process.cwd(), './prisma/client/query-engine-darwin')
/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './prisma/client/schema.prisma');