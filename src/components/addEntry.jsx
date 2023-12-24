import React from 'react';
import AddButton from "./addButton";
import EntryDescription from "./entryDescription";
import EntryValue from "./entryValue";
import EntryType from "./entryType";

export default function AddEntry() {
    return (
      <div className="border-b bg-gray-100 py-3">
        <div className="mx-auto max-w-xl px-5">
          <form className="flex gap-2">
            <EntryType />
            <EntryDescription />
            <EntryValue />
            <AddButton/>
          </form>
        </div>
      </div>
 );
}