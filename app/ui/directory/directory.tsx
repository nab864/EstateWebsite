export default function Directory() {

  return (
    <div className="flex">
      <select name="city" id="city-select" className="border p-1 w-96">
        <option value="">Select City</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Florida">Florida</option>
        <option value="Texas">Texas</option>
      </select>

      <select name="category" id="category-select" className="border p-1 w-96 ml-5">
        <option value="">Select Category</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Florida">Florida</option>
        <option value="Texas">Texas</option>
      </select>
    </div>
  )
}