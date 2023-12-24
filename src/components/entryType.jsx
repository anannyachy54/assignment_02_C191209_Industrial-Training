

export default function Entrytype() {
 
  return(
    <select
    id="type"
    name="type"
    className="block w-20 shrink-0 rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    value="income"
  >
    <option value="income">+</option>
    <option value="expense">-</option>
  </select>

  );
}
