import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconFilled } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkQuote, removeQuote } from "../redux/actions/quoteActions";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { isSavedBookmark } from "../utility/quoteLogics";

export const Quote = ({ quote }) => {
  const quotesState = useSelector((state) => state.bookmarkedQuotes);

  const dispatch = useDispatch();

  const saveToBookMark = (quote) => {
    dispatch(bookmarkQuote(quote));
    toast.success("added to bookmarks");
  };

  const removeFromBookmark = (quoteId) => {
    dispatch(removeQuote(quoteId));
    toast.error("removed from bookmarks");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="quote"
      >
        <div className="quote__header">
          <p className="quote__text">{quote?.content}</p>
        </div>
        <div className="quote__footer">
          <p>-{quote?.author}</p>

          {isSavedBookmark(quotesState, quote) ? (
            <BookmarkIconFilled
              onClick={() => removeFromBookmark(quote._id)}
              id="bookmark-icon"
              color="white"
              width={20}
              height={20}
            />
          ) : (
            <BookmarkIcon
              onClick={() => saveToBookMark(quote)}
              id="bookmark-icon"
              color="white"
              width={20}
              height={20}
            />
          )}
        </div>
      </motion.div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: 15,
          },
        }}
      />
    </>
  );
};
