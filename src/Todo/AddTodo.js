import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue='') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    value: () => value,
    clear: () => setValue('')
  }
}

function AddTodo({onCreate}) {
  const input = useInputValue();

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form action="" onSubmit={submitHandler}  className="form">
        <input className='form__input' type="text" {...input.bind}  placeholder='add new todo...' />
        <button type='submit'>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;
