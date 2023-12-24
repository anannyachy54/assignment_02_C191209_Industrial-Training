
export default function EntryDescription() {
  
  return(
    <input
            id="description"
            type="text"
            name="description"
            autocomplete="off"
            className="block flex-1 rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Add description"
          />
  );
}
