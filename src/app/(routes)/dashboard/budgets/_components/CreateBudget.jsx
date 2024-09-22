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
import { Budgets } from "../../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

function CreateBudget({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { user } = useUser();

  /**
   * Used to Create New Budget
   */
  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData();
      toast("New Budget Created!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="bg-gray-100 dark:bg-gray-800 p-10 rounded-2xl
            items-center flex flex-col border-2 border-dashed border-gray-300 dark:border-gray-600
            cursor-pointer hover:shadow-md"
          >
            <h2 className="text-3xl">+</h2>
            <h2 className="text-gray-900 dark:text-gray-100">
              Create New Budget
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
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
                    Budget Name
                  </h2>
                  <Input
                    placeholder="e.g. Home Decor"
                    onChange={(e) => setName(e.target.value)}
                    className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-gray-900 dark:text-gray-100 font-medium my-1">
                    Budget Amount
                  </h2>
                  <Input
                    type="number"
                    placeholder="e.g. 5000₹"
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onCreateBudget()}
                className="mt-5 w-full rounded-full bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 hover:bg-blue-700 dark:hover:bg-blue-400"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
