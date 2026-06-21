"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type BookingOpenParams = {
  serviceTitle?: string;
  dateTime?: Date;
};

type BookingModalContextValue = {
  openBooking: (params?: BookingOpenParams) => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}

const DEFAULT_HOUR = 9;
const DEFAULT_MINUTE = 0;

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [dateTime, setDateTime] = useState<Date | undefined>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const openBooking = (params?: BookingOpenParams) => {
    // Prefill from caller (hero/service cards). If omitted, clear to avoid stale values.
    if (params && "serviceTitle" in params) {
      setServiceTitle(params.serviceTitle?.trim() ? params.serviceTitle : "");
    } else {
      setServiceTitle("");
    }

    if (params && "dateTime" in params) {
      setDateTime(params.dateTime);
    } else {
      setDateTime(undefined);
    }

    setOpen(true);
  };

  const ctxValue = useMemo<BookingModalContextValue>(() => ({ openBooking }), []);

  const timeValue = dateTime ? format(dateTime, "HH:mm") : "";

  const handleSelectDate = (d: Date | undefined) => {
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
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || !dateTime) return;
    const [h, m] = value.split(":").map(Number);
    setDateTime((prev) => {
      if (!prev) return prev;
      const next = new Date(prev);
      next.setHours(h, m, 0, 0);
      return next;
    });
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (serviceTitle.trim()) params.set("service", serviceTitle.trim());
    if (dateTime) {
      params.set("date", format(dateTime, "yyyy-MM-dd"));
      params.set("time", format(dateTime, "HH:mm"));
    }
    // Required fields (also enforced by the form inputs)
    params.set("name", name.trim());
    params.set("phone", phone.trim());
    params.set("email", email.trim());

    setOpen(false);
    router.push(`/confirmation?${params.toString()}`);
  };

  return (
    <BookingModalContext.Provider value={ctxValue}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-[calc(100%-2rem)] max-h-[calc(100vh-3.5rem)] overflow-y-auto p-0 shadow-[0_16px_64px_rgba(0,0,0,0.6)] sm:max-h-none sm:max-w-2xl" style={{ background: "#1A1A1A", border: "1px solid rgba(201,168,76,0.22)" }}>
          <div className="grid gap-0 sm:grid-cols-[1fr_360px]">
            <div className="border-b border-primary/15 p-6 sm:border-b-0 sm:border-r sm:border-primary/15">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  Book an appointment
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <Calendar
                  mode="single"
                  selected={dateTime}
                  onSelect={handleSelectDate}
                  disabled={{ before: new Date() }}
                  initialFocus
                  className="!p-0 w-full"
                />
                <div className="space-y-2">
                  <Label htmlFor="booking-time" className="text-sm font-medium">
                    Time
                  </Label>
                  <input
                    id="booking-time"
                    type="time"
                    value={timeValue}
                    onChange={handleTimeChange}
                    disabled={!dateTime}
                    className={cn(
                      "h-11 w-full border border-primary/15 bg-background px-3 text-sm outline-none transition-colors focus:border-primary/40 disabled:pointer-events-none disabled:opacity-50"
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleContinue} className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="booking-service" className="text-sm font-medium">
                    Service
                  </Label>
                  <Input
                    id="booking-service"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    placeholder="e.g. Haircut"
                    className="h-11 rounded-xl border-white/20 bg-white/5 placeholder:text-muted-foreground/70 focus-visible:bg-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="booking-name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="booking-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="h-11 rounded-xl border-white/20 bg-white/5 placeholder:text-muted-foreground/70 focus-visible:bg-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="booking-phone" className="text-sm font-medium">
                    Phone
                  </Label>
                  <Input
                    id="booking-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 890"
                    required
                    className="h-11 rounded-xl border-white/20 bg-white/5 placeholder:text-muted-foreground/70 focus-visible:bg-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="booking-email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="booking-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="h-11 rounded-xl border-white/20 bg-white/5 placeholder:text-muted-foreground/70 focus-visible:bg-white/10"
                  />
                </div>

                <Button type="submit" variant="glass" className="mt-2 h-11 w-full font-medium">
                  Confirm
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Review your details on the confirmation page.
                </p>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookingModalContext.Provider>
  );
}

