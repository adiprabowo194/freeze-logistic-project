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
  // 1. Quotes -> CoverageAreas
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

  // 2. TrackingHistory -> Quotes
  TrackingHistory.belongsTo(Quotes, {
    foreignKey: "connote_no",
    targetKey: "connote_no",
    as: "quote",
  });

  // 3. Quotes -> PackageDetails (1 to many)
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

  // 4. Carriers -> Quotes (Jika Carriers memang merujuk ke Quotes)
  Carriers.belongsTo(Quotes, {
    foreignKey: "carrier", // Sesuaikan jika kolom di tabel carriers adalah 'carrier'
    targetKey: "carrier", // Sesuaikan jika kolom di tabel quotes adalah 'carrier'
    as: "carrier_quote",
  });

  // 5. Carriers <-> ShippingRates (One to Many)
  // ✅ Definisi CUKUP SEKALI SAJA
  Carriers.hasMany(ShippingRates, {
    foreignKey: "carrier_code", // Kolom di ShippingRates
    sourceKey: "carrier_code", // Kolom di Carriers
    as: "rates",
  });

  ShippingRates.belongsTo(Carriers, {
    foreignKey: "carrier_code", // Kolom di ShippingRates
    targetKey: "carrier_code", // Kolom di Carriers
    as: "carrier_details",
  });
}

// 🔥 JALANKAN SEKALI
initRelations();

export {
  CoverageAreas,
  Quotes,
  TrackingHistory,
  Carriers,
  ShippingRates,
  PackageDetails,
};
