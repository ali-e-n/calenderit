"use client";

import { useState, useCallback } from "react";
import {
  CalendarIcon,
  Scissors,
  Palette,
  Smile,
  Sparkles,
  Droplets,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookingModal } from "@/components/models/booking-modal";
import { cn } from "@/lib/utils";

const DEFAULT_HOUR = 9;
const DEFAULT_MINUTE = 0;

const DUMMY_SERVICES: Array<{
  value: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}> = [
  { value: "Haircut & Styling", label: "Haircut & Styling", Icon: Scissors },
  { value: "Hair Color", label: "Hair Color", Icon: Palette },
  { value: "Beard Trim", label: "Beard Trim", Icon: Scissors },
  { value: "Facial", label: "Facial", Icon: Smile },
  { value: "Makeup", label: "Makeup", Icon: Sparkles },
  { value: "Hair Spa", label: "Hair Spa", Icon: Droplets },
];

export function HeroDatePicker() {
  const [serviceTitle, setServiceTitle] = useState("");
  const [dateTime, setDateTime] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);
  const { openBooking } = useBookingModal();

  const handleSelectDate = useCallback((d: Date | undefined) => {
    if (!d) {
      setDateTime(undefined);
      return;
    }
    setDateTime((prev) => {
      const next = new Date(d);
      if (prev) {
        next.setHours(prev.getHours(), prev.getMinutes(), 0, 0);
      } else {
        next.setHours(DEFAULT_HOUR, DEFAULT_MINUTE, 0, 0);
      }
      return next;
    });
  }, []);

  const handleTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || !dateTime) return;
    const [h, m] = value.split(":").map(Number);
    setDateTime((prev) => {
      if (!prev) return prev;
      const next = new Date(prev);
      next.setHours(h, m, 0, 0);
      return next;
    });
  }, [dateTime]);

  const timeValue = dateTime ? format(dateTime, "HH:mm") : "";

  const handleBook = () => {
    openBooking({
      serviceTitle: serviceTitle.trim() ? serviceTitle : undefined,
      dateTime,
    });
  };

  return (
    <div className="mt-10 w-full max-w-3xl">
      {/* Horizontal booking bar — single white container with border */}
      <div className="flex flex-col overflow-hidden rounded-xl border-2 border-amber-400 bg-white shadow-lg sm:flex-row sm:items-stretch">
        {/* Service */}
        <div className="flex min-h-12 flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 sm:border-b-0 sm:border-r sm:border-gray-200 sm:py-0">
          <Scissors className="size-5 shrink-0 text-gray-500" aria-hidden />
          <Select value={serviceTitle} onValueChange={setServiceTitle}>
            <SelectTrigger className="h-auto w-full border-0 bg-transparent p-0 text-sm text-gray-900 shadow-none focus:ring-0 focus:ring-offset-0 [&_[data-slot=select-value]]:text-gray-900 [&_[data-slot=select-value]]:data-[placeholder]:text-gray-500">
              <SelectValue placeholder="Choose service" />
            </SelectTrigger>
            <SelectContent>
              {DUMMY_SERVICES.map(({ value, label, Icon }) => (
                <SelectItem key={value} value={value}>
                  <span className="flex items-center gap-2">
                    <Icon className="size-4 text-muted-foreground" aria-hidden />
                    <span>{label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date & time */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex min-h-12 flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 text-left transition-colors hover:bg-gray-50 sm:border-b-0 sm:border-r sm:border-gray-200 sm:py-0"
            >
              <CalendarIcon className="size-5 shrink-0 text-gray-500" aria-hidden />
              <span className={cn("text-sm", dateTime ? "text-gray-900 font-medium" : "text-gray-500")}>
                {dateTime
                  ? format(dateTime, "EEE, MMM d 'at' h:mm a")
                  : "Pick date & time"}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" sideOffset={8}>
            <Calendar
              mode="single"
              selected={dateTime}
              onSelect={handleSelectDate}
              disabled={{ before: new Date() }}
              initialFocus
            />
            <div className="border-t border-border px-3 py-3">
              <label htmlFor="hero-time" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Time
              </label>
              <input
                id="hero-time"
                type="time"
                value={timeValue}
                onChange={handleTimeChange}
                disabled={!dateTime}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              />
            </div>
          </PopoverContent>
        </Popover>

        {/* Book button */}
        <button
          type="button"
          onClick={handleBook}
          disabled={!serviceTitle || !dateTime}
          className="min-h-12 shrink-0 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:px-8"
        >
          Book
        </button>
      </div>
    </div>
  );
}
