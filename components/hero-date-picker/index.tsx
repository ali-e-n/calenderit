"use client";

import { useState } from "react";
import { CalendarIcon, Scissors, Palette, Smile, Sparkles, Droplets, ArrowRight, X } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useBookingModal } from "@/components/models/booking-modal";
import { cn } from "@/lib/utils";

const SERVICES = [
  { value: "Haircut & Styling", Icon: Scissors },
  { value: "Hair Color", Icon: Palette },
  { value: "Beard Trim", Icon: Scissors },
  { value: "Facial", Icon: Smile },
  { value: "Makeup", Icon: Sparkles },
  { value: "Hair Spa", Icon: Droplets },
];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

function parseTimeSlot(slot: string, base: Date): Date {
  const [time, period] = slot.split(" ");
  const [h, m] = time.split(":").map(Number);
  let hour = h;
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  const d = new Date(base);
  d.setHours(hour, m, 0, 0);
  return d;
}

export function HeroDatePicker() {
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState("");
  const [calOpen, setCalOpen] = useState(false);
  const { openBooking } = useBookingModal();

  const handleBook = () => {
    const dateTime = date && timeSlot ? parseTimeSlot(timeSlot, date) : date;
    openBooking({ serviceTitle: service || undefined, dateTime });
  };

  return (
    <div
      className="w-full overflow-hidden rounded-2xl"
      style={{
        background: "rgba(8, 6, 20, 0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(168, 85, 247, 0.18)",
        boxShadow: "0 16px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(168,85,247,0.10) inset",
      }}
    >
      {/* ── Step 1: Service ── */}
      <div className="px-5 pt-5 pb-4">
        <p className="mb-3 text-[9px] font-semibold tracking-[0.38em] uppercase text-primary/60">
          01 — Choose a service
        </p>
        <div
          className="flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SERVICES.map(({ value, Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => setService((s) => (s === value ? "" : value))}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-medium transition-all duration-200",
                service === value
                  ? "text-white shadow-[0_2px_16px_rgba(168,85,247,0.50)]"
                  : "border border-white/10 bg-white/5 text-white/55 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
              )}
              style={service === value ? { background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" } : {}}
            >
              <Icon className="size-3 shrink-0" />
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px" style={{ background: "rgba(168,85,247,0.12)" }} />

      {/* ── Step 2: Date & Time ── */}
      <div className="px-5 pt-4 pb-5">
        <p className="mb-2.5 text-[9px] font-semibold tracking-[0.38em] uppercase text-primary/60">
          02 — Pick date & time
        </p>

        <div className="flex items-center gap-2">

          {/* Date trigger — compact */}
          <Popover open={calOpen} onOpenChange={setCalOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "group flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-left transition-all duration-200",
                  date
                    ? "border-primary/40 bg-primary/12 text-white"
                    : "border-white/10 bg-white/5 text-white/50 hover:border-primary/30 hover:bg-primary/8 hover:text-white/80"
                )}
              >
                <CalendarIcon className={cn("size-3.5 shrink-0", date ? "text-primary" : "text-white/35")} />
                <span className="text-[11px] font-medium">
                  {date ? format(date, "MMM d") : "Date"}
                </span>
                {date && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setDate(undefined); setTimeSlot(""); }}
                    className="ml-1 text-white/30 hover:text-white/70"
                  >
                    <X className="size-2.5" />
                  </button>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 backdrop-blur-xl"
              style={{ background: "#0D0D22", border: "1px solid rgba(168,85,247,0.20)" }}
              align="start"
              sideOffset={8}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => { setDate(d); if (d) setCalOpen(false); setTimeSlot(""); }}
                disabled={{ before: new Date() }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Time slot chips — scrollable, compact */}
          <div
            className="flex flex-1 gap-1 overflow-x-auto rounded-lg border border-white/10 bg-white/5 px-2 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {date ? TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTimeSlot((t) => (t === slot ? "" : slot))}
                className={cn(
                  "shrink-0 rounded-md px-2 py-1 text-[10px] font-medium transition-all duration-150",
                  timeSlot === slot
                    ? "text-white"
                    : "text-white/40 hover:bg-white/8 hover:text-white/75"
                )}
                style={timeSlot === slot ? { background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" } : {}}
              >
                {slot}
              </button>
            )) : (
              <span className="px-1 text-[10px] text-white/20">Pick a date first</span>
            )}
          </div>
        </div>

        {/* Book button */}
        <button
          type="button"
          onClick={handleBook}
          className="mt-3.5 flex h-10 w-full items-center justify-center gap-2 rounded-xl text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(168,85,247,0.60)] active:translate-y-0"
          style={{
            background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
            boxShadow: "0 4px 24px rgba(168,85,247,0.40)",
          }}
        >
          Book Appointment
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
