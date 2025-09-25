"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import KV from "./KV";
import Field from "./Field";

export default function PersonalDetailsCard() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      {/* header */}
      <div className="flex items-center justify-between border-b border-[#DDE5EA] pb-2">
        <h2 className="text-[18px] font-semibold text-[#334651]">
          Personal Details
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white rounded-md h-9 px-4 shadow-sm">
              Edit Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Personal Details</DialogTitle>
            </DialogHeader>

            {/* form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Field label="Name" defaultValue="Ester Grace" />
              <Field label="Initials" defaultValue="E.G." />
              <Field label="Surname" defaultValue="Howard" />
              <Field label="Gender" defaultValue="Female" />
              <Field label="Marital Status" defaultValue="Married" />
              <Field label="Spouse's Name" defaultValue="Michael Howard" />
              <Field label="Date of Birth" defaultValue="1985-01-23" />
              <Field label="ID Type - Number" defaultValue="RSA ID - 6392837649123" />
              <Field label="Mobile Number" defaultValue="21894030383" />
              <Field label="Email Address" defaultValue="esterhoward@badisa.com" />
              <Field
                className="md:col-span-2"
                label="Address"
                defaultValue="12B Ocean View Estate, 45 Harmony Lane, Sea Point, Cape Town"
              />
              <Field label="Postal Code" defaultValue="111111" />
              <Field label="Tax Number" defaultValue="121212121212" />
              <Field label="Ethnic Group" defaultValue="White" />
              <Field label="Language" defaultValue="English" />

              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white">
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* static values */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-3 text-[14px]">
        <KV k="Name" v="Ester Grace" />
        <KV k="Initials" v="E.G." />
        <KV k="Surname" v="Howard" />
        <KV k="Gender" v="Female" />
        <KV k="Marital Status" v="Married" />
        <KV k="Spouse's Name" v="Michael Howard" />
        <KV k="Date of Birth" v="1985-01-23" />
        <KV k="ID Type - Number" v="RSA ID - 6392837649123" />
        <KV k="Mobile Number" v="21894030383" />
        <KV k="Email Address" v="esterhoward@badisa.com" />
        <KV
          k="Address"
          v="12B Ocean View Estate, 45 Harmony Lane, Sea Point, Cape Town"
          span
        />
        <KV k="Postal Code" v="111111" />
        <KV k="Tax Number" v="121212121212" />
        <KV k="Ethnic Group" v="White" />
        <KV k="Language" v="English" />
      </div>
    </Card>
  );
}
