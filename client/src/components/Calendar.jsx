import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import React from "react";

/**
 * Props:
 * - selected: Date | undefined
 * - onSelect: fn
 * - disabledRanges: array of { from: Date, to: Date } to disable
 */
export default function Calendar({ selected, onSelect, disabledRanges = [] }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={disabledRanges}
        modifiersClassNames={{ selected: "rdp-day_selected" }}
      />
    </div>
  );
}
