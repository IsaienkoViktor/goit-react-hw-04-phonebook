import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { id: crypto.randomUUID(), name, number };
    onSubmit(contact);
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          placeholder="John Smith"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          placeholder="111-11-11"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             placeholder="John Smith"
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="text"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             placeholder="111-11-11"
//           />
//         </label>
//         <button className={s.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
