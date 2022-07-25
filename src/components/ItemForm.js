import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// Abstracted
const ItemForm = ({ onItemFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
  })

const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  })
}

  const handleSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData
    });
    formData.name=''
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );

}

// Non-Abstracted
// function ItemForm({ onItemFormSubmit }) {
//   const [name, setName] = useState('')
//   const [category, setCategory] = useState('Produce')

//   const handleNameChange = (event) => {
//     setName(event.target.value)
//   }

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     onItemFormSubmit({
//       id: uuid(), 
//       name,
//       category,
//     })
//     setName('')
//   }

//   return (
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={name} onChange={handleNameChange}/>
//       </label>

//       <label>
//         Category:
//         <select name="category" value={category} onChange={handleCategoryChange}>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

export default ItemForm;
