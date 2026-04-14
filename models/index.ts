import CoverageAreasModel from "./CoverageAreas";
import QuotesModel from "./Quotes";
import TrackingHistoryModel from "./TrackingHistory";
import PackageDetailModel from "./PackageDetail";
import CarrierModel from "./Carriers";
import ShippingRatesModel from "./ShippingRates";

// 🔥 INIT MODEL DULU

const CoverageAreas = CoverageAreasModel;
const Quotes = QuotesModel;
const TrackingHistory = TrackingHistoryModel;
const PackageDetails = PackageDetailModel;
const Carriers = CarrierModel;
const ShippingRates = ShippingRatesModel;

// ================= RELATIONS ================= //

function initRelations() {
  // 🔥 Quotes -> CoverageAreas
  Quotes.belongsTo(CoverageAreas, {
    foreignKey: "suburb_origin",
    targetKey: "area_code",
    as: "originArea",
  });

  Quotes.belongsTo(CoverageAreas, {
    foreignKey: "suburb_destination",
    targetKey: "area_code",
    as: "destinationArea",
  });

  // 🔥 TrackingHistory -> Quotes
  TrackingHistory.belongsTo(Quotes, {
    foreignKey: "connote_no",
    targetKey: "connote_no",
    as: "quote",
  });
  // Quotes -> QuoteDetails (1 to many)
  Quotes.hasMany(PackageDetails, {
    foreignKey: "connote_no",
    sourceKey: "connote_no",
    as: "packageDetails",
  });

  PackageDetails.belongsTo(Quotes, {
    foreignKey: "connote_no",
    targetKey: "connote_no",
    as: "quote",
  });
  Carriers.belongsTo(Quotes, {
    foreignKey: "carrier",
    targetKey: "carrier",
    as: "carrier",
  });
  // Relasi: Satu Carrier memiliki banyak Shipping Rates
  Carriers.hasMany(ShippingRates, {
    foreignKey: "carrier_code", // ✅ sesuai field di ShippingRates
    sourceKey: "carrier", // ✅ field di Carriers
    as: "rates",
  });

  ShippingRates.belongsTo(Carriers, {
    foreignKey: "carrier_code", // ✅ FIX
    targetKey: "carrier", // ✅ FIX
    as: "carrier_details",
  });

  // 1. Carriers -> ShippingRates (1 to many)
  Carriers.hasMany(ShippingRates, {
    foreignKey: "carrier_code", // field di ShippingRates
    sourceKey: "carrier_code", // field di Carriers
    as: "rates",
  });

  // 2. ShippingRates -> Carriers (many to 1)
  ShippingRates.belongsTo(Carriers, {
    foreignKey: "carrier_code", // field di ShippingRates
    targetKey: "carrier_code", // field di Carriers
    as: "carrier_details",
  });
}

// 🔥 JALANKAN SEKALI
initRelations();

export { CoverageAreas, Quotes, TrackingHistory, Carriers, ShippingRates };
