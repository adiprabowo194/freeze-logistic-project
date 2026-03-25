"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

export default function Home() {
  const [connote, setConnote] = useState("");
  const [preview, setPreview] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  const params = useParams();
  const connoteNo = params.connoteNo as string;
  // 🔥 AUTO FETCH (tanpa klik)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/track/${connoteNo}`);
        const data = await res.json();

        setPreview(data);
      } catch (err) {
        console.error(err);
        setPreview(null);
      } finally {
        setLoading(false);
      }
    };

    if (connoteNo) fetchData();
  }, [connoteNo]);

  // ================= TRACK =================
  const handleTrack = async () => {
    if (!connote.trim()) return;

    const cleanConnote = connote.trim().toUpperCase();

    setSearched(true);
    setLoading(true);

    try {
      const res = await fetch(`/api/track/${cleanConnote}`);

      if (!res.ok) {
        setPreview(null);
        return;
      }

      const data = await res.json();

      console.log("TRACK RESULT:", data);

      // 🔥 validasi data
      if (data && data.connote_no) {
        setPreview(data);
      } else {
        setPreview(null);
      }
    } catch (err) {
      console.error("ERROR:", err);
      setPreview(null);
    } finally {
      setLoading(false);
    }
  };

  // ================= ENTER =================
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

  return (
    <div className="py-8">
      {/* HERO */}
      <section
        className="relative w-full md:py-16 py-8 md:min-h-[580px] min-h-[500px] bg-no-repeat md:bg-center bg-left-top"
        style={{
          backgroundImage: "url('/assets/truck_freeze_logistics.webp')",
        }}
      >
        <div className="absolute inset-0 bg-[#4267D7]/80"></div>

        <div className="absolute inset-0 mx-auto text-center container top-60">
          <div className="md:w-7/8 w-full md:px-10 px-4 mx-auto">
            <h2 className="md:text-5xl text-3xl font-bold text-white w-2/4 mx-auto">
              Track your package in here now !
            </h2>

            {/* INPUT */}
            <div className="md:py-4 py-2 w-full">
              <input
                value={connote}
                onChange={(e) => setConnote(e.target.value.toUpperCase())}
                onKeyDown={handleKeyDown}
                placeholder="Enter Connote Number (e.g. CN123456789)"
                className="w-3/5 mx-auto h-12 text-center bg-amber-50 rounded-full outline-none"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center py-4">
              <button
                onClick={handleTrack}
                disabled={!connote}
                className="bg-amber-400 px-6 py-2 rounded-2xl md:w-60 w-40 text-[#0F253C] hover:bg-[#0F253C] hover:text-white transition disabled:bg-gray-300"
              >
                Track My Delivery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="container mx-auto py-10">
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : preview ? (
          <div className="bg-white rounded-2xl border p-6 w-3/4 mx-auto shadow-sm">
            {/* TOP */}
            <div className="flex justify-between items-start">
              {/* LEFT */}
              <div className="flex gap-4">
                {/* ICON */}
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
                  <i className="ri-archive-line text-blue-600 text-xl"></i>
                </div>

                {/* INFO */}
                <div>
                  <p className="font-semibold text-lg">{preview.connote_no}</p>
                  <p className="text-sm text-gray-400">
                    Booked on{" "}
                    {new Date(
                      preview.history?.[0]?.createdAt,
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* STATUS */}
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs capitalize">
                {preview.status}
              </span>
            </div>

            {/* MIDDLE */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm text-gray-600">
              {/* ORIGIN DEST */}
              <div className="flex items-center gap-2 col-span-2">
                <i className="ri-map-pin-line text-gray-400"></i>
                <p>
                  {preview.origin} → {preview.destination}
                </p>
              </div>

              {/* PICKUP DATE */}
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-gray-400"></i>
                <p>
                  pickup:{" "}
                  {new Date(
                    preview.history?.[0]?.createdAt,
                  ).toLocaleDateString()}
                </p>
              </div>

              {/* WEIGHT */}
              <div className="flex items-center gap-2">
                <i className="ri-truck-line text-gray-400"></i>
                <p>
                  {preview.weight} kg ({preview.qty} {preview.unit})
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t my-5"></div>

            {/* BOTTOM */}
            <div className="flex justify-between items-center">
              {/* CARRIER */}
              <div>
                <p className="text-xs text-gray-400">Type</p>
                <p className="font-medium">{preview.cargo_type}</p>
              </div>

              {/* PRICE (optional dummy) */}
              <div className="text-left">
                <p className="text-xs text-gray-400">Receiver</p>
                <p className="font-semibold text-sm">{preview.receiver_name}</p>
              </div>

              {/* ACTION */}
              <div className="flex flex-col gap-2">
                <Link
                  href={`/track-shipment/${preview.connote_no}`}
                  className="border px-4 py-1 rounded-full text-sm hover:bg-gray-100 text-center"
                >
                  Track History
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">Tracking data not found</p>
        )}
      </section>

      {/* CTA */}
      <section className="w-full py-8 container mx-auto">
        <div className="bg-gray-100">
          <div className="py-8 w-3/4 mx-auto flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Start Sending instantly!</h2>
              <p>Sign up for your free account now.</p>
            </div>

            <Link
              href="https://app.freezelogistics.com.au/register"
              target="_blank"
            >
              <button className="text-white bg-blue-500 px-6 py-2 rounded-2xl hover:bg-[#0F253C]">
                Create New Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
