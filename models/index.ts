import CoverageAreasModel from "./CoverageAreas";
import QuotesModel from "./Quotes";
import TrackingHistoryModel from "./TrackingHistory";
import PackageDetailModel from "./PackageDetail";

// 🔥 INIT MODEL DULU

const CoverageAreas = CoverageAreasModel;
const Quotes = QuotesModel;
const TrackingHistory = TrackingHistoryModel;
const PackageDetails = PackageDetailModel;

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
}

// 🔥 JALANKAN SEKALI
initRelations();

export { CoverageAreas, Quotes, TrackingHistory };
