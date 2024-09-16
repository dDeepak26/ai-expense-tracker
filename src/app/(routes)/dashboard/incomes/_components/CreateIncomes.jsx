"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "../../../../../../utils/dbConfig";
import { Incomes } from "../../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

function CreateIncomes({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  /**
   * Used to Create New Budget
   */
  const onCreateIncomes = async () => {
    const result = await db
      .insert(Incomes)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Incomes.id });

    if (result) {
      refreshData();
      toast("New Income Source Created!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="bg-slate-100 dark:bg-gray-800 p-10 rounded-2xl
            items-center flex flex-col border-2 border-dashed border-gray-300 dark:border-gray-600
            cursor-pointer hover:shadow-md dark:hover:shadow-lg"
          >
            <h2 className="text-3xl text-gray-900 dark:text-gray-100">+</h2>
            <h2 className="text-gray-900 dark:text-gray-100">
              Create New Income Source
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-gray-100">
              Create New Income Source
            </DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  variant="outline"
                  className="text-lg text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-gray-900 dark:text-gray-100 font-medium my-1">
                    Source Name
                  </h2>
                  <Input
                    placeholder="e.g. Youtube"
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-gray-900 dark:text-gray-100 font-medium my-1">
                    Monthly Amount
                  </h2>
                  <Input
                    type="number"
                    placeholder="e.g. 5000$"
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onCreateIncomes()}
                className="
                mt-5 w-full rounded-full
                bg-blue-600 text-white
                hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                dark:bg-blue-500 dark:hover:bg-blue-400
                disabled:opacity-50
                transition-all duration-200
              "
              >
                Create Income Source
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateIncomes;
