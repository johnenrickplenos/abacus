<?php
/* Add the undescore case of the controller, no need to specify crud operations*/
$apiResources = [
  'modules',
  'business_type',
  'company',
  'company_logo',
  'company_branch',
  'company_branch_employee',
  'position',
  'api_test_results',
  'account',
  'account_type',
  'account_information',
  'account_profile_picture',
  'product',
  'order',
  'order_product',
  'product_category',
  'discount',
  'ingredient',
  'ingredient_supply',
  'product_ingredient',
  'production_count',
  'quantity_adjustment_type',
  'product_quantity_adjustment',
  'bus',
  'bus_type',
  'route',
  'route_stop',
  'bus_trip',
  'bus_trip_ticket',
  'void_bus_trip_ticket'
];
api_resource($apiResources);
$customAPIResources = [
  'order_product/productSalesSummary',
  'order/dailySalesReport',
  'bus_trip_ticket/dailySalesReport',
  'bus_trip/routeSalesSummary',
  'bus_trip/busColectionSummary',
  'bus_trip/routeDailySales',
];
custom_api($customAPIResources)
?>