'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from '@/components/animate-ui/headless/dialog'
import { useState } from "react";

export function RegisterYourInterest() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register your interest</CardTitle>
        <CardDescription>Enter your email below to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">

        <Button type="submit" className="w-full" onClick={()=> setIsOpen(true)}>
          Register your interest
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogBackdrop />
 
        <DialogPanel from="left" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Greg the AI.</DialogTitle>
            <DialogDescription>
              Please read the following terms of service carefully.
            </DialogDescription>
          </DialogHeader>
 
          <div className="grid gap-4 py-4">
            <p>
             Thanks for registering — you're officially on the inside! 😉
You’ll be the first to know when Greg’s MVP drops. Big things are coming.
            </p>
          </div>
 
          <DialogFooter>
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Go back
            </Button>
          </DialogFooter>
        </DialogPanel>
      </Dialog>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
