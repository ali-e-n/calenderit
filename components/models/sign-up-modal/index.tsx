"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SignUpModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SignUpModal({ open, onOpenChange }: SignUpModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to auth API
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-white/20 bg-background/90 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-background/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Create account
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-1">
          <div className="space-y-2">
            <Label htmlFor="signup-name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-11 rounded-xl border-white/20 bg-white/50 transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-white/70 dark:bg-white/5 dark:focus-visible:bg-white/10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 rounded-xl border-white/20 bg-white/50 transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-white/70 dark:bg-white/5 dark:focus-visible:bg-white/10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 rounded-xl border-white/20 bg-white/50 transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-white/70 dark:bg-white/5 dark:focus-visible:bg-white/10"
            />
          </div>
          <Button type="submit" className="h-11 w-full rounded-xl font-medium">
            Sign up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
