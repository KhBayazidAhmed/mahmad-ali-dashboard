"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ServiceAndPricingItems } from "@/lib/config";

export default function Page() {
  const [offers, setOffers] = useState([
    {
      title: "Current Offer",
      description:
        "Get 20% off on your next purchase. Valid until 30th November 2024.",
      running: true,
    },
    {
      title: "Price 5 taka!",
      description:
        "Special offer from now to 30th November 2024 price will be 5 taka",
      running: false,
    },
  ]);

  const [newOffer, setNewOffer] = useState({ title: "", description: "" });

  const handleAddOffer = () => {
    if (newOffer.title && newOffer.description) {
      setOffers([
        ...offers,
        {
          title: newOffer.title,
          description: newOffer.description,
          running: false,
        },
      ]);
      setNewOffer({ title: "", description: "" });
    }
  };

  const toggleOfferStatus = (index: number) => {
    setOffers((prev) =>
      prev.map((offer, i) =>
        i === index ? { ...offer, running: !offer.running } : offer
      )
    );
  };

  return (
    <div className="p-6 bg-background">
      <div className="max-w-md mx-auto space-y-6">
        {/* Add New Offer Section */}
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Add New Offer
          </h3>
          <div className="space-y-4">
            {ServiceAndPricingItems.map((heading, index) => (
              <div key={index} className="rounded-md border p-4 space-y-3">
                <Label className="block">Current price: 10 Taka</Label>
                <Input type="number" placeholder={`${heading} price`} />
              </div>
            ))}

            <Button
              onClick={handleAddOffer}
              variant="destructive"
              className="w-full"
            >
              Add Offer
            </Button>
          </div>
        </div>

        {/* Display Offers Section */}
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`rounded-lg border p-4 flex items-start justify-between gap-3 ${
              offer.running
                ? "bg-red-500 text-red-100 shadow"
                : "bg-card text-card-foreground shadow"
            }`}
          >
            <div>
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm">{offer.description}</p>
            </div>
            <Button
              onClick={() => toggleOfferStatus(index)}
              variant={offer.running ? "secondary" : "destructive"}
            >
              {offer.running ? "End" : "Start"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
